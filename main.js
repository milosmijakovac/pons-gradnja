$(document).ready(function() {
  $('[data-fancybox="gallery-agena"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
  $('[data-fancybox="gallery-cocacola"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
  $('[data-fancybox="gallery-beska"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
  $('[data-fancybox="gallery-enveloprint"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
  $('[data-fancybox="gallery-koste"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
  $('[data-fancybox="gallery-krusedol"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
  $('[data-fancybox="gallery-karlito"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x"
    }
  });
});

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




  let paragraph = Array.from(document.querySelectorAll(".project-paragraph"));
  let parag = paragraph.map(item => item.innerHTML)


  let limitParagraph = (parag) => {

    for(let i = 0; i < parag.length; i++) {
      let newTitle = [];
     const limit = 20;
     if(parag[i].length > limit) {
       parag[i].split(' ').reduce((acc, cur) => {
         if(acc + cur.length <= limit) {
           newTitle.push(cur)
         }
         return acc + cur.length;
       }, 0);
         `${newTitle.join(' ')} ...`
     }
  }

  limitParagraph(parag);




  
  // const limitParagraph = (paragraph, limit = 40) => {
  //   const newTitle = [];
  //   if(paragraph.length > limit) {
  //     paragraph.split(' ').reduce((acc, cur) => {
  //       if(acc + cur.length <= limit) {
  //         newTitle.push(cur)
  //       }
  //       return acc + cur.length;
  //     }, 0);
      
  //     return `${newTitle.join(' ')} ...`
  //   }
  //   newTitle.push(cur);
  //   return paragraph;
  // }

  // limitParagraph(paragraph)