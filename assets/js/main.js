;
(function($) {
    'use strict'
    jQuery(document).ready(function() {
        $('.counter').counterUp({
            delay: 100,
            time: 100000
        });

        var mixer = mixitup('.items-wrapper');

        let filterBtn = document.querySelectorAll('.filter-btn');


        filterBtn.forEach((singleItem) => {
            singleItem.addEventListener('click', function() {
                filterBtn.forEach((val) => {
                    val.classList.remove('active')
                })
                this.classList.add('active')
            })
        });

        $('#select').niceSelect();

        $(".testimonial-wrapper").slick({

            // normal options...
            infinite: false,
            arrows: false,
            dots: true,
            slidesToShow: 2,
            autoplay: true,
          
            // the magic
            responsive: [{
          
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  infinite: true
                }
          
              }, {
          
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  dots: true
                }
          
              }, {
          
                breakpoint: 300,
                settings: "unslick" // destroys slick
          
              }]
          });

        //   ACCORDION
        $(".faq-content").css("display","none");
        $(".faq-title").click(function () {
            2
              $(".faq-title").not(this).removeClass("open");
            3
              $(".faq-title").not(this).next().slideUp(300);
            4
              $(this).toggleClass("open");
            5
              $(this).next().slideToggle(300);
            6
        });
            
        const faqTitle = document.querySelectorAll('.faq-title');

        faqTitle.forEach((value) => {
            if (value.classList.contains('open')) {
                value.nextElementSibling.style.display = 'block'
                value.previousElementSibling.style.boxShadow = '0px 10px 60px 0px rgba(38 103 255 / 10%'
            }
            value.addEventListener('click', (e) => {
                if (value.classList.contains('open')) {
                    value.nextElementSibling.style.display = 'block'
                    value.previousElementSibling.style.boxShadow = '0px 10px 60px 0px rgba(38 103 255 / 10%'
                }
            })
        })


    })
 })(jQuery)