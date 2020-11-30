window.onload = function() {

  function init(){
//reset opacity and pause time
    cta.style.opacity = '0';
    headlineWrapper.style.opacity = '0';
    claimWrapper.style.opacity = '0';
    var pauseOnClaim = 2;

var tl = new TimelineLite({onComplete:animComplete});


tl.to(signalA, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalB, .125, {ease:Sine.easeInOut, opacity:1, delay:.0});
tl.to(signalC, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalD, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(backgroundImg, .125, {ease:Sine.easeInOut, opacity:1, delay:-.125});
tl.to(signalA, .25, {ease:Sine.easeInOut, opacity:0, delay:-.15});
tl.to(signalB, .25, {ease:Sine.easeInOut, opacity:0, delay:-.16});
tl.to(signalC, .25, {ease:Sine.easeInOut, opacity:0, delay:-.17});
tl.to(signalD, .25, {ease:Sine.easeInOut, opacity:0, delay:-.18});
tl.to(backgroundImg, .125, {ease:Sine.easeInOut, opacity:1, delay:1.5});
tl.to(signalA, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalB, .125, {ease:Sine.easeInOut, opacity:1, delay:.0});
tl.to(signalC, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalD, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(middleImg, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalA, .25, {ease:Sine.easeInOut, opacity:0, delay:-.15});
tl.to(signalB, .25, {ease:Sine.easeInOut, opacity:0, delay:-.16});
tl.to(signalC, .25, {ease:Sine.easeInOut, opacity:0, delay:-.17});
tl.to(signalD, .25, {ease:Sine.easeInOut, opacity:0, delay:-.18});
tl.to(middleImg, .125, {ease:Sine.easeInOut, opacity:1, delay:1.5});
tl.to(signalA, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalB, .125, {ease:Sine.easeInOut, opacity:1, delay:.0});
tl.to(signalC, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalD, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(foregroundImg, .125, {ease:Sine.easeInOut, opacity:1, delay:0});
tl.to(signalA, .25, {ease:Sine.easeInOut, opacity:0, delay:-.15});
tl.to(signalB, .25, {ease:Sine.easeInOut, opacity:0, delay:-.16});
tl.to(signalC, .25, {ease:Sine.easeInOut, opacity:0, delay:-.17});
tl.to(signalD, .25, {ease:Sine.easeInOut, opacity:0, delay:-.18});
tl.to(cta, .5, {ease:Sine.easeInOut, opacity:1, delay:.25});
}


  //called on main timeline completion
  function animComplete(){}

////////////////////////////////////////////
  init();
}
