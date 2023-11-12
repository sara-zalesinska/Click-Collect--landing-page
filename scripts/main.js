import '../styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { setupCarousel } from './components/carousel';
import { setupFormValidation } from './components/form-validation';
import { setupNavigation } from './components/navigation';
import { setupCookies } from './components/cookies-popup';
import { setupModal } from './components/privacy-policy-modal';

document.addEventListener('DOMContentLoaded', () => {
  setupCarousel();
  setupFormValidation();
  setupNavigation();
  setupCookies();
  setupModal();
  AOS.init();
});
