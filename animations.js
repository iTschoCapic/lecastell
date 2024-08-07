var Modal = false;
var SubMenu = false;
var SubLanguage = false;
var Photos = 0;

/* ------------------------------------------------------------- */
/* ------------------- Animation Text-Header ------------------- */
/* ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.innerWidth >= 768){
        // if (location.pathname != '/' && location.pathname != '/index.html'){
        //     return;
        // }

        var textH = document.getElementById('text-header');
        textH.style.animation = 'slideInTextHeader 0.5s forwards';

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        const elements = document.querySelectorAll('.cartes div');
        elements.forEach(element => {
            observer.observe(element);
        });

        const header = document.querySelector('.header');
        const images = [
            "./resources/restaurant/interior_image.jpg",
            "./resources/restaurant/interior_exterior.jpg"
        ];
        let currentIndex = 0;
        setInterval(() => {
            header.style.opacity = 0;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                header.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.3)), url(${images[currentIndex]})`;
                header.style.opacity = 1;
            }, 500); // Match this time with the CSS transition duration
        }, 10000);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const menuLink = document.getElementById('menu_link');
    const subMenuLink = document.getElementById('submenu');
    menuLink.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();  // Prevent the link from being followed
            if (subMenuLink.style.display == 'block'){
                subMenuLink.style.display = 'none';
                SubMenu = false;
            } else {
                subMenuLink.style.display = 'block';
                SubMenu = true;
            }
            

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
    if (location.pathname == '/photos.html'){
        var inn = document.getElementById('in');
        var ir = document.getElementById('ir');
        var ib = document.getElementById('ib');
        var modal = document.getElementById('imgFull');
        var modalIMG = document.getElementById('imgFullIMG');
        inn.addEventListener('click', function (event) {
            if (window.innerWidth <= 768) {
                if(verifierChildren(event.target, inn)){
                    modalIMG.src = event.target.src;
                    modal.style.display = 'block';
                    Photos = 1;
                } else if (event.target.matches('.close') || !verifierChildren(event.target, inn)) {
                    modal.style.display = 'none';
                }
            }
        });
        ir.addEventListener('click', function (event) {
            if (window.innerWidth <= 768) {
                if(verifierChildren(event.target, ir)){
                    modalIMG.src = event.target.src;
                    modal.style.display = 'block';
                    Photos = 2;
                }
            }
        });
        ib.addEventListener('click', function (event) {
            if (window.innerWidth <= 768) {
                if(verifierChildren(event.target, ib)){
                    modalIMG.src = event.target.src;
                    modal.style.display = 'block';
                    Photos = 3;
                }
            }
        });
    }

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
        } else if (SubMenu && !event.target.matches('#menu_link')) {
            SubMenu = false;
            document.getElementById('submenu').style.display = 'none';
        } else if (Photos != 0){
            var source;
            if (Photos == 1) {
                source = document.getElementById('in');
            } else if (Photos == 2) {
                source = document.getElementById('ir');
            } else if (Photos == 3) {
                source = document.getElementById('ib');
            }
            if (event.target.matches('.close') || !verifierChildren(event.target, source)){
                Photos = 0;
                document.getElementById('imgFull').style.display = 'none';
            }
        }
    }
}

function verifierPathname(pathname) { // Only works on server not on local repo
    const motif = /^\/(fr|ca|de|en|es)(\/.*)?$/;
    return motif.test(pathname);
}

function verifierChildren(target, source){
    var is = false;
    var children = Array.from(source.children);
    children.some(child => {
        if (target == child){
            is = true;
            return true;
        }
    });
    return is;
}