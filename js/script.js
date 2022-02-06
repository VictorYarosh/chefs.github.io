
$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* header fixed */

    checkScroll(scrollOffset);    

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        
    });

    function checkScroll(scrollOffset) {

         if(scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smoth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();


        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });

    /* Menu nav toggle*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();


        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    /* collapse*/
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");

    });
});


  

function slidesPlagin (activeSlide) {
    const slideCards = document.querySelectorAll('.slideCard')

    slideCards[activeSlide].classList.add('active')

    for (const slideCard of slideCards) {
        slideCard.addEventListener('click', () => {
        clearActiveClasses()

        slideCard.classList.add('active')
    })
 }

    function clearActiveClasses() {
        slideCards.forEach((slideCard) =>{
        slideCard.classList.remove('active')
      })
    }
}


slidesPlagin (3);


