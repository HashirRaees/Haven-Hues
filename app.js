var tl = gsap.timeline();

tl.from(".hero h1",{
    y:20,
    duration: 0.7,
    opacity: 0,
});
tl.from(".hero span",{
    duration : 1,
    opacity: 0,
})
tl.from(".hero h2",{
    y:-10,
    opacity : 0,
    duration :.5,
});
gsap.from(".gallery img",{
    opacity:0,
    y:10,
    duration:1,
    scrollTrigger : {
        scroller: "body",
        trigger : ".gallery img",
        // markers : true,
        start: "top 60%",
    }
});

gsap.from("#about h2",{
    y : 20,
    duration : 1,
    opacity : 0,
    scrollTrigger : {
        trigger : "#about h2",
        scroller : 'body',
        start : "top 80%",
        // markers : true,
    }
})
gsap.from("#about p",{
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#about p",
        scroller : 'body',
        start : "top 60%",
        // markers : true,
    }
})
gsap.from(".contact h2",{
    y:20,
    opacity : 0,
    duration :1,
    scrollTrigger :{
        scroller:"body",
        trigger: ".contact h2",
        start: "top 80%",
        // markers : true,
    }
})
gsap.from(".contact p",{
    y:-20,
    opacity : 0,
    duration :1,
    scrollTrigger :{
        scroller:"body",
        trigger: ".contact p",
        start: "top 80%",
        // markers : true,
    }
})
gsap.from(".contact-icons",{
    opacity : 0,
    duration :1,
    scrollTrigger :{
        scroller:"body",
        trigger: ".contact-icons",
        start: "top 80%",
        // markers : true,
    }
})
const track = document.querySelector(".marquee-track");
const trackWidth = track.scrollWidth / 2; // half because we duplicated

gsap.to(track, {
  x: -trackWidth,
  duration: 20, // adjust speed
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % trackWidth) // loop seamlessly
  }
});

const track2 = document.querySelector(".marquee-track2");
const trackWidth2 = track.scrollWidth / 2; // half because we duplicated

gsap.to(track2, {
  x: trackWidth2,
  duration: 20, // adjust speed
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % trackWidth) // loop seamlessly
  }
});

