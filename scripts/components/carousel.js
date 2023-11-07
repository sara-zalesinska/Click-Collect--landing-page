import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'


const setupCarousel = () => {
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
}


export {
    setupCarousel,
};