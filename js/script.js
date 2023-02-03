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

    for (let i = 0; i < data.length; i++) {

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
        `)
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
                <img src=".${projectID.imageSrc}" class="project-img" alt="project image">
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
                        <button type="button" class="btn"><a href="${projectID.liveLink}"></a>See live <img src="./images/iconExport.png" class="btn-icon" alt="button icom"></button>
                        <button type="button" class="btn"><a href="${projectID.sourceLink}"></a>See Source <img src="./images/iconGitHub.png" class="btn-icon" alt=" btn-icon"></button>
                    </div>
                </div>
            </div>
    
    
        </div>
    
    </div>
        `)

        const closePopup = document.getElementById('closePopup');

        function closePopUp() {
            popUp.classList.remove('popup-show');
            popUp.innerHTML = '';
        }


        closePopup.addEventListener('click', closePopUp);

    }

    btnPop.forEach(btn => btn.addEventListener('click', (e) => { showPopUP(e.target.dataset.id) }));
}











// ─── Event Listeners ──────────────────────────────────────────────────────────
window.onload = renderWorkSection;

mobileMenu.addEventListener('click', showMenu);

navBtn.forEach((link) => {
    link.addEventListener('click', showMenu);
});