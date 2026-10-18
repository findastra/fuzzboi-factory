// Desktop variants use the Forge's exact decoder and layer order; no duplicated trait rules.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'site/fuzzboi.js'),'utf8'),context);
const F=context.window.Fuzzboi,variants=[];
for(let value=0;value<1000000;value+=997){
  const code=String(value).padStart(6,'0'),decoded=F.decode(code);if(!decoded.valid)continue;
  const p=decoded.parts,want=new Set(F.needed(p));
  const layers=F.STACK.map(slot=>slot==='fill'?'fill'+p.style+p.color:slot==='outline'?'outline'+p.style:slot).filter(key=>want.has(key)).map(key=>'desktop-art/fuzzboi-friend/layers/'+key+'.png');
  variants.push({code,style:p.style,layers});
}
for(const style of ['A','B','C'])if(new Set(variants.filter(v=>v.style===style).map(v=>F.decode(v.code).parts.color)).size!==5)throw Error('Incomplete body/color coverage: '+style);
// The recipes and the layers they name live in the hub (one art source, Flash Audit A58), next to this repo.
const hub=path.join(__dirname,'..','astras-pet-os','desktop-art','fuzzboi-friend');
if(!fs.existsSync(path.join(hub,'layers')))throw Error('The layers live in findastra/astras-pet-os: put that repo next to this one, then run this again.');
fs.writeFileSync(path.join(hub,'desktop-recipes-20261011.json'),JSON.stringify({default_style:'B',source:'findastra/fuzzbois site/fuzzboi.js (decoder); layers: desktop-art/fuzzboi-friend/layers/ in findastra/astras-pet-os',variants},null,2)+'\n');
console.log(variants.length+' valid desktop variants in all three original body styles.');
