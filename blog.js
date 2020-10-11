let par1 = document.querySelector('.par1');
let par2 = document.querySelector('.par2');
let par3 = document.querySelector('.par3');

let button = document.querySelector('button')

button.addEventListener('click', (event) => {
    par1.classList.toggle('expand');
    par2.classList.toggle('expand');
    par3.classList.toggle('expand');
})