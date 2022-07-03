$(document).ready(function(){
      const ww = $(window).width();
      AOS.init();

    
      if(ww > 999){


        var swiper = new Swiper(".sec2Swiper", {
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        var swiper = new Swiper(".mySwiper", {
            loop: true,
            effect: "slide",
            autoplay: {
                delay: 2500
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });
    
      }else{
    
      }
    // var swiper = new Swiper(".sec2Swiper", {
    //     spaceBetween: 30,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });

    
    // 수정

    $('label[for=trigger]').click(function(){
      $('.m-sub-menu').fadeToggle(500);
    });
    

    $('.menu li').mouseenter(function(){

        var result = $(this).attr('data-alt');

        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');

        $('.sub-menu-box').addClass('active');

      });
      
      $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');  
      });

      $(window).scroll(function(){
        const sct = $(window).scrollTop();

        if(sct > 300){
          $('.header-area').addClass('active');
          $('.menu li a').addClass('active');
          $('.icon-box li a').addClass('active');
          $('.header-logo').addClass('active');
          $('label[for=trigger] span').addClass('active');
          $('label[for=trigger]').addClass('active');
        }else{
          $('.header-area').removeClass('active');
          $('.menu li a').removeClass('active');
          $('.icon-box li a').removeClass('active');
          $('.header-logo').removeClass('active');
          $('label[for=trigger] span').removeClass('active');
          $('label[for=trigger]').removeClass('active');
        }
      });
      
      
});