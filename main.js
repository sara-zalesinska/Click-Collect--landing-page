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
       
     
        // breakpoints: {
        //     768: {
        //         slidesPerView: 1,
        //         spaceBetween: 20,
        //     }
        // },
      });



// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

