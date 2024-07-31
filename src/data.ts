//import cms from '../public/assets/cms.png'
//import landingPage from '../public/assets/landing-page.png'
//import store from '../public/assets/store.png'
import { About, Project, Slider } from './types/Types'

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
    url: '#home'
  },
  {
    title: 'demo-project',
    url: '#demo-project'
  },
  {
    title: 'about mike',
    url: 'about.html'
  },
]


export const projectData: Project[] = [
  {
    id: 1,
    img: '../public/assets/e-cms.png',
    text: 'e-commerce-Admin dashboard',
    github: 'https://github.com/MickealOppong/cms-backend-api',
    url: 'https://e-cms.netlify.app/landing',
    description: 'This is a full stack app for creating and managing products,users, and other functionalities needed to operate an e-commerce website by the store administrator.Permissions can be assigned to users and these permissions will determine what activity user can perform. This could be the ability to create a product, edit a product, view and delete a product.The Backend is written using Java with Spring-boot framework authenticating users using jwt.The front-end side is developed using javascript and react framework.This app is in work in progress '
  },

  {
    id: 2,
    img: '../public/assets/store.png',
    text: 'e-commerce store',
    github: 'https://github.com/MickealOppong/store',
    url: 'https://react-seahorse.netlify.app',
    description: 'This is a demo front-end app for operating an e-commerce website from customers perspective. This is purely designed from front-end perspective doe demonstration purposes. The app is written using javascript and react framework, with Redux toolkit for state management. This does not include payment functionality'

  },
  {
    id: 3,
    img: '../public/assets/landing-page.png',
    text: 'e-commerce-landing page',
    github: 'https://github.com/MickealOppong/Fashion-Landing-Page',
    url: 'https://seahorse-land-page.netlify.app',
    description: 'This is a demo app for showcasing the Landing page of an e-commerce website. This app is written using vanilla typescript and javascript with no frameworks. The Landing page has basic functionality to capture the basic requirements of a landing page'
  }
]

//#B1D4E0,#e2cfea
export const sliderData: Slider[] = [
  {
    title: 'Hi,</br> i \'m  Mike Oppong </br> Web developer',
    colour: '#FFFFFF',

  },
  {
    title: 'Expert in: </br> Finance and Accounting, </br> Software implementing, </br> Fin-tech',
    colour: '#e2cfea',
  }
]

export const aboutMe: About[] = [{
  overview: "My name is Michael Oppong, I am a graduate of MA Finance from University of Economics in Katowice, i hold a Bachelor of laws degree. I am married and a father who enjoys creating web applications. I love what i do and i do what i love My journey to software development was influence by my previous work experience in a software company where i was involved in design and implementation of functional requirements for Enterprise Resource Applications.I have over five years experience working with developers to design and implement Enterprice Resource Applications (ERP) for large corporations.Through this period i learnt how to write snippets of code.I loved it and had fun doing it.With the vast knowledge and experience over the years, i feel i am in a unique position to deliver solutions to client in a way that incorporate business understanding and not just technology",
  name: 'Michael Oppong',
  email: 'mikel.oppon@gmail.com',
  nationality: 'Ghana',
  location: 'Lodzkie, Leonow, Wolborz gmina',
  status: 'Married',
  education: ['Bachelor of laws,Masters in finance ,MBA accounting & Finance'],
  experience: ['5 years experience as Software implementer working and collaborating with end users and developers to provide accounting solutions', '8 plus years of experience in Financial Auditing ,Budgeting and Corporate reporting and accounting']
}
]
