import { aboutMe, navData, projectData, skills, sliderData } from "./data";

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

//set nav to fixed after 60px of scroll

const nav = document.querySelector('nav') as HTMLDivElement

const navHeight = nav.getBoundingClientRect().height;
console.log('nav', nav.getBoundingClientRect());


window.addEventListener('scroll', function () {
  const windowHeight = window.scrollY;

  if (windowHeight > navHeight) {

    nav.style.position = "fixed"
    nav.style.top = '0'
    nav.style.left = '0'
    nav.style.right = '0'
    nav.style.zIndex = '300'
  }

})

//scroll bavahiour
const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.tech');

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const elem = link.firstElementChild?.textContent?.toLocaleLowerCase();
    if (elem) {

      const elemContainer = document.getElementById(`${elem}`)
      const dim = elemContainer?.getBoundingClientRect();



      let counter = 0;

      window.scrollTo({
        top: dim?.top,
        left: 0,
        behavior: 'smooth'
      })

      /*


            const interval = setInterval(() => {
              window.scrollTo({
                top: dim?.top,
                left: 0,
                behavior: 'smooth'
              })
              if (counter > 100) {
                clearInterval(interval);
              }
      
              counter = counter + 5;
            }, 20)
      */

    }
  })


})



//slider functionality

const slides = sliderData.map((item,) => {
  const { colour, title, img } = item;
  return `<div class="slide"  style="background-color: ${colour};">
          <div class="slide-content">
          <h2>${title}</h2>
          </div>
    </div>`
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
     <div class="location boi-data">
        <span>Location:</span>
        <div class="details">
        <p>${me.location}</p>
        </div>
  </div>

    <div class="status boi-data">
        <span>Marital status:</span>
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