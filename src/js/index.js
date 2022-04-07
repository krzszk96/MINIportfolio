var btnprojects = document.getElementById('projectsbtn');
var btnskills = document.getElementById('skillsbtn');

var projgallery = document.querySelector('.proj-gallery');
var skills = document.querySelector('.skills-wrap');

function replaceprojects() {
  btnskills.classList.remove("active");
  btnprojects.classList.add("active");

  projgallery.style.display = "block";
  skills.style.display = "none";
}
function replaceskills() {
  btnprojects.classList.remove("active");
  btnskills.classList.add("active");

  projgallery.style.display = "none";
  skills.style.display = "block";
}


const setTheme = theme => document.documentElement.className = theme;