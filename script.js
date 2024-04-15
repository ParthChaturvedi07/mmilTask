document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });

const aboutLink = document.querySelector('.about');
const contactLink = document.querySelector('.contact');
const aboutSection = document.querySelector('.about-section');
const contactSection = document.querySelector('.contact-section');

aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    scroll.scrollTo(aboutSection);
});

contactLink.addEventListener('click', function (e) {
    e.preventDefault();
    scroll.scrollTo(contactSection);
});

});
