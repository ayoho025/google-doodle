10; // var loop = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
// loop.to("#clouds", { x: -450, duration: 5 });

var cloudOne = TweenMax.fromTo(
  ".clouds-1-1",
  25,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudOneTwo = TweenMax.fromTo(
  ".clouds-1-2",
  25,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudOne.play();
cloudOneTwo.play();

var cloudTwo = TweenMax.fromTo(
  ".clouds-2-1",
  35,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudTwoTwo = TweenMax.fromTo(
  ".clouds-2-2",
  35,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudTwo.play();
cloudTwoTwo.play();

var cloudThree = TweenMax.fromTo(
  ".clouds-3-1",
  40,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudThreeTwo = TweenMax.fromTo(
  ".clouds-3-2",
  40,
  { x: 434 },
  { x: 0, ease: Linear.easeNone, repeat: -1 }
);

cloudThree.play();
cloudThreeTwo.play();

var cloudFour = TweenMax.fromTo(
  ".clouds-4-1",
  45,
  { x: 0 },
  { x: -434, ease: Linear.easeNone, repeat: -1 }
);
var cloudFourTwo = TweenMax.fromTo(
  ".clouds-4-2",
  45,
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var letterG = TweenMax.fromTo(
  ".letter-g",
  2,
  { y: -getRandomInt(10) + 10 },
  {
    y: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.2,0 0.192,0.82 0.304,0.82 0.411,0.82 0.45,0 0.45,0 0.45,0 0.524,0.382 0.622,0.382 0.71,0.382 0.758,0 0.758,0 0.758,0 0.803,0.226 0.873,0.226 0.928,0.226 0.981,0 1,0 "
    ),
    repeat: -1,
    repeatDelay: -getRandomInt(5) / 10
  }
);
var letterOOne = TweenMax.fromTo(
  ".letter-o-1",
  2,
  { y: -getRandomInt(10) + 10 },
  {
    y: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.2,0 0.192,0.82 0.304,0.82 0.411,0.82 0.45,0 0.45,0 0.45,0 0.524,0.382 0.622,0.382 0.71,0.382 0.758,0 0.758,0 0.758,0 0.803,0.226 0.873,0.226 0.928,0.226 0.981,0 1,0 "
    ),
    repeat: -1,
    repeatDelay: -getRandomInt(5) / 10
  }
);
var letterOTwo = TweenMax.fromTo(
  ".letter-o-2",
  2,
  { y: -getRandomInt(10) + 10 },
  {
    y: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.2,0 0.192,0.82 0.304,0.82 0.411,0.82 0.45,0 0.45,0 0.45,0 0.524,0.382 0.622,0.382 0.71,0.382 0.758,0 0.758,0 0.758,0 0.803,0.226 0.873,0.226 0.928,0.226 0.981,0 1,0 "
    ),
    repeat: -1,
    repeatDelay: -getRandomInt(5) / 10
  }
);
var letterL = TweenMax.fromTo(
  ".letter-l",
  2,
  { y: -getRandomInt(10) + 10 },
  {
    y: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.2,0 0.192,0.82 0.304,0.82 0.411,0.82 0.45,0 0.45,0 0.45,0 0.524,0.382 0.622,0.382 0.71,0.382 0.758,0 0.758,0 0.758,0 0.803,0.226 0.873,0.226 0.928,0.226 0.981,0 1,0 "
    ),
    repeat: -1,
    repeatDelay: -getRandomInt(5) / 10
  }
);
var letterE = TweenMax.fromTo(
  ".letter-e",
  2,
  { y: -getRandomInt(10) + 10 },
  {
    y: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.2,0 0.192,0.82 0.304,0.82 0.411,0.82 0.45,0 0.45,0 0.45,0 0.524,0.382 0.622,0.382 0.71,0.382 0.758,0 0.758,0 0.758,0 0.803,0.226 0.873,0.226 0.928,0.226 0.981,0 1,0 "
    ),
    repeat: -1,
    repeatDelay: -getRandomInt(5) / 10
  }
);

letterG.play();
letterOOne.play();
letterOTwo.play();
letterL.play();
letterE.play();
