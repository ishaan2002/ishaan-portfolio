
const toggleBtn=document.getElementById('theme-toggle');

if(localStorage.getItem('theme')==='dark'){
document.body.classList.add('dark');
if(toggleBtn) toggleBtn.textContent='☀️';
}

if(toggleBtn){
toggleBtn.addEventListener('click',()=>{
document.body.classList.toggle('dark');

if(document.body.classList.contains('dark')){
toggleBtn.textContent='☀️';
localStorage.setItem('theme','dark');
}else{
toggleBtn.textContent='🌙';
localStorage.setItem('theme','light');
}
});
}
