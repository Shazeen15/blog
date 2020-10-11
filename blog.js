let par = document.querySelector('.par');
console.log(par);

let button = document.querySelector('button')
console.log(button);

button.addEventListener('click', (event) => {
    par.classList.toggle('expand');
})