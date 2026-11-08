(()=>{
const I=window.INHALT,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const t=s=>String(s).replace(/\[(HIER|BEISPIEL)[^\]]*\]/g,m=>`<span class="ph">${m}</span>`);
const seite=document.body.dataset.seite,R=document.documentElement;

const rotor=(x,y,s,d)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-3 0H3L6 300H-6Z" fill="#dfe8dc"/><g class="rotor" style="animation-duration:${d}s"><circle r="60" fill="none"/>${[0,120,240].map(a=>`<path d="M-3.5 0L0-60L3.5 0Z" fill="#fff" transform="rotate(${a})"/>`).join('')}</g><circle r="5" fill="#9bd36b"/></g>`;
const strahlen=(r1,r2,w)=>[...Array(12)].map((_,i)=>`<path d="M0-${r1}V-${r2}" stroke="#f2d675" stroke-width="${w}" stroke-linecap="round" transform="rotate(${i*30})"/>`).join('');
const panels=(x,y)=>[...Array(8)].map((_,i)=>`<path d="M${x+i*46} ${y}h40l-7 20h-40z" fill="#2b6f9a" stroke="#9bd36b" stroke-width="1.5"/>`).join('');
const hero=()=>`<svg viewBox="0 0 1200 400" aria-hidden="true" focusable="false"><g transform="translate(930 150)"><g class="sonne"><g class="dreh"><circle r="100" fill="none"/>${strahlen(72,96,4)}</g><circle r="50" fill="#f2d675"/></g></g><path d="M0 300Q200 230 420 280T820 270T1200 250V400H0Z" fill="#1d5a43"/>${rotor(210,100,.9,16)}${rotor(430,70,1.15,13)}${rotor(660,120,.8,18)}<path d="M0 340Q300 290 600 330T1200 320V400H0Z" fill="#0a2a20"/>${panels(470,345)}<path d="M850 300l-14 60h28zM1050 300l-14 60h28z" fill="#0f3d2e"/><path d="M850 300Q950 335 1050 300T1200 300" fill="none" stroke="#fff5" stroke-width="2"/><path class="fluss" d="M850 300Q950 335 1050 300T1200 300" fill="none" stroke="#9bd36b" stroke-width="4"/></svg>`;
const quelle=k=>({Sonne:`<g transform="translate(100 40)"><g class="dreh"><circle r="36" fill="none"/>${strahlen(26,33,3)}</g><circle r="17" fill="#f2d675"/></g>`,
Wind:rotor(100,34,.5,6),
Wasser:`<path class="welle" d="M0 40q25-15 50 0t50 0t50 0t50 0t50 0t50 0V80H0z" fill="#1b8a8c"/><path class="welle b" d="M0 52q25-12 50 0t50 0t50 0t50 0t50 0t50 0V80H0z" fill="#2b6f9a"/>`})[k];

const kopf=()=>`<a class="skip" href="#inhalt">Zum Inhalt springen</a><header class="nav"><a class="logo" href="index.html">EE·EU</a><nav aria-label="Hauptnavigation">${I.nav.map(([f,l,k])=>`<a href="${f}"${k===seite?' aria-current="page"':''}>${l}</a>`).join('')}</nav><button id="ruhe" aria-pressed="false"></button></header>`;
const band=o=>`<section class="kopf"><div class="wrap"><p class="kicker">${I.site.kicker}</p><h1>${o.titel}</h1><p class="lead">${t(o.intro)}</p></div></section>`;
const hinweis=()=>`<p class="hinweis">${I.site.entwurf}</p>`;
const sec=h=>`<section class="wrap rv">${h}</section>`;

const seiten={
start:()=>`<section class="hero"><div class="wrap"><p class="kicker">${I.site.kicker}</p><h1>${I.site.titel}</h1><p class="lead">${I.site.untertitel}</p></div>${hero()}</section>`+sec(`${hinweis()}<h2>${I.start.titel}</h2><p class="lead">${t(I.start.einleitung)}</p>`)+sec(`<h2>Themen entdecken</h2><div class="themen">${I.themen.map((x,n)=>`<a href="${x.datei}"><span>0${n+1}</span><h3>${x.titel}</h3><p>${t(x.text)}</p></a>`).join('')}</div>`),
energie:()=>band(I.energie)+sec(`${hinweis()}<div class="quellen">${I.energie.quellen.map(q=>`<figure><svg viewBox="0 0 200 80" aria-hidden="true">${quelle(q)}</svg><figcaption>${q}</figcaption></figure>`).join('')}</div><ol class="kette">${I.energie.stationen.map((s,i)=>`<li><button data-i="${i}" aria-controls="info" aria-expanded="false"><b>${i+1}</b>${s.titel}</button></li>`).join('')}</ol><div class="info" id="info" role="region" aria-live="polite"></div>`),
eu:()=>band(I.eu)+sec(`${hinweis()}<p class="hinweis">${I.eu.hinweis}</p><div class="eu" id="karte"></div>`),
probleme:()=>band(I.probleme)+sec(`${hinweis()}<p><button class="btn" id="alle">Alle öffnen / schließen</button></p><div class="paare">${I.probleme.paare.map(([a,b,c])=>`<details><summary>${a}</summary><p><strong>Herausforderung:</strong> ${t(b)}</p><div class="l">${t(c)}</div></details>`).join('')}</div>`),
klima:()=>band(I.klima)+sec(`${hinweis()}<div class="zahlen">${I.klima.zahlen.map(z=>`<div><span>${z.label}</span><strong>${t(z.wert)}</strong><div class="balken" role="img" aria-label="Platzhalter-Balken"><i data-b="${z.breite}"></i></div><small>Balkenlänge nur Platzhalter</small></div>`).join('')}</div><div class="spalten">${I.klima.themen.map(([a,b])=>`<article><h3>${a}</h3><p>${t(b)}</p></article>`).join('')}</div>`),
quiz:()=>band(I.quiz)+sec(`<div id="quiz"></div>`),
ueber:()=>band(I.ueber)+sec(`<div class="spalten">${I.ueber.abschnitte.map(([a,b])=>`<article><h3>${a}</h3><p>${t(b)}</p></article>`).join('')}</div><h2 style="margin-top:3rem">Projektmitglieder</h2><div class="team">${I.ueber.team.map(([n,r])=>`<div><h3>${t(n)}</h3><p>${r}</p></div>`).join('')}</div>`)
};

document.body.innerHTML=kopf()+`<main id="inhalt">${seiten[seite]()}</main><footer>${I.site.fuss}</footer>`;
const lab=I.nav.find(n=>n[2]===seite)[1];document.title=seite==='start'?I.site.titel:`${lab} – ${I.site.titel}`;

/* Animationen an/aus (merkt sich die Wahl, beachtet Systemeinstellung) */
const btn=$('#ruhe'),setRuhe=a=>{R.classList.toggle('ruhe',a);btn.setAttribute('aria-pressed',a);btn.textContent=a?'Animationen: aus':'Animationen: an';try{localStorage.ruhe=a?1:''}catch(e){}};
let gespeichert=false;try{gespeichert=!!localStorage.ruhe}catch(e){}
setRuhe(matchMedia('(prefers-reduced-motion:reduce)').matches||gespeichert);btn.onclick=()=>setRuhe(!R.classList.contains('ruhe'));

/* Scroll-Effekt */
const zeig=e=>{e.classList.add('an');$$('[data-b]',e).forEach(b=>b.style.width=b.dataset.b+'%')};
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){zeig(e.target);io.unobserve(e.target)}}),{threshold:.12}):null;
$$('.rv').forEach(e=>io?io.observe(e):zeig(e));

/* Energiekette */
if(seite==='energie'){const S=I.energie.stationen,b=$$('.kette button'),box=$('#info');
 const zeige=i=>{b.forEach((x,n)=>x.setAttribute('aria-expanded',n===i));const s=S[i];box.innerHTML=`<h3>${i+1}. ${s.titel}</h3><p>${t(s.text)}</p>${s.liste?`<ul>${s.liste.map(l=>`<li>${l}</li>`).join('')}</ul>`:''}`};
 b.forEach(x=>x.onclick=()=>zeige(+x.dataset.i));zeige(0)}

/* Ländervergleich */
if(seite==='eu'){const E=I.eu,box=$('#karte'),DE=E.laender.find(l=>l.id==='DE');let sel=E.laender.find(l=>l.id==='FR');
 const w=(l,i)=>t(l.werte?.[i]??E.platzhalter);
 const draw=()=>{box.innerHTML=`<div class="kacheln" role="group" aria-label="Länder auswählen">${E.laender.map(l=>`<button data-id="${l.id}" class="${l===sel?'an':''}${l.id==='DE'?' de':''}" style="grid-column:${l.x+1};grid-row:${l.y+1}" aria-pressed="${l===sel}" title="${l.name}">${l.id}</button>`).join('')}</div><div><h3>Deutschland im Vergleich mit: ${sel.name}</h3><table><thead><tr><th>Kriterium</th><th>Deutschland</th><th>${sel.name}</th></tr></thead><tbody>${E.felder.map((f,i)=>`<tr><th scope="row">${f}</th><td>${w(DE,i)}</td><td>${w(sel,i)}</td></tr>`).join('')}</tbody></table></div>`;
  $$('.kacheln button',box).forEach(b=>b.onclick=()=>{sel=E.laender.find(l=>l.id===b.dataset.id);draw();$(`[data-id=${sel.id}]`,box).focus()})};draw()}

/* Probleme */
if(seite==='probleme'){let auf=false;$('#alle').onclick=()=>{auf=!auf;$$('details').forEach(d=>d.open=auf)}}

/* Quiz */
if(seite==='quiz'){const Q=I.quiz.fragen,box=$('#quiz');let i=0,pt=0,erg=[];
 const frage=()=>{const q=Q[i];box.innerHTML=`<div class="fort"><span>Frage ${i+1} von ${Q.length}</span><span>Punkte: ${pt}</span></div><div class="leiste"><i style="width:${i/Q.length*100}%"></i></div><h2>${q.frage}</h2><div class="antw">${q.antworten.map((a,k)=>`<button data-k="${k}"><b>${'ABCD'[k]}</b>${a}</button>`).join('')}</div><div id="fb" aria-live="polite"></div>`;
  $$('.antw button',box).forEach(b=>b.onclick=()=>wahl(+b.dataset.k))};
 const wahl=k=>{const q=Q[i],ok=k===q.richtig;pt+=ok;erg.push(ok);
  $$('.antw button',box).forEach((b,n)=>{b.disabled=true;b.classList.toggle('richtig',n===q.richtig);b.classList.toggle('falsch',n===k&&!ok)});
  $('#fb').innerHTML=`<p class="${ok?'ok':'nein'}"><strong>${ok?'Richtig!':'Leider falsch.'}</strong> ${q.erklaerung}</p><button class="btn" id="weiter">${i+1<Q.length?'Nächste Frage':'Ergebnis anzeigen'}</button>`;
  $('#weiter').focus();$('#weiter').onclick=()=>{++i<Q.length?frage():ende()}};
 const ende=()=>{const r=pt/Q.length,txt=I.quiz.ende[r<.5?0:r<.8?1:2];
  box.innerHTML=`<div class="fort"><span>Geschafft</span><span>Punkte: ${pt}</span></div><div class="leiste"><i style="width:100%"></i></div><h2>${pt} von ${Q.length} richtig</h2><p class="lead">${txt}</p><ul>${Q.map((q,n)=>`<li class="${erg[n]?'ok':'nein'}"><strong>${q.frage}</strong> → ${q.antworten[q.richtig]}</li>`).join('')}</ul><button class="btn" id="neu">Quiz erneut starten</button>`;
  $('#neu').onclick=()=>{i=pt=0;erg=[];frage()}};
 frage()}
})();
