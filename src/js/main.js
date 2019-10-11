'use strict';

$(document).ready( function() {	

    // HOME PAGE HEIGHT
    jQuery(window).load(function() {
            // will first fade out the loading animation
        jQuery(".loader").fadeOut();
            // will fade out the whole DIV that covers the website.
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });

     
    // HOME PAGE HEIGHT
    if ($('.home, .portfolio-hero').length) {
        function fullhome() {
            var hometext = $('.home, .portfolio-hero')            
//            var homett = $('.hero-title').offset();
//            $('.social').css('margin-top', homett.top)            
            hometext.css({
                "height": $(window).height() + "px"
            });
        }
        fullhome();
        $(window).resize(fullhome);
    }
        



    // PORTFOLIO ISOTOPE
    if ($('.isotope_items').length) {
         var $container = $('.isotope_items');
         $container.isotope();

        $('.portfolio-filter ul li').on("click", function(){
            $(".portfolio-filter ul li").removeClass("select-cat");
            $(this).addClass("select-cat");              
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
        });
            return false;
        });      
    }


    // PORTFOLIO EFFECT
    $(".cbp-item").hover3d({
        selector: "figure",
        perspective: 3000,
        shine: true
    });

    
    $('.site-btn').click(function(){
         $('.isotope_items').load('port.html').fadeIn();
     });


// PORTFOLIO CONTENT  
    $('#grid-container').cubeportfolio({
        layoutMode: 'grid',
        filters: '.portfolio-filter',
        gridAdjustment: 'responsive',
        animationType: 'skew',
        defaultFilter: '*',
        gapVertical: 30,
        gapHorizontal: 30,
        singlePageAnimation: 'fade',
        mediaQueries: [{
                width: 700,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 30,
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    caption: '',
                    gapHorizontal: 50,
                }
            }],            
        singlePageCallback: function (url, element) {
            var t = this;
            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function (result) {
                    t.updateSinglePage(result);
                })
                .fail(function () {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
            plugins: {
                loadMore: {
                    element: '#port-loadMore',
                    action: 'click',
                    loadItems: 2,
                }
            }
    }); 




}); // document ready end 




































