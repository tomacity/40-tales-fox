create schema if not exists zisto_cart_private;
revoke all on schema zisto_cart_private from public, anon, authenticated;
grant usage on schema zisto_cart_private to service_role;
create table zisto_cart_private.sessions (
 id uuid primary key default gen_random_uuid(),
 owner_token uuid not null,
 created_at timestamptz not null default now(),
 expires_at timestamptz not null default now() + interval '6 hours',
 source_hash text not null,
 closed boolean not null default false
);
create index on zisto_cart_private.sessions(source_hash,created_at);
create table zisto_cart_private.members (
 session_id uuid references zisto_cart_private.sessions on delete cascade,
 token uuid not null,
 name text not null check(length(name) between 1 and 32),
 primary key(session_id,token)
);
create table zisto_cart_private.items (
 session_id uuid not null,
 member_token uuid not null,
 product_id text not null,
 shared boolean not null default false,
 quantity integer not null check(quantity between 1 and 99),
 primary key(session_id,member_token,product_id,shared),
 foreign key(session_id,member_token) references zisto_cart_private.members on delete cascade
);
alter table zisto_cart_private.sessions enable row level security;
alter table zisto_cart_private.members enable row level security;
alter table zisto_cart_private.items enable row level security;
revoke all on all tables in schema zisto_cart_private from public,anon,authenticated;
grant all on all tables in schema zisto_cart_private to service_role;
create or replace function public.fox_cart_api(p jsonb) returns jsonb
language plpgsql security invoker set search_path = '' as $$
declare
 a text := p->>'action'; sid uuid := nullif(p->>'session','')::uuid;
 tok uuid := (p->>'token')::uuid; target uuid; s zisto_cart_private.sessions;
 qty integer; result jsonb;
begin
 if tok is null then raise exception 'invalid_token'; end if;
 if a='create' then
   delete from zisto_cart_private.sessions where expires_at < now() - interval '1 day';
   if (select count(*) from zisto_cart_private.sessions where source_hash=p->>'source' and created_at > now()-interval '1 hour') >= 20 then raise exception 'rate_limit'; end if;
   insert into zisto_cart_private.sessions(owner_token,source_hash) values(tok,p->>'source') returning * into s;
   sid:=s.id;
   insert into zisto_cart_private.members values(sid,tok,left(coalesce(nullif(trim(p->>'name'),''),'Guest'),32));
   insert into zisto_cart_private.items(session_id,member_token,product_id,shared,quantity)
     select sid,tok,x->>'product',coalesce((x->>'shared')::boolean,false),least(99,greatest(1,(x->>'quantity')::integer))
     from jsonb_array_elements(coalesce(p->'initial','[]'::jsonb)) x;
 else
   select * into s from zisto_cart_private.sessions where id=sid for update;
   if s.id is null or s.closed or s.expires_at <= now() then raise exception 'expired'; end if;
   if a='join' then
     if not exists(select 1 from zisto_cart_private.members where session_id=sid and token=tok) and
        (select count(*) from zisto_cart_private.members where session_id=sid)>=20 then raise exception 'group_full'; end if;
     insert into zisto_cart_private.members values(sid,tok,left(coalesce(nullif(trim(p->>'name'),''),'Guest'),32))
       on conflict(session_id,token) do nothing;
   end if;
   if not exists(select 1 from zisto_cart_private.members where session_id=sid and token=tok) then raise exception 'forbidden'; end if;
 end if;
 if a='change' then
   target:=coalesce(nullif(p->>'member','')::uuid,tok);
   if target<>tok and s.owner_token<>tok then raise exception 'forbidden'; end if;
   if not exists(select 1 from zisto_cart_private.members where session_id=sid and token=target) then raise exception 'forbidden'; end if;
   qty:= (p->>'delta')::integer;
   if qty not in (-1,1) then raise exception 'invalid_quantity'; end if;
   if qty=1 then
     if (select count(*) from zisto_cart_private.items where session_id=sid)>=200 then raise exception 'cart_full'; end if;
     insert into zisto_cart_private.items values(sid,target,p->>'product',coalesce((p->>'shared')::boolean,false),1)
       on conflict(session_id,member_token,product_id,shared) do update set quantity=least(99,zisto_cart_private.items.quantity+1);
   else
     delete from zisto_cart_private.items where session_id=sid and member_token=target and product_id=p->>'product' and shared=coalesce((p->>'shared')::boolean,false) and quantity=1;
     update zisto_cart_private.items set quantity=quantity-1 where session_id=sid and member_token=target and product_id=p->>'product' and shared=coalesce((p->>'shared')::boolean,false);
   end if;
 elsif a='close' then
   if s.owner_token<>tok then raise exception 'forbidden'; end if;
   update zisto_cart_private.sessions set closed=true where id=sid;
 elsif a not in ('create','join','read') then raise exception 'invalid_action';
 end if;
 select jsonb_build_object('session',sid,'expires',s.expires_at,'owner',s.owner_token=tok,
 'members',(select count(*) from zisto_cart_private.members where session_id=sid),
 'items',coalesce((select jsonb_agg(jsonb_build_object('product',i.product_id,'quantity',i.quantity,'shared',i.shared,'name',m.name,'mine',i.member_token=tok,
 'member',case when s.owner_token=tok or i.member_token=tok then i.member_token else null end))
 from zisto_cart_private.items i join zisto_cart_private.members m on m.session_id=i.session_id and m.token=i.member_token where i.session_id=sid),'[]'::jsonb))
 into result;
 return result;
end $$;
revoke all on function public.fox_cart_api(jsonb) from public,anon,authenticated;
grant execute on function public.fox_cart_api(jsonb) to service_role;
