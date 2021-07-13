const open = document.getElementById('open');
const menu = document.getElementById('menu');
const button = document.getElementById('button');
const c = document.getElementById('c');


const cerrar = () => {
    open.classList.remove('show');
    c.classList.remove('button-div-open');
}

function menuOpenButton() {
    if(c.classList.contains('button-div-open')) {
        c.classList.remove('button-div-open');
        open.classList.remove('show');
    } else {
        c.classList.add('button-div-open');
        open.classList.add('show');
    }
}
