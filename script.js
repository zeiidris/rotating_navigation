const Open = document.getElementById('open');
const Close = document.getElementById('close');
const constainer = document.querySelector('.container');
Open.addEventListener('click',()=>{constainer.classList.add('show-nav');})
Close.addEventListener('click',()=>{constainer.classList.remove('show-nav');})