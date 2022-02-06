const domContainer = document.querySelector('#like_button_container');
  ReactDOM.render(e(LikeButton), domContainer);
    
  

  function slidesPlagin (activeSlide) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
       slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
 }

    function clearActiveClasses() {
       slides.forEach((slide) =>{
        slide.classList.remove('active')
      })
    }
}

slidesPlagin (2)