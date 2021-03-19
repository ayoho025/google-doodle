// var loop = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
// loop.to("#clouds", { x: -450, duration: 5 });

var cloudOne = TweenMax.fromTo(
  ".clouds-1-1",
  20,
  { x: 434 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudOneTwo = TweenMax.fromTo(
  ".clouds-1-2",
  20,
  { x: 434 },
  { x: -434, ease: Linear.easeNone, repeat: -1, delay: 10 }
);
cloudOne.play();
cloudOneTwo.play();
