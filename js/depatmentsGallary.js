function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll(".slide");
  slides[activeSlide].classList.add("active");
  console.log(activeSlide);
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  });

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlugin(3);
