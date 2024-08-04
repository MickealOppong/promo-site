import { aboutMe, navData, projectData, skills } from "./data";

const navCenter = document.querySelector('.nav-links') as HTMLDivElement
const slider = document.querySelector('.slider') as HTMLElement
const leftBtn = document.querySelector('.left-btn') as HTMLElement
const rightBtn = document.querySelector('.right-btn') as HTMLElement
const slideBtns: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dot-btn')



// load nav data


const stacks = navData.map((item) => {
  return `<div class="tech">
<li><a>${item.title}</a></li>
</div>
`
}).join('')

navCenter.innerHTML = stacks;

//set nav to fixed after & scroll behaviour


window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav') as HTMLElement
  const slideBtns = document.querySelector('.slide-btns') as HTMLElement

  const navHeight = nav.getBoundingClientRect().height;

  const windowHeight = window.scrollY;


  if (windowHeight > navHeight) {
    nav.classList.add('fixed')
    slideBtns.style.top = '72%'
  } else {
    slideBtns.style.top = '80%'
    nav.classList.remove('fixed')
  }



})


const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.tech');
const nav = document.querySelector('.nav') as HTMLElement
const navHeight = nav.getBoundingClientRect().height;
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const elem = link.firstElementChild?.textContent?.toLocaleLowerCase();

    if (elem) {

      const elemContainer = document.getElementById(`${elem}`)
      const dim = elemContainer?.getBoundingClientRect();

      let top = dim?.top ? dim.top - navHeight : 0;
      window.scrollBy({
        top: top,
        left: 0,
        behavior: 'smooth'
      })

    }
  })

})


//slider functionality
/*
const slides = sliderData.map((item,) => {
  const { colour, msg, title, img } = item;
  if (img) {
    return `<div class="slide"  style="background-color: ${colour};">
          <div class="slide-content">
          <p>${title}</p>
          </div>
        <div class="msg-container">
        <img src=${item.img} />
       </div>
    </div>`
  } else {
    return `<div class="slide"  style="background-color: ${colour};">
          <div class="slide-content">
          <h2>${title}</h2>
          </div>
        <div class="msg-container">
        <p>${msg}</p>
       </div>
    </div>`
  }
}).join('')

slider.innerHTML = slides;


const slideList: NodeListOf<HTMLElement> = document.querySelectorAll('.slide')

let counter: number = 0;

slideList.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
})



leftBtn.addEventListener('click', function () {
  counter = 0;
  carousel(counter);
})

rightBtn.addEventListener('click', function () {
  counter = 1;
  carousel(counter);
})

//determines which carousel is displayed
function carousel(position: number) {
  slideList.forEach((slide, index) => {
    slide.style.transform = `translateX(-${position * 100}%)`;
    slide.style.transition = `1s`;
  })
}

//automatically change slides every 5 seconds
function changeSlide() {

  const interval = setInterval(() => {
    let randomIndex: number = Math.floor(Math.random() * 2);

    carousel(randomIndex)
    slideBtns.forEach((btn, index) => {
      if (index === randomIndex) {
        btn.classList.add('active-btn')
      }
    })
    slideBtns.forEach((btn, index) => {
      if (index !== randomIndex) {
        btn.classList.remove('active-btn')
      }
    })

  }, 5000)

}

changeSlide();


*/


//dot comtainer position

const dotContainer = document.querySelector('.dot-container') as HTMLElement

window.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  dotContainer.style.position = 'absolute'
  dotContainer.style.top = `${y}`;
  dotContainer.style.left = `${x}`;
})

//about section 
const projectContainer = document.querySelector('.projects') as HTMLDivElement


const projects = projectData.map((project) => {

  const { id, url, github, img, description, text } = project;

  return `
   <div class="project">
   <div class="img-container">
   <img class="project-img" src=${img} alt="">
   </div>
   <div class="project-desc">
         <h2>${text}</h2>
    <div class="desc">
      <p>${description}</p>
      </div>
     <div class="links">
          <button class="link"><a href=${url} target="_blank">live site</a></button>
          <button class="link"><a href=${github} target="_blank">source code</a></button>
      </div>
   </div>

      <div class="overlay">
      </div>
   </div>
  `
}).join('')


projectContainer.innerHTML = projects;


//About content
const aboutContent = document.querySelector('.about-content') as HTMLDivElement


const person = aboutMe.map((me) => {
  return `
  <div class="overview">
  <p>${me.overview}</p>
  </div>
   <div class="nationality boi-data">
        <span class="">Nationality:</span>
      <div class="details">
        <p>${me.nationality}</p>
      </div>
  </div>
   <div class="email boi-data">
        <span>Email:</span>
        <div class="details">
        <p>${me.email}</p>
        </div>
  </div>
     <div class="tel boi-data">
        <span>Telephone:</span>
        <div class="details">
        <p>${me.telephone}</p>
        </div>
  </div>
     <div class="location boi-data">
        <span>Location:</span>
        <div class="details">
        <p>${me.location}</p>
        </div>
  </div>

    <div class="status boi-data">
        <span>Civil status:</span>
        <div class="details">
        <p>${me.status}</p>
        </div>
  </div>

  <div class="education boi-data">
    <span>Education:</span>
    <div class="details">
        <p>${me.education}</p>
    </div>
  </div>
  <div class="profession boi-data">
    <span>professional experience:</span>
    <div class="details">
        <p>${me.experience}</p>
      </div>
  </div>
  `
}).join('')

aboutContent.innerHTML = person;

//skills section

const skillContainer = document
  .querySelector('.skill') as HTMLDivElement

const skillData = skills.map((skill) => {
  return `
  <div class="skill-content">
  <div class="skill-title">
  <i class="${skill.icon}"></i>
  <p>${skill.title}</p>
  </div>
  <div class="skill-desc">
  <p>${skill.description}</div>
  </div>
  </div>
  `
}).join('')

skillContainer.innerHTML = skillData;


//footer
const yearElem = document.querySelector('.year') as Element

yearElem.textContent = new Date().getFullYear().toString();