const navOpen = document.getElementById('navbar-hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navClose = document.getElementById('close-menu');
const navPortfolio = document.getElementById('mobile__nav_portfolio');
const navAbout = document.getElementById('mobile__nav_about');
const navContact = document.getElementById('mobile__nav_contact');
const cardContainer = document.getElementById('card-content');
const portFolio = document.getElementById('projects-container');
const buttons = portFolio.getElementsByTagName('button');

const projectInformation = [
  {
    id: 0,
    name: '',
    description: '',
    feature: '',
    image: '',
    technologies: '',
    liveVersionLink: '',
    sourceLink: '',
  },
  {
    id: 1,
    name: 'Data Dashboard',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'This is a very basic suuvey that can be modified at your convinience',
    image: './img/ImgPlaceholder0.png',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 2,
    name: 'Technical Documentation',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: './img/ImgPlaceholder2.png',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 3,
    name: 'Technical Documentation',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'A page that uses all the inpt types, and filters for them ina good shape and send results.',
    image: './img/ImgPlaceholder1.png',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 4,
    name: 'Data Dashboard',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'This is a very basic suuvey that can be modified at your convinience',
    image: './img/ImgPlaceholder0.png',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 5,
    name: 'Technical Documentation',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: './img/ImgPlaceholder2.png',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
];

function showNavbar() {
  mobileNav.classList.remove('hidden');
  navOpen.classList.add('hidden');
}
function hideNavbar() {
  mobileNav.classList.add('hidden');
  navOpen.classList.remove('hidden');
}
navOpen.addEventListener('click', showNavbar);
navClose.addEventListener('click', hideNavbar);
navPortfolio.addEventListener('click', hideNavbar);
navAbout.addEventListener('click', hideNavbar);
navContact.addEventListener('click', hideNavbar);