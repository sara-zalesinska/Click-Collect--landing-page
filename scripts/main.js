import '../styles/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css';


import { setupCarousel } from './components/carousel';
import { setupFormValidation } from './components/form-validation';
import { setupNavigation } from './components/navigation';

document.addEventListener('DOMContentLoaded', () => {
  setupCarousel();
  setupFormValidation();
  setupNavigation();
  AOS.init();
})









