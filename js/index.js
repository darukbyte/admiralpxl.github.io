const open = document.getElementById('open');
const menu = document.getElementById('menu');
const button = document.getElementById('button');
const c = document.getElementById('c');
//Animation on Scroll - code below.
let itemAppear = [...document.querySelectorAll('.animation')];
let options = {
    rootMargin: '-10%',
    threshold: 0.0
};
let observer = new IntersectionObserver(showItem, options);

function showItem (entries) {
    console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    })
}

itemAppear.forEach(item => {
    observer.observe(item);
});


const cerrar = () => {
    open.classList.remove('show');
    open.classList.add('unshow');
    c.classList.remove('button-div-open');
}

function menuOpenButton() {
    if(c.classList.contains('button-div-open')) {
        c.classList.remove('button-div-open');
        open.classList.remove('show');
        open.classList.add('unshow');
    } else {
        c.classList.add('button-div-open');
        open.classList.add('show');
        open.classList.remove('unshow');
    }
}


