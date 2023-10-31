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

         navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
      })
        handleNavItemsAnimation();
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