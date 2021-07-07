const open = document.getElementById('open');
const menu = document.getElementById('menu');



function menuOpen() {
    console.log(menu.checked);
    if(menu.checked == true) {
        open.classList.add('show');
    } else {
        open.classList.remove('show');
    }
}
