/* ------------------------------------------------------------- */
/* ------------------- Animation Text-Header ------------------- */
/* ------------------------------------------------------------- */

window.onload = function () {
    console.log("index");
    if (window.location.pathname == '/'){
        var textH = document.getElementById('text-header');
        textH.style.animation = "slideInTextHeader 0.5s forwards";
        console.log("index2");
    }
}
/* ------------------------------------------------------------- */
/* --------------------- Animation Language --------------------- */
/* ------------------------------------------------------------- */

function toggleMenuLanguage() {
    var sublanguage = document.getElementById('sublanguage');    
    if(sublanguage.style.display == "flex") { // if is sublanguage displayed, hide it
        sublanguage.style.animation = "slideOutLanguage 0.5s forwards";
        setTimeout(() => {  sublanguage.style.display = "none"; }, 500);
    } else { // if is sublanguage hidden, display it
        sublanguage.style.display = "flex";
        sublanguage.style.animation = "slideInLanguage 0.5s forwards";
    }
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.languageIMG')) {
        var dropdowns = document.getElementsByClassName("sublanguage");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "flex") {
                sublanguage.style.animation = "slideOutLanguage 0.5s forwards";
                setTimeout(() => {  sublanguage.style.display = "none"; }, 500);
                
            }
        }
    }
}

/* ------------------------------------------------------------- */
/* ------------------ Animation Arrow Footer ------------------ */
/* ------------------------------------------------------------- */

function displayFooter() {
    var footer = document.getElementById('footer');
    if(footer.style.display == "flex") { // if is arrowFooter displayed, hide it
        footer.style.display = "none";
    } else { // if is arrowFooter hidden, display it
        footer.style.display = "flex";
        footer.scrollIntoView({ behavior: 'smooth' });
    }
}