const navSlide = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-links-mob li");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    // burger
    burger.classList.toggle("toggle");
  });
};

navSlide();
