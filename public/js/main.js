const buttons=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('#all-projects .card')];
const empty=document.querySelector('#empty');
const count=document.querySelector('#project-count');
for(const button of buttons)button.addEventListener('click',()=>{const selected=button.dataset.filter;for(const b of buttons)b.setAttribute('aria-pressed',String(b===button));let total=0;for(const card of cards){card.hidden=selected!=='all'&&card.dataset.category!==selected;if(!card.hidden)total++}if(empty)empty.hidden=total!==0;if(count)count.textContent=total+' '+(total===1?'project':'projects')});
const config=document.querySelector('meta[name="ga4-id"]');
if(config&&/^G-[A-Z0-9]+$/.test(config.content)){
 window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
 window.gtag('js',new Date());window.gtag('config',config.content);
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(config.content);document.head.append(script);
}
document.addEventListener('click',event=>{const card=event.target.closest('a[data-project]');if(card&&typeof window.gtag==='function')window.gtag('event','project_click',{project_name:card.dataset.project,category:card.dataset.category,location:card.dataset.location})});
