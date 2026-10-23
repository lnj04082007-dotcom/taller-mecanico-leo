const menu=document.querySelector('.menu'), nav=document.querySelector('.mainnav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Cerrar −':'Menú +'});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menú +'}));
const dialog=document.querySelector('#booking'),form=document.querySelector('#booking-form');
const date=form?.elements.date;
if(date){const now=new Date();date.min=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-')}
let opener;
document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>{opener=b;form.reset();form.querySelector('.result').hidden=true;form.querySelector('[type=submit]').hidden=false;if(b.dataset.service)form.elements.service.value=b.dataset.service;dialog.showModal()}));
function closeDialog(){dialog.close();opener?.focus()}
document.querySelector('.close')?.addEventListener('click',closeDialog);
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog()}});
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const result=form.querySelector('.result');const day=new Date(form.elements.date.value+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'});result.textContent=`Demostración completada: ${form.elements.service.value}, fecha preferida ${day}. En una web real, el taller revisaría la disponibilidad y contactaría contigo. No se han enviado ni guardado datos y no hay ninguna cita reservada.`;result.hidden=false;form.querySelector('[type=submit]').hidden=true;result.scrollIntoView({block:'nearest',behavior:'smooth'})});
