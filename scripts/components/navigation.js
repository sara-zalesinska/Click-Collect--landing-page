const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const navItems = document.querySelectorAll('.nav__list-elemnt')


    const setupNavigation = () => {

        const onNavButtonClick = () => {
            nav.classList.toggle('nav--active')
            setOverflow();
            isNavOpen();
            navItems.forEach(item => {
            item.addEventListener('click', () => {
                nav.classList.remove('nav--active')
                document.body.style.overflow = 'auto'
                isNavOpen();
                
            })
        })
            handleNavItemsAnimation();
      }

        const setOverflow = () => {
            nav.classList.contains('nav--active') 
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';
      }

      const isNavOpen = () => {
        if(nav.classList.contains('nav--active')){
            burgerBtn.style.display = 'none'
             closeBtn.style.display = 'block'
        } else {
            burgerBtn.style.display = 'block'
            closeBtn.style.display = 'none'
        }
      }

     

        const handleNavItemsAnimation = () => {
            let delayTime = 0;

            navItems.forEach(item => {
            item.classList.toggle('nav-items-animation')
            item.style.animationDelay = `.${delayTime}s`;
            delayTime++;
            })
        }

         burgerBtn.addEventListener('click', onNavButtonClick)
         closeBtn.addEventListener('click', onNavButtonClick)
      }


export {
setupNavigation,
};