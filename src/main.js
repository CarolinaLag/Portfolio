window.addEventListener("load", function () {
  
    
TweenLite.set('.introline, .bigline',{x:'-103%'})

new TimelineMax({repeat:-1, yoyo:true, repeatDelay:2})
.to('.bigline',1,{x:'0%'})
.to('.introline',1,{x:'0%'}, "+=0.3")

TweenMax.to("#arrowRight", 1, {
    x: 20,
    repeat: 10,
    yoyo: true,
    ease: Sine.easeInOut,
    repeat: -1,
  });

});

document.getElementById("year").innerHTML = new Date().getFullYear();









 



