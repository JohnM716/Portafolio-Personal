/* Menu Show */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* Remove Menu Mobile  */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* Typewrite Effect */

const typeWriter = document.getElementById('typewriter-text');
const text = '[Frontend Developer]';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

/* Scroll Reveal Anumation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL Inicio*/
sr.reveal('.inicio__title', {})
sr.reveal('.inicio__subtitle', { delay: 400 })
sr.reveal('.button--flex', { delay: 600, interval: 300 })


/*SCROLL Sobre Mi*/
sr.reveal('.sobremi__img', { origin: 'left', delay: 500 })
sr.reveal('.sobremi__subtitle', { delay: 300 })
sr.reveal('.sobremi__profession', { delay: 400 })
sr.reveal('.sobremi__text', { delay: 500 })
sr.reveal('.sobremi__social-icon', { delay: 600, interval: 200 })

/*SCROLL Habilidades*/
sr.reveal('.set__icon', { delay: 800 })
sr.reveal('.habilidades__subtitle', {})
sr.reveal('.habilidades__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.habilidades__img', { delay: 400 })

/*SCROLL Proyectos*/
sr.reveal('.box', { interval: 200 })