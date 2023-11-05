import './styles/main.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

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



 
    //   const fieldset = document.querySelector('.app-fieldset')
      const warningPrivacyPolicy = document.querySelector('.warning-message')
    //   const checkbox = document.querySelector('.app-input-checkbox')
    //   const contactFormInputs = document.querySelectorAll('.app-form-essential')
    //   const contactFormCheckbox = document.querySelector('#data-processing-checkbox')
    //   const contactFormTextArea = document.querySelector('.app-textarea')
     const contactFormSendBtn = document.querySelector('.contact-section__submit-btn')
     const contactFormWarningMsg = document.querySelectorAll('.empty-field-warning-message')
     const form = document.querySelector('.contact-form');
    //  const EMAIL_REGEX =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     const selectInput = document.querySelector('.app-select');
     const emailInput = document.querySelector('.app-input-email');
     const textareaInput = document.querySelector('.app-textarea');
     const checkboxInput = document.querySelector('.app-input-checkbox');


      const isRequired = value => value === '' ? false : true;
      const isSelected = value => value > 0  
      const isBetween = (length, min, max) => length < min || length > max ? false : true;
      const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const isChecked = value => value.checked




      const showError = (input, message) => {
        const errorMsg = input.nextSibling.nextSibling;
        errorMsg.style.display = 'block';
        errorMsg.textContent = message;
        input.classList.add('error');
        // console.log(in
      }
     
      const showSuccess = (input) => {
        const errorMsg = input.nextSibling.nextSibling;
        errorMsg.style.display = 'none';
        errorMsg.textContent = '';
        input.classList.remove('error');
        input.classList.add('success');
      }


      const checkTextArea = () => {
        let valid = false;
        const min = 5,
              max = 350;
        const UsersMessage = textareaInput.value.trim();

        if(!isRequired(UsersMessage)) {
            showError(textareaInput, 'To pole nie moze być puste')
        } else if (!isBetween(UsersMessage.length, min, max)) {
            showError(textareaInput, 'Twoja wiadomość jest za krótka') 
        } else {
            showSuccess(textareaInput);
            valid = true;
        }

        return valid;
        
      }


      textareaInput.addEventListener('keyup', checkTextArea)
 

     


      const checkEmailInput = () => {
        let valid = false;
        const email = emailInput.value.trim();
        if (!isRequired(email)) {
            showError(emailInput, 'To pole nie moze być puste')
        } else if (!isEmailValid(email)) {
            showError(emailInput, 'Niepoprawny adres e-mail')
        } else {
            showSuccess(emailInput);
            valid = true;
        }
        return valid
      }

      emailInput.addEventListener('keyup', checkEmailInput)

      const checkSelectInput = () => {
        let valid = false;
        const select = selectInput.value;
        if(!isSelected(select)) {
            showError(selectInput, 'Musisz wybrać kategorie')
        } else {
            showSuccess(selectInput);
            valid = true;
        }

        return valid
      }

      selectInput.addEventListener('change', checkSelectInput)


      const handleCheckBox = () => {
            let valid = false;
            const checkbox = checkboxInput;
            if(!isChecked(checkbox)) {
                warningPrivacyPolicy.style.display = 'block'
            } else {
                warningPrivacyPolicy.style.display = 'none'
                valid = true;
            }

            return valid
        }

        checkboxInput.addEventListener('click', handleCheckBox)

           const errors = [];



 form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isTextFieldValid = checkTextArea();
        let isEmailValid = checkEmailInput();
        let isSelected = checkSelectInput()
        let isChecked = handleCheckBox()

        let isFormValid = isTextFieldValid &&
        isEmailValid &&
        isSelected &&
        isChecked;

        if(isFormValid) {
            console.log('OK');
        }
      })





