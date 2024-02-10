/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

window.onscroll = () => {
    navToggle.classList.remove('active');
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: 'true',
})

sr.reveal('.home-text, .row')
sr.reveal('.products-container', { delay: 900 })
sr.reveal('.home-img, .about-text', { delay: 800, origin: 'right', interval: 100 })
sr.reveal('.about-img', { delay: 800, origin: 'left' })
sr.reveal('.box:nth-child(2)', {delay: 600, origin: "bottom"})
sr.reveal('.box:nth-child(1)', {delay: 600, origin: "left"})
sr.reveal('.box:nth-child(3)', {delay: 600, origin: "right"})