var tl = gsap.timeline();

tl.from(".hero-text h1", {
  y: -30,
  opacity: 0,
  duration: 1,
});
tl.from(".hero-text h2", {
  y: 13,
  opacity: 0,
});
tl.from(".hero-text p", {
  opacity: 0,
});
tl.from(".icons-box", {
  opacity: 0,
});

gsap.from(".left-img img", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".left-img img",
    // markers: true,
    scroller: "body",
    start: "top 60%",
  },
});
gsap.from(".left-img h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".left-img h2",
    // markers: true,
    scroller: "body",
    start: "top 80%",
  },
});
gsap.from(".right-img img",{
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : ".right-img img",
        scroller : "body",
        start : "top 70%",
        // markers : true,
    }
})