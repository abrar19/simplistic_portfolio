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
          });
        }
      } 
      
      // Remove message after five seconds
    
      // Send Error
        //OOPS! SOMETHING HAS FAILED...
    
    // To clear the input field

      contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

