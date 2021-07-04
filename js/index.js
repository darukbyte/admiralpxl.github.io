const tl = gsap.timeline({defaults:{duration: 1}});
const pruebas = document.getElementById('section');
//const sectionHeight = pruebas.offsetTop;
const ani = document.getElementsByClassName('animacion');
const aniHeight = ani.offsetTop;
const anidiv = document.querySelectorAll('.anidiv');
const anim1 = document.querySelectorAll('.anim2');
const anims2 = document.querySelectorAll('.anims2');
const anim3 = document.querySelectorAll('.anim3');

let scrollTop = document.documentElement.scrollTop;
//const mostrar = () => sectionHeight < scrollTop ? console.log('funciona') : console.log('no lo hace');

function showAnimate(){
    if(aniHeight < scrollTop){
        gsap.from(ani ,{ duration: 1, y: 30, opacity: 0, ease: "Power2.easOut"});
    }
}


//Aqui el orden importa
tl.from(".logo", {y: 30, opacity: 0})
.from(".ani1", {y: -10, stagger: .3, opacity: 0})
.from(".anim1", {y: -50, stagger: .6, opacity: 0})
.from(".an2", {x: -40, stragger: 1, opacity: 0}, "-=2")
.from(".anim2",{y: 50, opacity: 0}, "-=1.5")
.from('.anidiv', {x: -30, opacity: 0}, "-=.5")
.from(".anims2", {x: 30, opacity: 0, ease: "elastic(1, 03)"}, "-=.5")
//.from(anim3,{y: 30, opacity:0, ease: "Power2.easOut"}, "-=.3")

window.addEventListener('scroll', showAnimate);