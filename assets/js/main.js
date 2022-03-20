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
    })
 })(jQuery)