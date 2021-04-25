const tl = gsap.timeline({defaults:{duration: 1}});
//Aqui el orden importa
tl.from(".logo", {y: 30, opacity: 0})
.from(".ani1", {y: -10, stagger: .3, opacity: 0})
.from(".anim1", {y: -50, stagger: .6, opacity: 0})
.from(".anim2",{y: 50, opacity: 0}, "-=1.5")
.from('.anidiv', {x: 50, opacity: 0}, "-=.5")