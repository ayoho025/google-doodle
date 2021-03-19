// var loop = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
// loop.to("#clouds", { x: -450, duration: 5 });

var cloudOne = TweenMax.fromTo(
  ".clouds-1-1",
  15,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudOneTwo = TweenMax.fromTo(
  ".clouds-1-2",
  15,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudOne.play();
cloudOneTwo.play();

var cloudTwo = TweenMax.fromTo(
  ".clouds-2-1",
  20,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudTwoTwo = TweenMax.fromTo(
  ".clouds-2-2",
  20,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudTwo.play();
cloudTwoTwo.play();

var cloudThree = TweenMax.fromTo(
  ".clouds-3-1",
  25,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudThreeTwo = TweenMax.fromTo(
  ".clouds-3-2",
  25,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudThree.play();
cloudThreeTwo.play();

var cloudFour = TweenMax.fromTo(
  ".clouds-4-1",
  30,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudFourTwo = TweenMax.fromTo(
  ".clouds-4-2",
  30,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudFour.play();
cloudFourTwo.play();

var steamOne = TweenMax.fromTo(
  ".steam-1",
  10,
  { y: 40, autoAlpha: 1 },
  { y: -30, ease: Linear.easeNone, repeat: -1, autoAlpha: 0 }
);

var steamTwo = TweenMax.fromTo(
  ".steam-2",
  10,
  { y: 40, autoAlpha: 1 },
  { y: -30, ease: Linear.easeNone, repeat: -1, repeatDelay: -5, autoAlpha: 0 }
);
steamOne.play();
steamTwo.play();
