import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
// Recurring checks use an unregistered key, so no artificial visits enter business statistics.
const endpoint='https://www.zisto.app/api/track';
const preflight=await fetch(endpoint,{method:'OPTIONS',headers:{Origin:'https://tomacity.github.io','Access-Control-Request-Method':'POST','Access-Control-Request-Headers':'content-type'},redirect:'error'});
assert.equal(preflight.status,204);
assert.equal(preflight.headers.get('access-control-allow-origin'),'*');
const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://tomacity.github.io'},redirect:'error',
body:JSON.stringify({project_key:randomUUID(),event_type:'page_view',session_id:'qa_'+randomUUID(),metadata:{source:'direct'}})});
assert.equal(response.status,404,await response.text());
console.log('Tracking endpoint and CORS verified without artificial business visits.');
