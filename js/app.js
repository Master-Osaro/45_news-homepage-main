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