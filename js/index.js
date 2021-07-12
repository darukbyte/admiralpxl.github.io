const open = document.getElementById('open');
const menu = document.getElementById('menu');
const list = document.getElementsByName('list');


const cerrar = () => {
    open.classList.remove('show');
}

function menuOpen() {
    console.log(menu.checked);
    if(menu.checked == true) {
        open.classList.add('show');
    } else {
        open.classList.remove('show');
    }
}
