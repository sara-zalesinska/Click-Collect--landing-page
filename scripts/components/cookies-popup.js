import Cookies from 'js-cookie';

const setupCookies = () => {
  const cookiesPopupWindow = document.querySelector('.cookies-popup');
  const acceptCookiesBtn = document.querySelector('.cookies-popup-buttons__accept-btn');
  const declineCookiesBtn = document.querySelector('.cookies-popup-buttons__decline-btn');

  if (Cookies.get('acceptCookies')) {
    return;
  }

  setTimeout(() => {
    cookiesPopupWindow.classList.add('cookies-popup--visible');
  }, 1500);

  const acceptCookies = () => {
    Cookies.set('acceptCookies', 'true');
    cookiesPopupWindow.classList.remove('cookies-popup--visible');
  };

  const declineCookies = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    cookiesPopupWindow.classList.remove('cookies-popup--visible');
  };

  acceptCookiesBtn.addEventListener('click', acceptCookies);
  declineCookiesBtn.addEventListener('click', declineCookies);
};

export { setupCookies };
