document.addEventListener("DOMContentLoaded", function() {

    // var sHome= document.getElementById('smooth-home');
    var sTeam= document.getElementById('smooth-team');
    var sCourses= document.getElementById('smooth-courses');
    var sLocate= document.getElementById('smooth-locate');
    var fblogolink= document.getElementById('fb-logo');
    var iglogolink= document.getElementById('ig-logo');
    var twlogolink= document.getElementById('tw-logo');
    var sHotel= document.getElementById('smooth-rooms');


    let j =0;
    var text = document.querySelectorAll('.header_list');
    // sHotel.addEventListener('click', function(){
    //     smoothScroll('#hotels', 1000);
    // })
    // sTeam.addEventListener('click', function(){
    //     smoothScroll('#scroll', 1000);
    // })
    // sCourses.addEventListener('click', function(){
    //     smoothScroll('.courses', 1000);
    // })
    // sLocate.addEventListener('click', function(){
    //     window.open("https://goo.gl/maps/assDxxgGKFp", '_blank');
    // })
    // fblogolink.addEventListener('click', function(){
    //     window.open("https://www.facebook.com/BirBillingPG/");
    // })    
    // iglogolink.addEventListener('click', function(){
    //     window.open("https://www.instagram.com/rudra.adventures/");
    // })    
    // twlogolink.addEventListener('click', function(){
    //     window.open("https://twitter.com/AdventuresRudra");
    // })

    $('.header_slider').slick({
        slidesToShow: 1 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });

    $('.review_slider').slick({
        slidesToShow: 1 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        dots: true,
    });


    $('.courseSlider').slick({
        centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    });

    

    $('.header_slider').on('beforeChange', function(event, slick, currentSlide){
        text[j].classList.remove("active");
        j++;
        if(j==4){
            j=0;
        }
        text[j].classList.add('active');
    });
    

    var element = document.getElementsByClassName("slick-active");
        var i;
        for (i = 0; i < element.length; i++) {
            element[1].classList.add("slick-center")
        }

})

// function for smooth scrolling
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var distance = targetPos-startPos;
    var startTime =null;


    function animation(currentTime){
        if(!startTime) startTime = currentTime;
        var timeElapsed = currentTime-startTime;
        var run = ease(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed<duration) {requestAnimationFrame(animation);}
    }

    function ease(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    requestAnimationFrame(animation);
}
