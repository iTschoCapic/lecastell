function toggleMenuLanguage() {
    var sublanguage = document.getElementById('sublanguage');    
    if(sublanguage.style.display == "flex") { // if is sublanguage displayed, hide it
        sublanguage.style.animation = "slideOut 0.5s forwards"
        setTimeout(() => {  sublanguage.style.display = "none"; }, 500);
    } else { // if is sublanguage hidden, display it
        sublanguage.style.display = "flex";
        sublanguage.style.animation = "slideIn 0.5s forwards"
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
                sublanguage.style.animation = "slideOut 0.5s forwards"
                setTimeout(() => {  sublanguage.style.display = "none"; }, 500);
                
            }
        }
    }
} 