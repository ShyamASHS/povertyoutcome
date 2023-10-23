document.addEventListener("DOMContentLoaded", function() {
  let login = document.querySelector(".login-form");
  let navbar = document.querySelector(".header .navbar"); 

  document.querySelector("#login-btn").onclick = function() {
    login.classList.toggle('active');
    navbar.classList.remove('active'); 
  };

  document.querySelector("#menu-btn").onclick = function() {
    navbar.classList.toggle('active'); 
    login.classList.remove('active'); 
  };

  window.onscroll = () => {
    login.classList.remove('active');
    navbar.classList.remove('active');
  };
});

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".gallery-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
    }
  });
});
