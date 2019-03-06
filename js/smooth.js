document.addEventListener("DOMContentLoaded", function() {

    var sHome= document.getElementById('smooth-home');
    var sTeam= document.getElementById('smooth-team');
    var sCourses= document.getElementById('smooth-courses');
    var sLocate= document.getElementById('smooth-locate');
    var fblogolink= document.getElementById('fb-logo');
    var iglogolink= document.getElementById('ig-logo');
    var twlogolink= document.getElementById('tw-logo');


    let j =0;
    var text = document.querySelectorAll('.header_list');
    sHome.addEventListener('click', function(){
        smoothScroll('.header', 1000);
    })
    sTeam.addEventListener('click', function(){
        smoothScroll('.team', 1000);
    })
    sCourses.addEventListener('click', function(){
        smoothScroll('.courses', 1000);
    })
    sLocate.addEventListener('click', function(){
        window.location = "https://goo.gl/maps/assDxxgGKFp";
    })
    fblogolink.addEventListener('click', function(){
        window.location = "https://www.facebook.com/rudra.adventures/";
    })    
    iglogolink.addEventListener('click', function(){
        window.location = "https://www.instagram.com/rudra.adventures/";
    })    
    twlogolink.addEventListener('click', function(){
        window.location = "https://twitter.com/AdventuresRudra";
    })

    $('.header_slider').slick({
        slidesToShow: 1 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        dots: true,
    });

    $('.header_slider').on('afterChange', function(event, slick, currentSlide){
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
