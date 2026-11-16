const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
Deno.serve(async(req)=>{
 const origin=req.headers.get('origin')||'';
 const allowed=origin==='https://tomacity.github.io'||/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin',
 'Access-Control-Allow-Origin':allowed?origin:'https://tomacity.github.io','Access-Control-Allow-Headers':'content-type','Access-Control-Allow-Methods':'POST, OPTIONS'};
 const respond=(data,status=200)=>new Response(JSON.stringify(data),{status,headers});
 if(req.method==='OPTIONS') return new Response(null,{status:204,headers});
 if(req.method!=='POST') return respond({error:'method'},405);
 if(origin&&!allowed) return respond({error:'origin'},403);
 try{
  const raw=await req.text();
  if(raw.length>24000) return respond({error:'invalid_request'},400);
  const p=JSON.parse(raw);
  const key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const menuResponse=await fetch(Deno.env.get('SUPABASE_URL')+'/rest/v1/business_menu_catalogs?business_id=eq.de2efc5b-d096-4cde-8ed5-88ded13c6d8f&select=catalog&limit=1',{headers:{apikey:key,Authorization:'Bearer '+key}});
  if(!menuResponse.ok)return respond({error:'unavailable'},503);
  const [menu]=await menuResponse.json();
  if(!menu)return respond({error:'unavailable'},503);
  const products=Object.fromEntries(menu.catalog.products.flatMap(product=>product.prices.map(v=>[v.id,v])));
  if(!['create','join','read','change','close'].includes(p.action)||!uuid.test(p.token||'')||
   (p.action!=='create'&&!uuid.test(p.session||''))) return respond({error:'invalid_request'},400);
  if(p.action==='change'&&((p.delta===1&&!Object.hasOwn(products,p.product))||typeof p.product!=='string'||p.product.length>100||![1,-1].includes(p.delta)||(p.member&&!uuid.test(p.member)))) return respond({error:'invalid_request'},400);
  if(p.action==='create'&&p.initial&&(!Array.isArray(p.initial)||p.initial.length>200||p.initial.some(x=>!Object.hasOwn(products,x.product)||!Number.isInteger(x.quantity)||x.quantity<1||x.quantity>99))) return respond({error:'invalid_request'},400);
  const ip=req.headers.get('x-forwarded-for')?.split(',')[0]||'unknown';
  const hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip+new Date().toISOString().slice(0,10)));
  const source=Array.from(new Uint8Array(hash),b=>b.toString(16).padStart(2,'0')).join('');
  const payload={action:p.action,session:p.session,token:p.token,name:typeof p.name==='string'?p.name.slice(0,32):'Guest',
   product:p.product,member:p.member,delta:p.delta,shared:p.shared===true,source,
   initial:p.initial?.map(x=>({product:x.product,quantity:x.quantity,shared:x.shared===true}))};
  const r=await fetch(Deno.env.get('SUPABASE_URL')+'/rest/v1/rpc/fox_cart_api',{
   method:'POST',headers:{'apikey':key,'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({p:payload})});
  const data=await r.json();
  if(!r.ok){
   const known=['expired','forbidden','rate_limit','group_full','cart_full','invalid_quantity'];
   const error=known.find(x=>data.message===x)||'unavailable';
   return respond({error},error==='expired'?410:error==='forbidden'?403:error==='rate_limit'?429:400);
  }
  return respond(data);
 }catch{return respond({error:'unavailable'},503);}
});