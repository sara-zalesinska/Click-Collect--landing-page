import './styles/main.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'


    const swiper = new Swiper('.swiper', {
        speed: 200,
        spaceBetween: 32,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
          },
          breakpoints: {
            768: {
                slidesPerView: 2,
            }
        },
        modules: [
            Autoplay,
        ]
       

      });




      const nav = document.querySelector('.nav');
      const navBtn = document.querySelector('.burger-btn');
      const navItems = document.querySelectorAll('.nav__list-elemnt')


      const handleNav = () => {
        nav.classList.toggle('nav--active')
        navOpen();

         navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
            document.body.style.overflow = 'auto'
        })
      })
        handleNavItemsAnimation();
      }

      const navOpen = () => {
        if (nav.classList.contains('nav--active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
      }

     

      const handleNavItemsAnimation = () => {
        let delayTime = 0;

        navItems.forEach(item => {
            item.classList.toggle('nav-items-animation')
            item.style.animationDelay = '.' + delayTime + 's';
            delayTime++;
        })
      }

      navBtn.addEventListener('click', handleNav)




      const contactFormInputs = document.querySelectorAll('.app-form-essential')
      const contactFormCheckbox = document.querySelector('#data-processing-checkbox')
      const contactFormTextArea = document.querySelector('.app-textarea')
      const contactFormSendBtn = document.querySelector('.contact-section__submit-btn')
      const contactFormWarningMsg = document.querySelectorAll('.empty-field-warning-message')
      const fieldset = document.querySelector('.app-fieldset')

   

      const handleInputValidation = () => {
        
       contactFormInputs.forEach((input)=> {
         if(input.value === '') {
           input.classList.add('empty-field')
           contactFormWarningMsg.forEach((message)=> {
            message.style.display = 'block'
           })
        //    contactFormCheckbox.style.borderColor = 'red'
          } else {
            input.classList.remove('empty-field')
            // contactFormCheckbox.style.borderColor = '#D1D5DB'
          }
       })
      }

    //   const handleTextAreaValidation = () => {
    //         if(contactFormTextArea.value === '') {
    //             contactFormTextArea.classList.add('empty-field')
    //         }
 

    //   }

     

      fieldset.addEventListener('click', handleInputValidation);
      contactFormSendBtn.addEventListener('click', handleInputValidation);
     
    //   contactFormSendBtn.addEventListener('click', handleTextAreaValidation);