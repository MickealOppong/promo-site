//import cms from '../public/assets/cms.png'
//import landingPage from '../public/assets/landing-page.png'
//import store from '../public/assets/store.png'
import { About, Project, Skill, Slider } from './types/Types'

export const techStack = [
  { id: 1, text: 'Java' },
  { id: 2, text: 'Spring' },
  { id: 3, text: 'Javascript' },
  { id: 4, text: 'HTML & CSS' },
  { id: 5, text: 'Typescript' },
  { id: 5, text: 'React' },
]

export const navData = [
  {
    title: 'home',
    url: ''
  },
  {
    title: 'demo',
    url: ''
  },
  {
    title: 'about',
    url: ''
  },
  {
    title: 'Skills',
    url: ''
  },
]


export const skills: Skill[] = [

  {

    title: 'web development',
    icon: 'las la-code',
    description: 'Proficient in backend technologies such as Java and Spring framework for building REST-API of a web application. Proficient with Javascript, HTML & CSS, Typescript and Accompanying React framework for building front-end applications. As demonstrated with the demo projects, i can contribute to any team in the development of web application and its workflows.'
  },


  {

    title: 'professional experience',
    icon: 'las la-briefcase',
    description: 'Good communication skills, building of interpersonal relationship and team first approach are some of the skills i have gained over the years. I have experience in team and personality management from having been a team leader in the implementation of a payroll software, excellent professional behaviour and a good work attitude.'
  },

  {
    title: 'Finance knowledge',
    icon: 'las la-chart-line',
    description: 'Coming from a Finance and Accounting background, i have the skills to understand business requirement (problems) and also the ability to communicate same to non-finance or accounting professionals. I will be able to add value to the team and client beyond coding in the areas of business process management and re-engineering.'
  }
]

export const projectData: Project[] = [
  {
    id: 1,
    img: './assets/e-cms.png',
    text: 'e-commerce-Admin dashboard',
    github: 'https://github.com/MickealOppong/cms-backend-api',
    url: 'https://e-cms.netlify.app/landing',
    description: 'This is a full stack app for creating and managing products,users, and other functionalities needed to operate an e-commerce website by the store administrator.Permissions can be assigned to users and these permissions will determine what activity user can perform. This could be the ability to create a product, edit a product, view and delete a product.The Backend is written using Java with Spring-boot framework authenticating users using jwt.The front-end side is developed using javascript and react framework.This app is in work in progress '
  },

  {
    id: 2,
    img: './assets/landing-page.png',
    text: 'e-commerce store',
    github: 'https://github.com/MickealOppong/store',
    url: 'https://react-seahorse.netlify.app',
    description: 'This is a demo front-end app for operating an e-commerce website from customers perspective. This is purely designed from front-end perspective doe demonstration purposes. The app is written using javascript and react framework, with Redux toolkit for state management. This does not include payment functionality'

  },
  {
    id: 3,
    img: './assets/store.png',
    text: 'e-commerce-landing page',
    github: 'https://github.com/MickealOppong/Fashion-Landing-Page',
    url: 'https://seahorse-land-page.netlify.app',
    description: 'This is a demo app for showcasing the Landing page of an e-commerce website. This app is written using vanilla typescript and javascript with no frameworks. The Landing page has basic functionality to capture the basic requirements of a landing page'
  }
]

//#B1D4E0,#e2cfea
export const sliderData: Slider[] = [
  {
    title: 'Hi, my name is </br> <span> Mike Oppong <span> </br> Web developer',
    msg: 'lets get in touch and create solutions </br> that  solve business problems.',
    //img: '../assets/spider-web.png',
    colour: '#FFFFFF',

  },
  {
    title: 'Expert in: </br> Finance and Accounting, </br> Software implementing, </br> And lover of Fin-tech',
    msg: '739-593-752 </br> mike.oppon@gmail.com',
    colour: '#e2cfea',
    //  img: '../assets/web.svg',
  }
]

export const aboutMe: About[] = [{
  overview: "My name is Michael Oppong, a graduate of MA Finance from University of Economics in Katowice, i hold a Bachelor of laws degree. I am married and a father who enjoys creating web applications. I love what i do and i do what i love My journey to software development was influence by my previous work experience in a software company where i was involved in design and implementation of functional requirements for Enterprise Resource Applications. I have over five years experience working with developers to design and implement Enterprice Resource Applications (ERP) for large corporations. Through out this period i learnt how to write snippets of code.I loved it and had fun doing it.With the vast knowledge and experience over the years, i feel i am in a unique position to deliver solutions to client in a way that incorporate business understanding and not just technology",
  name: 'Michael Oppong',
  email: 'mikel.oppon@gmail.com',
  telephone: '739-593-752',
  nationality: 'Ghana',
  location: 'Lodzkie, Leonow, Wolborz gmina',
  status: 'Married',
  education: ['Bachelor of laws,Masters in finance ,MBA accounting & Finance'],
  experience: ['5 years experience as Software implementer working and collaborating with end users and developers to provide accounting solutions', ' 8 plus years of experience in Financial Auditing , Budgeting and Corporate reporting and accounting']
}
]
