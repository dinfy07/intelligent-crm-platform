(function(root){
'use strict';
const VERSION='keyword-extractive-v1';
const rules={Billing:['invoice','refund','payment','charged','billing','price'],Onboarding:['onboarding','invite','invitation','setup','training'],Access:['login','password','access','authentication','permission','token'],Cancellation:['cancel','cancellation','unsubscribe','renewal']};
function validate(text){
 if(typeof text!=='string'||!text.trim())throw new Error('Enter the interaction text.');
 if(new TextEncoder().encode(text).length>100000)throw new Error('Keep interaction text below 100 KB.');
 if(text.trim().split(/\s+/).length>2000)throw new Error('Keep the interaction below 2,000 words.');
}
function parseTurns(text){
 validate(text);
 return text.trim().split(/\n+/).filter(x=>x.trim()).map((line,i)=>{
  const m=line.match(/^([^:]{1,40}):\s*(.+)$/);
  if(!m)throw new Error('Use one Speaker: message line for each turn.');
  const speaker=m[1].trim(),message=m[2].trim();
  if(!speaker||!message)throw new Error('Use one Speaker: message line for each turn.');
  return {id:`turn-${i+1}`,sequence:i+1,speaker,text:message};
 });
}
async function analyse(text){
 const turns=parseTurns(text);const norm=turns.map(t=>t.text).join('\n').toLowerCase();
 const topics=Object.entries(rules).filter(([,words])=>words.some(w=>new RegExp(`\\b${w}\\b`,'i').test(norm))).map(([name])=>name);
 if(!topics.length)topics.push('Other');
 const scores=turns.map(t=>({t,score:Object.values(rules).flat().filter(w=>new RegExp(`\\b${w}\\b`,'i').test(t.text)).length*2+(/\b(will|send|agreed|by|please|need)\b/i.test(t.text)?1:0)}));
 const chosen=scores.sort((a,b)=>b.score-a.score||a.t.sequence-b.t.sequence).slice(0,3).sort((a,b)=>a.t.sequence-b.t.sequence);
 let remaining=120;const excerpts=[];
 for(const {t} of chosen){if(!remaining)break;const words=t.text.split(/\s+/);const kept=words.slice(0,remaining);remaining-=kept.length;excerpts.push({turnId:t.id,text:kept.join(' ')+(kept.length<words.length?' …':'')});}
 const digest=await root.crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));
 const sourceHash=Array.from(new Uint8Array(digest)).map(x=>x.toString(16).padStart(2,'0')).join('');
 return {method:VERSION,modelRevision:'none',configVersion:'topics-2026-10-19',sourceHash,topics,summary:excerpts.map(x=>x.text).join(' '),sourceRefs:excerpts.map(x=>x.turnId),excerpts,createdAt:new Date().toISOString()};
}
const api={VERSION,validate,parseTurns,analyse,rules};root.CrmBaseline=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
