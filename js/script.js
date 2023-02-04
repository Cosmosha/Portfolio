// ─── Works Data ──────────────────────────────────────────────────────────────

// Projects Database
const data = [{
  id: '1',
  imageSrc: './images/Portfolio.png',
  title: 'Multi-Post Stories',
  outline: ['FACEBOOK', 'Full Stack Dev', 'JavaScript'],
  tech: ['html', 'css', 'javascript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod quis nostrud exercitation ullamco laboris nisi.',
  liveLink: 'https://cosmosha.github.io',
  sourceLink: '#',
},
{
  id: '2',
  imageSrc: './images/Portfolio4.png',
  title: 'Facebook 360',
  outline: ['FACEBOOK', 'Full Stack Dev', 'JavaScript'],
  tech: ['html', 'css', 'javascript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveLink: 'https://cosmosha.github.io',
  sourceLink: '#',
},
{
  id: '3',
  imageSrc: './images/Portfolio2.png',
  title: 'Tonic',
  outline: ['FACEBOOK', 'Full Stack Dev', '2016'],
  tech: ['html', 'css', 'javascript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveLink: 'https://cosmosha.github.io',
  sourceLink: '#',
},
{
  id: '4',
  imageSrc: './images/Portfolio3.png',
  title: 'Uber Navigation',
  outline: ['Uber', 'Lead Developer', '2018'],
  tech: ['html', 'css', 'javascript'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  liveLink: 'https://cosmosha.github.io',
  sourceLink: '#',
},
];

// ─── Selectors ───────────────────────────────────────────────────────────────
const mobileMenu = document.querySelector('.mobile-menu');
const navlinks = document.querySelector('.nav-links');
const navBtn = document.querySelectorAll('.nav-links ul li a');

const workSection = document.querySelector('.works');

const popUp = document.querySelector('.popup');

// ─── Function ────────────────────────────────────────────────────────────────

// ─── Mobile Menu ─────────────────────────────────────────────────────────────
function showMenu() {
  navlinks.classList.toggle('show-menu');
  if (mobileMenu.src.match('./images/IconMenu.png')) {
    mobileMenu.src = './images/IconCancel.png';
  } else {
    mobileMenu.src = './images/IconMenu.png';
  }
}

// ─── Render Works Section ────────────────────────────────────────────────────
function renderWorkSection() {
  for (let i = 0; i < data.length; i += 1) {
    workSection.insertAdjacentHTML('beforeend', `
        <div class="grid-container">
        <div class="mobile">
            <!-- ─── Works Project 4 ─────────────────────────── -->
            <div class="works-container ">
                <div class="banner">
                     <img src="${data[i].imageSrc}" class="project-img" alt="project image">
                </div>
                <div class="project-content">
                    <div class="project-title">
                        <h2>${data[i].title}"</h2>
                    </div>
                    <div class="outline">
                        <ul>
                            <li class="banner-list">${data[i].outline[0]}"</li>
                            <span class="dot"></span>
                            <li class="banner-list dev">${data[i].outline[1]}"</li>
                            <span class="dot"></span>
                            <li class="banner-list">${data[i].outline[2]}"</li>
                        </ul>
                    </div>
                    <p>${data[i].description}"</p>
                    <div class="tags">
                        <ul>
                            <li class="skill">${data[i].tech[0]}"</li>
                            <li class="skill">${data[i].tech[1]}"</li>
                            <li class="skill">${data[i].tech[2]}"</li>
                        </ul>
                    </div>
                    <div class="action">
                        <button type="button" class="popBtn btn" data-id="${data[i].id}">See Project</button>
                    </div>
                </div>
            </div>
        </div>
      
      
        <div class="desktop">
            <!-- ─── Desktop Works ───────────────────── -->
      
            <div class="works-container ">
                <div class="project-content">
                    <div class="project-title">
                    <h2>${data[i].title}"</h2>
                    </div>
                    <div class="outline">
                        <ul>
                        <li class="banner-list">${data[i].outline[0]}"</li>
                        <span class="dot"></span>
                        <li class="banner-list dev">${data[i].outline[1]}"</li>
                        <span class="dot"></span>
                        <li class="banner-list">${data[i].outline[2]}"</li>
                        </ul>
                    </div>
                    <p>A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p>
                    <div class="tags">
                        <ul>
                        <li class="skill">${data[i].tech[0]}"</li>
                        <li class="skill">${data[i].tech[1]}"</li>
                        <li class="skill">${data[i].tech[2]}"</li>
                        </ul>
                    </div>
                    <div class="action">
                        <button type="button" data-id= "${data[i].id}"  class="popBtn btn">See Project</button>
                    </div>
                </div>
                <div class="banner">
                <img src="${data[i].imageSrc}" class="project-img" alt="project image">
                </div>
      
            </div>
      
        </div>
      </div>
        `);
  }

  // ─── Display Popup ───────────────────────────────────────────────────────────

  const btnPop = document.querySelectorAll('.popBtn');

  function showPopUP(currentBtn) {
    const dataId = +currentBtn;
    const projectID = data[dataId - 1];
    popUp.classList.add('popup-show');
    popUp.insertAdjacentHTML('beforeend', `
        <div class="works-container">
        <div class="popup-header">
            <div class="project-title">
                <h2>${projectID.title}</h2>
            </div>
            <span class="closePopup" id="closePopup">&times;</span>
        </div>
        <div class="outline">
            <ul>
                <li class="banner-list">${projectID.outline[0]}</li>
                <span class="dot"> </span>
                <li class="banner-list dev">${projectID.outline[1]}</li>
                <span class="dot"></span>
                <li class="banner-list">${projectID.outline[2]}</li>
            </ul>
        </div>
        <div class="popup-body">
            <div class="banner">
                <img src="${projectID.imageSrc}" class="project-img" alt="project image">
            </div>
        </div>
    
        <div class="projectDetails">
            <p>${projectID.description}</p>
    
            <div class="projectAddons">
                <div class="tags">
                    <ul>
                        <li class="skill">${projectID.tech[0]}</li>
                        <li class="skill">${projectID.tech[1]}</li>
                        <li class="skill">${projectID.tech[2]}</li>
                    </ul>
                </div>
    
                <hr>
                <div class="action ">
                    <div class="btnPosition">
                        <button type="button" class="btn"><a href="${projectID.liveLink}">See live <img src="./images/iconExport.png"></a></button>
                        <button type="button" class="btn"><a href="${projectID.sourceLink}">See Source <img src="./images/iconGitHub.png"></a></button>
                    </div>
                </div>
            </div>
    
    
        </div>
    
    </div>
        `);

    const closePopup = document.getElementById('closePopup');

    function closePopUp() {
      popUp.classList.remove('popup-show');
      popUp.innerHTML = '';
    }

    closePopup.addEventListener('click', closePopUp);
  }

  btnPop.forEach((btn) => btn.addEventListener('click', (e) => { showPopUP(e.target.dataset.id); }));
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
window.onload = renderWorkSection;

mobileMenu.addEventListener('click', showMenu);

navBtn.forEach((link) => {
  link.addEventListener('click', showMenu);
});