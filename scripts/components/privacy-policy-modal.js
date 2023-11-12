
const setupModal = () => {
    const privacyPolicyLink = document.querySelectorAll('.privacy-policy__link')
    const privacyPolicyContainer = document.querySelector('.privacy-policy-container')
    const privacyPolicyCloseModalBtn = document.querySelector('.privacy-policy-modal__close-window-btn')

    const openModal = () => {
       privacyPolicyContainer.style.display = 'block'
    }

     const closeModal = () => {
        privacyPolicyContainer.style.display = 'none'
    }

    privacyPolicyCloseModalBtn.addEventListener('click', closeModal)
    privacyPolicyLink.forEach((link)=> {
        link.addEventListener('click', openModal)
    })
}

   

export { setupModal };