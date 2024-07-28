var Modal = false;
var SubLanguage = false;

/* ------------------------------------------------------------- */
/* ------------------- Animation Text-Header ------------------- */
/* ------------------------------------------------------------- */

window.onload = function () {
    console.log('index');
    if (window.location.pathname == '/'){
        var textH = document.getElementById('text-header');
        textH.style.animation = 'slideInTextHeader 0.5s forwards';
        console.log('index2');
    }
}


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
/* ----------------- General Rule for closing ----------------- */
/* ------------------------------------------------------------- */

window.onclick = function(event){
    if (window.innerWidth <= 768){
        if (Modal && (event.target.matches('.close') || !event.target.matches('.card'))){
            Modal = false;
            document.getElementById('cardFull').style.display = 'none';
        } else if (SubLanguage && !event.target.matches('.languageIMG')) {
            SubLanguage = false;
            toggleMenuLanguage();
        }
    }
}