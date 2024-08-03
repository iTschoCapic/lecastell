var Modal = false;
var SubLanguage = false;

/* ------------------------------------------------------------- */
/* ------------------- Animation Text-Header ------------------- */
/* ------------------------------------------------------------- */

// window.onload = function () {
//     console.log('index');
//     if (window.location.pathname == '/' || window.location.pathname == '/index.html'){
//         var textH = document.getElementById('text-header');
//         textH.style.animation = 'slideInTextHeader 0.5s forwards';
//         console.log('index2');
//     }
// }

document.addEventListener('DOMContentLoaded', (event) => {
    if (location.pathname != '/' && location.pathname != '/index.html'){
        return;
    }
    const header = document.querySelector('.header');
    const images = [
        "./resources/restaurant/interior_image.jpg",
        "./resources/restaurant/interior_exterior.jpg"
    ];
    let currentIndex = 0;
    
    var textH = document.getElementById('text-header');
    textH.style.animation = 'slideInTextHeader 0.5s forwards';

    setInterval(() => {
        header.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            header.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.3)), url(${images[currentIndex]})`;
            header.style.opacity = 1;
        }, 500); // Match this time with the CSS transition duration
    }, 10000);
});


document.addEventListener('DOMContentLoaded', function () {
    const menuLink = document.getElementById('menu_link');
    menuLink.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();  // Prevent the link from being followed
            this.parentElement.classList.toggle('focus-within');  // Toggle the display of the submenu
        }
    });
});

/* ------------------------------------------------------------- */
/* --------------------- Animation Language --------------------- */
/* ------------------------------------------------------------- */

function toggleMenuLanguage() {
    var sublanguage = document.getElementById('sublanguage');
    if(sublanguage.style.display == 'flex') { // if is sublanguage displayed, hide it
        SubLanguage = false;
        sublanguage.style.animation = 'slideOutLanguage 0.5s forwards';
        setTimeout(() => {  sublanguage.style.display = 'none'; }, 500);
    } else { // if is sublanguage hidden, display it
        SubLanguage = true;
        sublanguage.style.display = 'flex';
        sublanguage.style.animation = 'slideInLanguage 0.5s forwards';
    }
}

/* ------------------------------------------------------------- */
/* ----------------- Animation Fullscreen Card ----------------- */
/* ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    if (!verifierPathname(window.location.pathname)){
        return;
    }
    var card = document.getElementById('card');
    var modal = document.getElementById('cardFull');
    card.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
            if(event.target.matches('.card')){
                modal.style.display = 'block';
                Modal = true;
            } else if (event.target.matches('.close') || !event.target.matches('.card')) {
                modal.style.display = 'none';
            }
        }
    });
});

/* ------------------------------------------------------------- */
/* ----------------------- General Rules ----------------------- */
/* ------------------------------------------------------------- */

window.onclick = function(event){
    if (SubLanguage && !event.target.matches('.languageIMG')) {
        SubLanguage = false;
        toggleMenuLanguage();
    } else if (window.innerWidth <= 768){
        if (Modal && (event.target.matches('.close') || !event.target.matches('.card'))){
            Modal = false;
            document.getElementById('cardFull').style.display = 'none';
        }
    }
}

function verifierPathname(pathname) { // Only works on server not on local repo
    const motif = /^\/(fr|ca|de|en|es)(\/.*)?$/;
    return motif.test(pathname);
}