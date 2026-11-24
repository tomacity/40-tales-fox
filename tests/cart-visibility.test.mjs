import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';

let handler;
globalThis.Deno={serve(callback){handler=callback;},env:{get:()=> 'https://test.invalid'}};
await import('../cart-api.ts');

const variants=['glass','bottle'];
const hidden={hidden:true,prices:variants.map(id=>({id,cents:500}))};
const legacy={prices:[{id:'coffee',cents:400}]};
let writes=0;
globalThis.fetch=async (url,options)=>{
 if(url.includes('/business_menu_catalogs?'))return Response.json([{catalog:{products:[hidden,legacy]}}]);
 assert.match(url,/\/rpc\/fox_cart_api$/);
 if(JSON.parse(options.body).p.action!=='read')writes++;
 return Response.json({items:[...variants,'coffee'].map(product=>({product,quantity:1}))});
};
const token=randomUUID(),session=randomUUID();
const call=(action,body={})=>handler(new Request('http://localhost',{
 method:'POST',body:JSON.stringify({action,token,session,...body})
}));
for(const product of variants){
 assert.equal((await call('change',{product,delta:1})).status,400);
 assert.equal((await call('create',{initial:[{product,quantity:1}]})).status,400);
}
assert.equal(writes,0);
assert.deepEqual((await (await call('read')).json()).items,[{product:'coffee',quantity:1}]);
assert.equal((await call('change',{product:'coffee',delta:1})).status,200);
hidden.hidden=false;
assert.equal((await call('change',{product:'glass',delta:1})).status,200);
assert.equal((await call('create',{initial:[{product:'bottle',quantity:1}]})).status,200);
assert.equal(writes,3);
