// random shit

$('.home-btn').on('mouseenter', function(){
  $('.label-text-sm').addClass('blue-text')
}).on('mouseleave', function(){
  $('.label-text-sm').removeClass('blue-text')
})

// marquee 
function handleMarquee(){
  const marquee = document.querySelectorAll('.marquee');
  let speed = 1.5;
  let lastScrollPos = 0;
  let timer;
  
  marquee.forEach(function(el){
    const container = el.querySelector('.inner');
    const content = el.querySelector('.inner > *');
    //Get total width
    const  elWidth = content.offsetWidth;
    
    
    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);
    
    let progress = 1;
    function loop(){
      progress = progress-speed;
      if(progress <= elWidth*-1) {progress=0;}
      container.style.transform = 'translateX(' + progress + 'px)';
      container.style.transform += 'skewX(' + speed*0.2 + 'deg)';
      
      window.requestAnimationFrame(loop);
    }
    loop();
  });
  
  window.addEventListener('scroll', function(){
    const maxScrollValue = 5;
    const newScrollPos = window.scrollY;
    let scrollValue = newScrollPos - lastScrollPos;
    
    
    if( scrollValue > maxScrollValue ) scrollValue = maxScrollValue;
    else if( scrollValue < -maxScrollValue ) scrollValue = -maxScrollValue;
    
    speed = scrollValue;
    
    clearTimeout(timer);
    timer = setTimeout(handleSpeedClear, 10);
  });
  
  function handleSpeedClear(){
    speed = 3;
  }
};

handleMarquee();


// cursor 

$(document).on('mousemove', function(e){ 
  $('.next-project-cursor-con').show();
  $('.next-project-cursor-con').offset({
    left: e.pageX-45,
    top: e.pageY-45});
});

var nextProjectHover  = new TimelineMax();



$('.inner').on('mouseenter', function() {

  nextProjectHover
  .to('.next-project-arrow', 0.3, { css: { scaleX: 1, scaleY: 1, rotation: 0}})


}).on('mouseleave', function() {

  nextProjectHover
  .to('.next-project-arrow', 0.3, { css: { scaleX: 0, scaleY: 0, rotation: -45}});

})