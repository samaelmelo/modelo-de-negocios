/*Abre e fecha o menu quando clicar no icon: hamburguer e x*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// for of usado para mostrar os elementos
// PARA CADA TOOGLE CRIE UMA CONST ELEMENT
for (const element of toggle) {
  element.addEventListener('click', function () {
    // classlist == lista de classe
    // toggle() == mudar para ('show')
    // se tiver a classe "show" o toggle tira
    // se não tiver a classe "show" o toggle coloca
    nav.classList.toggle('show')
  })
}

/*Quando clicar em um item do meun, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')
for (const lk of links) {
  lk.addEventListener('click', function () {
    //
    nav.classList.remove('show')
  })
}

/*Mudar o header da página quando der o scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight //deslocamento da altura

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// TESTIMONIALS SWIPPER CARROUSSEL/SLIDER
const swiper = new Swiper('.swiper-container', {
  SlidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// <!-- SCROLLREVEAL : MOSTRAR PAGINAS QUANDO DER SCROLL -->

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home, .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// BOTÃO VOLTAR PARA O TOPO - BACK TO TOP

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrolly >= 560) {
    //SCROLL == ROLAGEM
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// MENU FICA MARCADO CONFORME A SEÇÃO ESCOLHIDA NA PÁGINA
const sections = document.querySelectorAll('main section[id]') //pegar dentro do main todas as seções que contenham id
function activateMenuAtCurrentSection() {
  // page = pagina  y = eixo y   offset = deslocamento
  // na janela pegar o deslocamento da página no eixo y/vertical
  // da janela pegar toda altura interior
  const checkpoint = window.pageyOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document                    // a com href '*h' específico 
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// EVENTO SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
