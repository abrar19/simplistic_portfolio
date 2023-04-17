/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // Menu Show
    // Validate if const variables exist
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    // Menu hide 
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
        })
    }

    //Hide menu on option clicks
    const navLink = document.querySelectorAll('.nav__link')
    
    const linkAction = () => {
       const navMenu = document.getElementById('nav-menu')
       navMenu.classList.remove('show-menu');
    }

    navLink.forEach(link => link.addEventListener('click', linkAction))


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SWIPER PROJECTS ===============*/
let swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200 : {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      }
  });

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

