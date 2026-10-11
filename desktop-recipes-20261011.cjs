// Desktop variants use the Forge's exact decoder and layer order; no duplicated trait rules.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'site/fuzzboi.js'),'utf8'),context);
const F=context.window.Fuzzboi,variants=[];
for(let value=300000;value<600000;value+=137){
  const code=String(value),decoded=F.decode(code);if(!decoded.valid||decoded.parts.style!=='B')continue;
  const p=decoded.parts,want=new Set(F.needed(p));
  const layers=F.STACK.map(slot=>slot==='fill'?'fill'+p.style+p.color:slot==='outline'?'outline'+p.style:slot).filter(key=>want.has(key)).map(key=>'site/layers/'+key+'.png');
  variants.push({code,layers});
}
if(variants.length<100||new Set(variants.map(v=>F.decode(v.code).parts.color)).size!==5)throw Error('Incomplete jagged-body variant coverage');
fs.writeFileSync(path.join(__dirname,'desktop-recipes-20261011.json'),JSON.stringify({style:'B',source:'site/fuzzboi.js',variants},null,2)+'\n');
console.log(variants.length+' valid jagged-body desktop variants, using original layers.');
