let button=document.querySelector('.nav-toggle');
let nav=document.querySelector('.nav');
button.addEventListener('click',()=>{
	nav.classList.toggle('nav--visible');
});
