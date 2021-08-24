const slides = Array.from(document.querySelectorAll(".slide"));
      const slider = document.querySelector(".mySlides");

      const buttons = document.querySelectorAll(".carousel-controls");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          if (button.classList.contains("next")) getNextSlide();
          else if (button.classList.contains("prev")) getPrevSlide();
        });
      });

      function getNextPrev() {
        const activeSlide = document.querySelector(".slide.active"); //actieve slide
        const activeIndex = slides.indexOf(activeSlide); // index van de actieve slide
        let next;
        let prev;
        // als de index van de actieve slide overeenkomt met de laatste slide, dan wordt next slides[0]
        if (activeIndex === slides.length - 1) {
          next = slides[0];
          // anders wordt next de eerstvolgende slide qua index
        } else {
          next = slides[activeIndex + 1];
        }

        //als de index van de actieve slide gelijk staat aan 0, dan wordt prev de laatste slide in de array.
        if (activeIndex === 0) {
          prev = slides[slides.length - 1];
          //anders wordt prev de vorige slide qua index.
        } else {
          prev = slides[activeIndex - 1];
        }
        //geef de nieuwe waarden voor prev en next terug
        return [next, prev];
      }

      function getPosition() {
        const activeSlide = document.querySelector(".slide.active");
        const activeIndex = slides.indexOf(activeSlide);
        const [next, prev] = getNextPrev();
        slides.forEach((slide, index) => {
          if (index === activeIndex) {
            slide.style.transform = "translateX(0)";
          } else if (slide === prev) {
            slide.style.transform = "translateX(-100%)";
          } else if (slide === next) {
            slide.style.transform = "translateX(100%)";
          } else {
            slide.style.transform = "translateX(100%)";
          }
        });
      }

      function getNextSlide() {
        const current = document.querySelector(".slide.active");
        const [next, prev] = getNextPrev();

        current.style.transform = "translate(-100%)";
        current.classList.remove("active");
        next.style.transform = "translateX(0)";
        next.classList.add("active");

        getPosition();
      }

      function getPrevSlide() {
        const current = document.querySelector(".active");
        const [next, prev] = getNextPrev();

        current.style.transform = "translate(100%)";
        current.classList.remove("active");
        prev.style.transform = "translateX(0)";
        prev.classList.add("active");
        getPosition();
      }

      getPosition();