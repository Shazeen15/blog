let par1 = document.querySelector('.par1');
let par2 = document.querySelector('.par2');
let hr1 = document.querySelector('.hr1');
let hr2 = document.querySelector('.hr2');

let button = document.querySelector('button')

button.addEventListener('click', (event) => {
    par1.classList.toggle('expand');
    par2.classList.toggle('expand');
    hr1.classList.toggle('expand');
    hr2.classList.toggle('expand');
})