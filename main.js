const navOpen = document.getElementById('navbar-hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navClose = document.getElementById('close-menu');
const navPortfolio = document.getElementById('mobile__nav_portfolio');
const navAbout = document.getElementById('mobile__nav_about');
const navContact = document.getElementById('mobile__nav_contact');
const cardContainer = document.getElementById('card-content');
const cardContainer1 = document.getElementById('card-content1');
const portFolio = document.getElementById('projects-container');
const buttons = portFolio.getElementsByTagName('button');
const popUp = document.getElementById('popupp');
const generalDocument = document.getElementById('html');

const projectInformation = [
  {
    id: 0,
    name: '',
    description: '',
    feature: '',
    image: './img/SnapshootPortfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: '',
    sourceLink: '',
  },
  {
    id: 1,
    name: 'Data Dashboard',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'This is a very basic suuvey that can be modified at your convinience',
    image: './img/SnapshootPortfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 2,
    name: 'Technical Documentation',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: './img/SnapshootPortfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 3,
    name: 'Technical Documentation',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'A page that uses all the inpt types, and filters for them ina good shape and send results.',
    image: './img/SnapshootPortfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 4,
    name: 'Data Dashboard',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'This is a very basic suuvey that can be modified at your convinience',
    image: './img/SnapshootPortfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
  {
    id: 5,
    name: 'Technical Documentation',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    feature: 'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: './img/SnapshootPortfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveVersionLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
    sourceLink: 'https://github.com/jellywiz/Microverse-Profile-First-Project-Mobile',
  },
];

function LoadProjects1() {
  let counter;

  for (counter = 0; counter < 3; counter += 1) {
    const tech = 0;
    cardContainer.innerHTML += `<div class="work">
                                  <div  class="project${[counter + 1]}">
                                    <div class="project1-card">
                                      <h3 class="project1-title">${projectInformation[counter].name}</h3>
                                      <p class="project1-text">${projectInformation[counter].description}</p>
                                      <ul class="project-skills">
                                        <li><p class="project-card-item">${projectInformation[counter].technologies[tech]}</p>
                                        </li>
                                        <li><p class="project-card-item">${projectInformation[counter].technologies[tech + 1]}</p>
                                        </li>
                                        <li><p class="project-card-item">${projectInformation[counter].technologies[tech + 2]}</p>
                                        </li>
                                      </ul>
                                      <button data-target="${projectInformation[counter].id}" class="Project-btn">See Project</button>
                                    </div>
                                  </div>`;
  }

  function hideModal() {
    popUp.innerHTML = '';
    popUp.classList.add('hidden');
    generalDocument.classList.remove('scroll-null');
  }
  function showModal(button) {
    const pId = button.target.getAttribute('data-target');
    const project = projectInformation.filter(
      (p) => parseInt(p.id, 10) === parseInt(pId, 10),
    );

    popUp.innerHTML = `<div class="popup-container">
                    <div class="header-popup">
                      <h2>${project[0].name}</h2>
                      <img id='close-menu-down' class="close-tag" src="./img/icn-close.svg" alt="close button" />
                    </div>
                    
                    <div class="popup-items">
                        <ul class="project-skills-popup">
                            <li class="li-item-popup"><p class="project-card-item-popup">${project[0].technologies[0]}</p></li>
                            <li class="li-item-popup"><p class="project-card-item-popup">${project[0].technologies[1]}</p></li>
                            <li class="li-item-popup"><p class="project-card-item-popup">${project[0].technologies[2]}</p></li>
                        </ul>
                    </div>
                  
                    <div class="popup-content">

                          <div class="img-p-ppopup">
                              <img class="popup-image" src="${project[0].image}" alt="">
                          </div>

                          <div class="popup-paragraph">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
                          </div>

                      </div>
                    
                      <div class="popup-button">
                      <a href="${project[0].liveVersionLink}" target="_blank"><button class="popup-btn1"> <span>See Live</span> <img class="pop-icon" src="./img/Icon-Export.svg" alt=""> </button></a>
                      <a href="${project[0].sourceLink}" target="_blank"><button class="popup-btn1"> <span>See Source</span> <img class="pop-icon" src="./img/Frame-github.svg" alt=""> </button></a>
                      </div>
                    </div>
                  </div>`;

    popUp.classList.remove('hidden');
    const popUpClose = document.getElementById('close-menu-down');
    popUpClose.addEventListener('click', hideModal);
    generalDocument.classList.add('scroll');
  }
  let i;
  for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', showModal.bind(buttons[i]));
  }
}

function LoadProjects2() {
  let counter;
  for (counter = 3; counter < projectInformation.length; counter += 1) {
    const tech = 0;
    cardContainer1.innerHTML += `<div class="work">
                                  <div class="project${[counter + 1]}">
                                    <div class="project1-card">
                                      <h3 class="project1-title">${projectInformation[counter].name}</h3>
                                      <p class="project1-text">${projectInformation[counter].description}</p>
                                      <ul class="project-skills">
                                        <li><p class="project-card-item">${projectInformation[counter].technologies[tech]}</p>
                                        </li>
                                        <li><p class="project-card-item">${projectInformation[counter].technologies[tech + 1]}</p>
                                        </li>
                                        <li><p class="project-card-item">${projectInformation[counter].technologies[tech + 2]}</p>
                                        </li>
                                      </ul>
                                      <button data-target="${projectInformation[counter].id}" class="Project-btn">See Project</button>
                                    </div>
                                  </div>`;
  }
  function hideModal() {
    popUp.innerHTML = '';
    popUp.classList.add('hidden');
    generalDocument.classList.remove('scroll');
  }
  function showModal(button) {
    const pId = button.target.getAttribute('data-target');
    const project = projectInformation.filter(
      (p) => parseInt(p.id, 10) === parseInt(pId, 10),
    );

    popUp.innerHTML = `<div class="popup-container">
                    <div class="header-popup">
                      <h3>Multi Post Stories</h3>
                      <img id='close-menu-down' class="close-tag" src="./img/icn-close.svg" alt="close button" />
                    </div>
                    
                    <div class="popup-items">
                        <ul class="project-skills-popup">
                            <li class="li-item-popup"><p class="project-card-item-popup">${project[0].technologies[0]}</p></li>
                            <li class="li-item-popup"><p class="project-card-item-popup">${project[0].technologies[1]}</p></li>
                            <li class="li-item-popup"><p class="project-card-item-popup">${project[0].technologies[2]}</p></li>
                        </ul>
                    </div>
                  
                    <div class="popup-content">

                          <div class="img-p-ppopup">
                              <img class="popup-image" src="${project[0].image}" alt="">
                          </div>

                          <div class="popup-paragraph">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
                              <div class="popup-button">
                              <a href="${project[0].liveVersionLink}" target="_blank"><button class="popup-btn1"> <span>See Live</span> <img class="pop-icon" src="./img/Icon-Export.svg" alt=""> </button></a>
                              <a href="${project[0].sourceLink}" target="_blank"><button class="popup-btn1"> <span>See Source</span> <img class="pop-icon" src="./img/Frame-github.svg" alt=""> </button></a>
                              </div>
                          </div>

                      </div>
                    

                  </div>`;

    popUp.classList.remove('hidden');
    const popUpClose = document.getElementById('close-menu-down');
    popUpClose.addEventListener('click', hideModal);
    generalDocument.classList.add('scroll');
  }
  let i;
  for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', showModal.bind(buttons[i]));
  }
}
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

document.addEventListener('DOMContentLoaded', LoadProjects1, false);
document.addEventListener('DOMContentLoaded', LoadProjects2, false);

const form = document.getElementById('contactMe');
const erroMessageContainer = document.getElementById('error_message');
const message = 'Email address should be in lowercase letters only.';
const inputEmail = document.getElementById('email');

form.addEventListener('submit', (event) => {
  const regix = /[A-Z]/;

  if (regix.test(inputEmail.value)) {
    erroMessageContainer.innerHTML = message;
    erroMessageContainer.classList.remove('hidden');
    event.preventDefault();
  } else if (!erroMessageContainer.classList.classname === 'hidden') {
    erroMessageContainer.classList.add('hidden');
  }
});

const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const comment = document.querySelector('#text');

function saveData() {
  const data = {
    fieldName: fullname.value,
    fieldEmail: email.value,
    fieldComment: comment.value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

let formObject = JSON.parse(localStorage.getItem('data'));
if (!formObject) {
  formObject = {
    fullname: '',
    email: '',
    comment: '',
  };
  saveData();
}

fullname.value = formObject.fullname;
fullname.addEventListener('change', (e) => {
  formObject.fullname = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

email.value = formObject.email;
email.addEventListener('change', (e) => {
  formObject.email = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

comment.value = formObject.comment;
comment.addEventListener('change', (e) => {
  formObject.comment = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});
