// theme: night (default) / day
(function(){
  const root=document.documentElement;
  let theme='night';
  try{ theme=localStorage.getItem('yjd-theme')||'night'; }catch(e){}
  root.dataset.theme=theme;
  const btn=document.getElementById('themeBtn');
  const paint=()=>{ if(btn) btn.innerHTML = root.dataset.theme==='night' ? '<span aria-hidden="true">☾</span> Night' : '<span aria-hidden="true">☀</span> Day'; };
  paint();
  btn&&btn.addEventListener('click',()=>{ root.dataset.theme = root.dataset.theme==='night'?'day':'night'; try{localStorage.setItem('yjd-theme',root.dataset.theme);}catch(e){} paint(); });
})();

// tabs
document.querySelectorAll('[data-tabs]').forEach(group=>{
  const btns=group.querySelectorAll('[role=tab]');
  btns.forEach(b=>b.addEventListener('click',()=>{
    btns.forEach(x=>{ x.setAttribute('aria-selected', x===b); document.getElementById(x.getAttribute('aria-controls')).hidden = x!==b; });
  }));
});

// copy + download
document.querySelectorAll('.code').forEach(block=>{
  const pre=block.querySelector('pre');
  const copy=block.querySelector('[data-copy]');
  const dl=block.querySelector('[data-download]');
  copy&&copy.addEventListener('click',async()=>{
    const txt=pre.innerText;
    try{ await navigator.clipboard.writeText(txt); }
    catch(e){ const t=document.createElement('textarea'); t.value=txt; document.body.appendChild(t); t.select(); try{document.execCommand('copy');}catch(_){} t.remove(); }
    copy.textContent='Copied'; setTimeout(()=>copy.textContent='Copy',1400);
  });
  dl&&dl.addEventListener('click',()=>{
    const blob=new Blob([pre.innerText],{type:'text/plain'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=dl.dataset.download; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  });
});
