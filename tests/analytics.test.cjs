const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),{webcrypto}=require('node:crypto');
const script=fs.readFileSync(new URL('../tracker.js','file:///'+__filename.replace(/\\/g,'/')),'utf8');
function init(optOut=false){
 const requests=[],listeners={},store=new Map(),home={lang:'el'},screen={id:'dinner-gr',classList:{contains:x=>x==='screen'},querySelector:()=>({textContent:'Lunch & Dinner'})};
 const location=new URL('https://tomacity.github.io/40-tales-fox/?party=SECRET&source=nfc#dinner-gr');
 const document={referrer:'https://example.com/?private=secret',getElementById:id=>id==='home'?home:id==='dinner-gr'||id==='dinner-en'?screen:null,addEventListener:(e,f)=>listeners[e]=f};
 const storage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
 const context={window:{addEventListener:(e,f)=>listeners[e]=f},document,location,navigator:{userAgent:'Mozilla Windows Chrome/120',globalPrivacyControl:optOut},localStorage:storage,sessionStorage:storage,crypto:webcrypto,URL,Date,JSON,Object,Set,Number,fetch:async(u,o)=>{requests.push(JSON.parse(o.body));return {};}};
 vm.runInNewContext(script,context);return {context,requests,listeners,store};
}
const a=init();assert.deepEqual(a.requests.map(x=>x.event_type),['page_view','menu_open']);assert.equal(a.requests[0].metadata.source,'nfc');assert(!JSON.stringify(a.requests).includes('SECRET'));assert(!JSON.stringify(a.requests).includes('private='));
a.listeners.hashchange();assert.equal(a.requests.length,2,'same menu is not counted twice');a.context.location.hash='#dinner-en';a.listeners.hashchange();assert.equal(a.requests.length,2,'language variant is the same menu');
a.context.window.ZistoAnalytics.track('button_click',{component:'selection_cart',action:'cart_add',product_id:'dinner-0-0',product_name:'Bread',quantity_delta:1,token:'SECRET',name:'Guest',session:'SECRET'});
assert.equal(a.requests.length,3);assert.equal(a.requests[2].metadata.action,'cart_add');assert(!JSON.stringify(a.requests[2]).includes('SECRET'));assert.equal(a.requests[2].session_id,a.requests[0].session_id);
a.context.window.ZistoAnalytics.track('arbitrary',{});a.context.window.ZistoAnalytics.track('button_click',{action:'unknown'});assert.equal(a.requests.length,3);
const b=init(true);assert.equal(b.requests.length,0);assert.equal(b.store.size,0,'privacy opt-out writes no identifiers');
console.log('Analytics tracker tests passed: events, route deduplication, session, sensitive-data filtering, source and privacy opt-out.');
