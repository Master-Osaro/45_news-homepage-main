# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)



### Links

- Live Site URL: [Live Demo](https://news-homepage-o)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties


### What I Learned
- setAttribute in Js
- Intersection Observer API

```js
    checkboxBtn.setAttribute("aria-expanded", status);

    const wrappers = document.querySelectorAll('.obs-wrapper');

const options = {
    threshold: 0.3,
    rootMargin: '0px 0px 0px 0px',
};

const appearOnScroll = function (entries, appearOnScroll) {
    entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const elem = entry.target;

    elem.classList.add('appear');
    elem.classList.add('slide-down');

    appearOnScroll.unobserve(elem);
    });
};

const observer = new IntersectionObserver(appearOnScroll, options);

wrappers.forEach((wrapper) => observer.observe(wrapper));
```




## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/Master-Osaro)
- Twitter - [@iyoha_osaro](https://twitter.com/iyoha_osaro)
- Github - [@Master-Osaro](https://github.com/Master-Osaro/)

**Had fun building!** 🚀