import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
const session='qa_'+randomUUID();
for(const [event_type,metadata] of [
 ['page_view',{source:'direct'}],['menu_open',{menu:'dinner',source:'direct'}],
 ['button_click',{component:'selection_cart',action:'cart_add',product_id:'dinner-0-0',product_name:'Ζυμωτό Ψωμί για 2 με προζύμι',quantity_delta:1,source:'direct'}]
]){
 const r=await fetch('https://www.zisto.app/api/track',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://tomacity.github.io'},redirect:'error',
 body:JSON.stringify({project_key:'d007b558-b9d8-487f-b64e-6b9b76b01810',event_type,metadata,session_id:session,visitor_id:session,page_url:'https://tomacity.github.io/40-tales-fox/#dinner-gr',page_path:'/40-tales-fox/',utm_campaign:'zisto_qa_20261115_ci'})});
 assert.equal(r.status,201,await r.text());assert.equal(r.headers.get('access-control-allow-origin'),'*');
}
console.log('Live tracking ingestion passed for 40 Tales Fox.');
