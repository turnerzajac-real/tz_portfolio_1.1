
// loadin animatiion
var landingAnimation = new TimelineMax();

landingAnimation 
.fromTo('.headline-content-container', 0.5, {y: 35, x: -25, autoAlpha: 0}, { y:0, x:0, autoAlpha: 1, ease: Power2.easeOut},0)
.fromTo('.hero-title-container, .about-paragraph-container, .content-con, .intro-image', 0.3, {y: 25, x: -25, autoAlpha:0}, { y:0, x:0, autoAlpha: 1, ease: Power2.easeOut}, "-=0.3")


// work animation
var workSectionAnimation = new TimelineMax();

workSectionAnimation
.staggerTo('.title-wipe', 1, {css: { height: '0%', ease: Power1.easeOut}}, 0.12)
.staggerFromTo('.project-link-container', 0.4, { y: 15 }, { y: 0})


// work section animation

// initialize timeline
var projectOne = new TimelineMax({paused: true});
// var projectTwo = new TimelineMax({paused: true});
var projectThree = new TimelineMax({paused: true});
var projectSix = new TimelineMax({ paused: true});
var projectSeven = new TimelineMax({ paused: true});
var projectEight = new TimelineMax({paused: true, onReverseComplete: outlineOnComplete});
var projectMD = new TimelineMax({paused: true});
var projectGR = new TimelineMax({paused: true});
var projectFG = new TimelineMax({paused: true});
var projectOP = new TimelineMax({paused: true});

// set project variables
var oneTitleWrapper = $('.project-one')
var titleOne = oneTitleWrapper.find('.top-item')
var titleOneMiddle = oneTitleWrapper.find('.middle-item')
var titleOneMiddleTop = oneTitleWrapper.find('.middle-top-item')

// var twoTitleWrapper = $('.project-two')
// var titleTwo = twoTitleWrapper.find('.top-item')
// var titleTwoMiddle = twoTitleWrapper.find('.middle-item')
// var titleTwoMiddleTop = twoTitleWrapper.find('.middle-top-item')

var threeTitleWrapper = $('.project-three')
var titleThree = threeTitleWrapper.find('.top-item')
var titleThreeMiddle = threeTitleWrapper.find('.middle-item')
var titleThreeMiddleTop = threeTitleWrapper.find('.middle-top-item')

var sixTitleWrapper = $('.project-six')
var titleSix = sixTitleWrapper.find('.top-item')
var titleSixMiddle = sixTitleWrapper.find('.middle-item')
var titleSixMiddleTop = sixTitleWrapper.find('.middle-top-item')

var sevenTitleWrapper = $('.project-seven')
var titleSeven = sevenTitleWrapper.find('.top-item')
var titleSevenMiddle = sevenTitleWrapper.find('.middle-item')
var titleSevenMiddleTop = sevenTitleWrapper.find('.middle-top-item')

var eightTitleWrapper = $('.project-eight')
var titleEight = eightTitleWrapper.find('.top-item')
var titleEightMiddle = eightTitleWrapper.find('.middle-item')
var titleEightMiddleTop = eightTitleWrapper.find('.middle-top-item')
var eightLabelText = eightTitleWrapper.find('.label-text-xl')
var eightOutlined = eightTitleWrapper.find('.outlined')

var mdTitleWrapper = $('.project-md')
var titleMd = mdTitleWrapper.find('.top-item')
var titleMdMiddle = mdTitleWrapper.find('.middle-item')
var titleMdMiddleTop = mdTitleWrapper.find('.middle-top-item')

var grTitleWrapper = $('.project-gr')
var titleGr = grTitleWrapper.find('.top-item')
var titleGrMiddle = grTitleWrapper.find('.middle-item')
var titleGrMiddleTop = grTitleWrapper.find('.middle-top-item')

var fgTitleWrapper = $('.project-fg')
var titleFg = fgTitleWrapper.find('.top-item')
var titleFgMiddle = fgTitleWrapper.find('.middle-item')
var titleFgMiddleTop = fgTitleWrapper.find('.middle-top-item')

var OpTitleWrapper = $('.project-op')
var titleOp = OpTitleWrapper.find('.top-item')
var titleOpMiddle = OpTitleWrapper.find('.middle-item')
var titleOpMiddleTop = OpTitleWrapper.find('.middle-top-item')

// define variable animations
projectOne
  .to(titleOne, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
  .to(titleOneMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
  .to(titleOneMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

// projectTwo
// .to(titleTwo, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
// .to(titleTwoMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
// .to(titleTwoMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

projectThree
.to(titleThree, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleThreeMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleThreeMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")


projectSix
.to(titleSix, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleSixMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleSixMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

projectSeven
.to(titleSeven, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleSevenMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleSevenMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

projectEight
.to(titleEight, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleEight, 0.1, { css: { color: "#F2E2DC"}},0)
.to(eightLabelText, 0.3, { css: {color:"#F2e2dc"}},0)
.to(titleEightMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleEightMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")
.to('body', 1, { css: { backgroundColor: "#94ABF2"}}, 0)

projectMD
.to(titleMd, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleMdMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleMdMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

projectGR
.to(titleGr, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleGrMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleGrMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

projectFG
.to(titleFg, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleFgMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleFgMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

projectOP
.to(titleOp, 0.3, {x:15, y: -15, ease: Power1.easeOut}, 0)
.to(titleOpMiddleTop, 0.3, { x:10, y:-10, ease: Power1.easeOut}, "-=.2")
.to(titleOpMiddle, 0.3, { x:5, y:-5, ease: Power1.easeOut}, "-=.1")

// project hover function
$('.project-one').on('mouseenter', function(){
  projectOne.play();
}).on('mouseleave', function(){
  projectOne.reverse();
}).on('click', function() {
  window.location.replace('case-study-pages/hangar-mn.html')
})

// $('.project-two').on('mouseenter', function(){
//   projectTwo.play();
// }).on('mouseleave', function(){
//   projectTwo.reverse();
// }).on('click', function(){
//   window.location.replace('case-study-pages/brewers-brew-kit.html');
// })

$('.project-three').on('mouseenter', function(){
  projectThree.play();
}).on('mouseleave', function(){
  projectThree.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/border-foods.html');
})


$('.project-six').on('mouseenter', function(){
  projectSix.play();
}).on('mouseleave', function(){
  projectSix.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/shelter-architecture.html')
})

$('.project-seven').on('mouseenter', function(){
  projectSeven.play();
}).on('mouseleave', function(){
  projectSeven.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/cif.html');
})

$('.project-eight').on('mouseenter', function(){
  projectEight.play();

  $(eightOutlined).addClass('otwo')
}).on('mouseleave', function(){
  projectEight.reverse();
}).on('click', function(){

  var mail = document.createElement("a")
  mail.href = "mailto:turnerzajac@gmail.com"

  mail.click();

})

function outlineOnComplete() {
  $(eightOutlined).removeClass('otwo')
}

$('.project-md').on('mouseenter', function(){
  projectMD.play();
}).on('mouseleave', function(){
  projectMD.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/malley-design.html');
})

$('.project-gr').on('mouseenter', function(){
  projectGR.play();
}).on('mouseleave', function(){
  projectGR.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/gather-roast.html');
})

$('.project-fg').on('mouseenter', function(){
  projectFG.play();
}).on('mouseleave', function(){
  projectFG.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/fools-gold-mag.html');
})

$('.project-op').on('mouseenter', function(){
  projectOP.play();
}).on('mouseleave', function(){
  projectOP.reverse();
}).on('click', function(){
  window.location.replace('case-study-pages/one-protection.html');
})


// skew function 
const section = document.getElementsByClassName('skew-container')[0];
let currentPos = window.pageYOffset;
const skewAmount = 0.015;

const looper = function() {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * skewAmount;
  
  section.style.transform = `skewY(${speed}deg)`;
  currentPos = newPos;
  
  requestAnimationFrame(looper);
}

looper();

// scroll logic
var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

// random shit

$('.home-btn').on('mouseenter', function(){
  $('.label-text-sm').addClass('blue-text')
}).on('mouseleave', function(){
  $('.label-text-sm').removeClass('blue-text')
})

