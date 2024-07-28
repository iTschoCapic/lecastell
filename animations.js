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
/* ------------------------------------------------------------- */
/* --------------------- Animation Language --------------------- */
/* ------------------------------------------------------------- */

function toggleMenuLanguage() {
    var sublanguage = document.getElementById('sublanguage');
    if(sublanguage.style.display == 'flex') { // if is sublanguage displayed, hide it
        sublanguage.style.animation = 'slideOutLanguage 0.5s forwards';
        setTimeout(() => {  sublanguage.style.display = 'none'; }, 500);
    } else { // if is sublanguage hidden, display it
        sublanguage.style.display = 'flex';
        sublanguage.style.animation = 'slideInLanguage 0.5s forwards';
    }
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    var dropdowns = document.getElementById('sublanguage');
    if (!event.target.matches('.languageIMG') && dropdowns.style.display != 'none') {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == 'flex') {
                sublanguage.style.animation = 'slideOutLanguage 0.5s forwards';
                setTimeout(() => {  sublanguage.style.display = 'none'; }, 500);
                
            }
        }
    }
}

/* ------------------------------------------------------------- */
/* ----------------- Animation Fullscreen Card ----------------- */
/* ------------------------------------------------------------- */



// Get the image and insert it inside the modal - use its "alt" text as a caption

window.onclick = function(event){
    if (window.innerWidth <= 768){
        var modal = document.getElementById('cardFull');
        if(event.target.matches('.card')){
            modal.style.display = 'block';
        } else if (event.target.matches('.close') || !event.target.matches('.card')) {
            modal.style.display = 'none';
        }
    }
}

