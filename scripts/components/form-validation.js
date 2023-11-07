     const warningPrivacyPolicy = document.querySelector('.warning-message')
     const form = document.querySelector('.contact-form');
     const selectInput = document.querySelector('.app-select');
     const emailInput = document.querySelector('.app-input-email');
     const textareaInput = document.querySelector('.app-textarea');
     const checkboxInput = document.querySelector('.app-input-checkbox');



     const setupFormValidation = () => {
      const isRequired = value => value === '' ? false : true;
      const isSelected = value => value > 0  
      const isBetween = (length, min, max) => length < min || length > max ? false : true;
      const isEmailValid = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
      const isChecked = value => value.checked

    const setStatus = (isValid, input, message = null) => {
        const errorMsg = input.nextSibling.nextSibling;
        errorMsg.style.display = isValid ? 'none' : 'block';
        errorMsg.textContent = isValid ? '' : message;

        if(isValid) {
            input.classList.remove('error');
            input.classList.add('success');
            return;
        }

        input.classList.remove('success');
        input.classList.add('error');
    }


      const checkTextArea = () => {
        let valid = false;
        const min = 5,
              max = 350;
        const UsersMessage = textareaInput.value.trim();

        if(!isRequired(UsersMessage)) {
            setStatus(false, textareaInput, 'To pole nie moze być puste')
        } else if (!isBetween(UsersMessage.length, min, max)) {
            setStatus(false, textareaInput, 'Twoja wiadomość jest za krótka') 
        } else {
            setStatus(true, textareaInput);
            valid = true;
        }

        return valid;
        
      }


      textareaInput.addEventListener('input', checkTextArea)
 

     


      const checkEmailInput = () => {
        let valid = false;
        const email = emailInput.value.trim();
        if (!isRequired(email)) {
            setStatus(false, emailInput, 'To pole nie moze być puste')
        } else if (!isEmailValid(email)) {
            setStatus(false, emailInput, 'Niepoprawny adres e-mail')
        } else {
            setStatus(true, emailInput);
            valid = true;
        }
        return valid
      }

      emailInput.addEventListener('keyup', checkEmailInput)

      const checkSelectInput = () => {
        let valid = false;
        const select = selectInput.value;
        if(!isSelected(select)) {
            setStatus(false, selectInput, 'Musisz wybrać kategorie')
        } else {
            setStatus(true, selectInput);
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

        
        
        form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isTextFieldValid = checkTextArea();
        const isEmailValid = checkEmailInput();
        const isSelected = checkSelectInput()
        const isChecked = handleCheckBox()

        const isFormValid = isTextFieldValid &&
        isEmailValid &&
        isSelected &&
        isChecked;

        if(isFormValid) {
            console.log('OK');
        }
      })

     }

     
     export {
        setupFormValidation,
     };