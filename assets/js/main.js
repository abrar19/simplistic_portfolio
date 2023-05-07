// Preloader
const loader = document.getElementById('preloader');

window.addEventListener('load', ()=>{
  loader.style.display = 'none';
})

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
let swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message');

      const sendEmail = (e) => {
        e.preventDefault();
        // Check if the field has a value
        if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
          // Add and remove color
          contactMessage.classList.remove('color-blue');
          contactMessage.classList.add('color-red');

          // Show message	
          contactMessage.textContent = 'Fill all the input fields 📓'
        }else{
          // serviceID - templateID - #form - publicKey
          emailjs.sendForm('service_r7t2ccl', 'template_uae1j2b', '#contact-form', 'WWuJueMMDUeu0SAYr')
          .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent 🟩'

            //Remove message after 5 seconds
            setTimeout(()=>{
              contactMessage.textContent = '';
            }, 5000)
          }, 
          // Send Error
          (error) => {
            alert("Oops something is not working!", error);
          })
        }
      } 
      
    
    // To clear the input field

      contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
          }else{
            sectionsClass.classList.remove('active-link');
          }
  })
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollup = document.getElementById('scroll-up');

  this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

//Previously selected theme(if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

//We validate if the user has chosen a theme previously
if(selectedTheme){
  //if validation is done we ask if we are active
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

//Activate/Deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
  //Add/remove the dark icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //we save the theme and current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 400,
  reset: true
})

sr.reveal('.home__data , .projects__container, .testimonial__container, .footer__container');
sr.reveal('.home__info div', {delay: 300, origin: 'bottom', interval: 100});
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification__content, .services__card', {interval: 100})
