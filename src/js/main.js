var _this = this;
var time = document.getElementById('date');
var nav = document.querySelector('nav');
var welcome = document.getElementById('welcome-text');
var projects = document.getElementById('projects-text');
var experience = document.getElementById('experience-text');
var education = document.getElementById('education-text');
var contact = document.getElementById('contact-text');
var navInfo = document.getElementById('nav-info');
var seeMore = document.getElementById('see-more');
var projectsIcon = document.getElementById('projects-icon');
var experienceIcon = document.getElementById('experience-icon');
var educationIcon = document.getElementById('education-icon');
var contactIcon = document.getElementById('contact-icon');
updateTime();
setInterval(function () { updateTime(); }, 1000);
function updateTime() {
    var date = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric" });
    time.innerText = date;
}
;
window.addEventListener("scroll", function () {
    var scroll = _this.scrollY;
    if (scroll == 0) {
        navInfo.style.opacity = "1";
        seeMore.style.opacity = "1";
    }
    if (scroll > 0) {
        navInfo.style.opacity = "0";
        seeMore.style.opacity = "0";
    }
    if (scroll > 612 && scroll < 1500) {
        _this.document.body.style.backgroundColor = "#21103e";
        welcome.style.opacity = "15%";
        projects.style.opacity = "100%";
        experience.style.opacity = "15%";
        education.style.opacity = "15%";
        contact.style.opacity = "15%";
        projectsIcon.style.transform = "scale(1.25)";
        experienceIcon.style.transform = "scale(1)";
        educationIcon.style.transform = "scale(1)";
        contactIcon.style.transform = "scale(1)";
    }
    else if (scroll > 1500 && scroll < 3064) {
        _this.document.body.style.backgroundColor = "#193225";
        welcome.style.opacity = "15%";
        projects.style.opacity = "15%";
        experience.style.opacity = "100%";
        education.style.opacity = "15%";
        contact.style.opacity = "15%";
        projectsIcon.style.transform = "scale(1)";
        experienceIcon.style.transform = "scale(1.25)";
        educationIcon.style.transform = "scale(1)";
        contactIcon.style.transform = "scale(1)";
    }
    else if (scroll > 3064 && scroll < 4258) {
        _this.document.body.style.backgroundColor = "#161c30";
        welcome.style.opacity = "15%";
        projects.style.opacity = "15%";
        experience.style.opacity = "15%";
        education.style.opacity = "100%";
        contact.style.opacity = "15%";
        projectsIcon.style.transform = "scale(1)";
        experienceIcon.style.transform = "scale(1)";
        educationIcon.style.transform = "scale(1.25)";
        contactIcon.style.transform = "scale(1)";
    }
    else if (scroll > 4258) {
        _this.document.body.style.backgroundColor = "#6c1d2b";
        welcome.style.opacity = "15%";
        projects.style.opacity = "15%";
        experience.style.opacity = "15%";
        education.style.opacity = "15%";
        contact.style.opacity = "100%";
        projectsIcon.style.transform = "scale(1)";
        experienceIcon.style.transform = "scale(1)";
        educationIcon.style.transform = "scale(1)";
        contactIcon.style.transform = "scale(1.25)";
    }
    else {
        _this.document.body.style.backgroundColor = "#101010";
        welcome.style.opacity = "100%";
        projects.style.opacity = "15%";
        experience.style.opacity = "15%";
        education.style.opacity = "15%";
        contact.style.opacity = "15%";
        projectsIcon.style.transform = "scale(1)";
        experienceIcon.style.transform = "scale(1)";
        educationIcon.style.transform = "scale(1)";
        contactIcon.style.transform = "scale(1)";
    }
});
window.addEventListener("load", function () {
    welcome.style.opacity = "100%";
    setTimeout(function () {
        _this.document.body.style.opacity = "1";
    }, 1000);
    if (window.innerWidth > 900) {
        setTimeout(function () {
            nav.style.transform = "translateX(0px)";
        }, 2000);
    }
    else {
        nav.style.transform = "translateX(0px)";
    }
    setTimeout(function () {
        navInfo.style.opacity = "1";
        seeMore.style.opacity = "1";
    }, 3500);
});
