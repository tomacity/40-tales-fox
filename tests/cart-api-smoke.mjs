import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
const endpoint='https://pdbdjiobvbxbjbqacpoy.supabase.co/functions/v1/fox-cart';
const owner=randomUUID(),guest=randomUUID();
let session;
async function call(action,token,extra={}) {
 const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://tomacity.github.io'},body:JSON.stringify({action,token,session,...extra}),signal:AbortSignal.timeout(20000)});
 return {status:response.status,data:await response.json()};
}
try{
 let r=await call('create',owner,{name:'Automated test',initial:[{product:'dinner-0-0',quantity:2}]});
 assert.equal(r.status,200,JSON.stringify(r.data));session=r.data.session;
 assert.equal(r.data.items[0].quantity,2);
 r=await call('join',guest,{name:'Second visitor'});assert.equal(r.status,200);assert.equal(r.data.members,2);assert.equal(r.data.items[0].member,null);
 const changes=await Promise.all([call('change',guest,{product:'dinner-1-0',delta:1}),call('change',guest,{product:'dinner-1-0',delta:1})]);
 changes.forEach(r=>assert.equal(r.status,200,JSON.stringify(r.data)));
 r=await call('read',owner);assert.equal(r.data.items.find(x=>x.product==='dinner-1-0').quantity,2,'concurrent increments must both persist');
 r=await call('change',guest,{member:owner,product:'dinner-0-0',delta:-1});assert.equal(r.status,403);
 r=await call('change',owner,{member:guest,product:'dinner-1-0',delta:-1});assert.equal(r.status,200);
 r=await call('read',guest);assert.equal(r.data.items.find(x=>x.product==='dinner-1-0').quantity,1,'second visitor sees host edit');
 r=await call('change',guest,{product:'invalid-product',delta:1});assert.equal(r.status,400);
 console.log('Live API verified: creation, atomic import, join, shared updates, concurrent changes, member permissions, host controls and catalog validation.');
}finally{
 if(session){const r=await call('close',owner);assert.equal(r.status,200);const expired=await call('read',guest);assert.equal(expired.status,410);console.log('Group close and expiry verified.');}
}
