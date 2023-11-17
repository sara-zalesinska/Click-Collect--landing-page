# Click-Collect--landing-page

Live version: 

## Project description:

This is a landing page for Click&Collect. It was made mainly for learning purposes. It is worth mentioning that the following parts/ views of the app were done by myself as they had not been included in the Figma design:
* mobile view
* mobile menu
* hover effects
* animations 
* cookies popup
* privacy policy modal window

Overall, I'm really happy with the parts I came up with as well as with the rest of the page. 

## Technologies and libraries used:
* Vite
* HTML
* SASS
* Java Script
* Eslint + Prettier
* Swiper (for the opinions section carousel)
* Js-cookie (cookies)
* AOS (animate on scroll)
* Google Fonts

## Sections of the page
The most time-consuming part of the project was adjusting the position of pictures that are visible throughout the whole background of the page. 

### Functions & Benefits sections
For the functions (funkcje) section I used `flexbox` with `flex-wrap` and for the benefits section (korzysci) I used `grid` with the `minmax()` method. Both layouts are fully responsive. 

### Opinions section 
For the opinions section carousel I used `swiper API` with the `autoplay` module.

### Contact Section
The contact section (kontakt) has got a `form` with a `fieldset`. The form validation is also working properly. Things specifically checked in the required fields are:

| Field's name | Is valid |
|------------|-------------|
| Select Input | must be selected `checkSelectInput()`|
| E-mail Input | can't be empty + proper format (RegExp) `checkEmailInput()`|
| Message TextArea | can't be empty + min&max num of characters `checkTextArea()`|
| Checkbox | must be checked `handleCheckBox()`|

The whole form validation functionality can be found in the `form-validation.js` file in `scripts` -> `components`.

### Cookies pop-up 
For the cookies handling I used `js-cookies API`. 

### Privacy Policy modal
The Privacy Policy opens up in a modal window. I created a `markdown` with the basic HTML tags styled to match the site's design. The purpose of this was to enable the owner of the page to complete the Privacy Policy content on his own 
using basic HTML tags not worrying about styling paragraphs, lists, etc. Moreover, the project contains the `reset.scss` file in order to reduce browser inconsistencies in things like default line heights, size of headings, and so on. 
