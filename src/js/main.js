"use strict";
// Variabler
var studiesEl = document.getElementById("studies");
var workEl = document.getElementById("work");
var websitesEl = document.getElementById("websites");
// Funktioner
function getCourses() {
    // Återställ kurslistan
    studiesEl.innerHTML = '';
    fetch('https://samuelwarduppgifter.one/restprojekt/studies.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.forEach(function (course) {
            studiesEl.innerHTML +=
                "<div class=\"item\">\n                    <h4>".concat(course.startDate, " - ").concat(course.endDate, " | ").concat(course.type, " | ").concat(course.school, "</h4>\n                    <h1>").concat(course.name, "</h1>\n                </div>");
        });
    });
}
function getJobs() {
    workEl.innerHTML = '';
    fetch('https://samuelwarduppgifter.one/restprojekt/work.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.forEach(function (work) {
            if (work.endDate == null) {
                workEl.innerHTML +=
                    "<div class=\"item\">\n                        <h4>".concat(work.startDate, " - Today | ").concat(work.job, "</h4>\n                        <h1>").concat(work.title, "</h1>\n                    </div>");
            }
            else {
                workEl.innerHTML +=
                    "<div class=\"item\">\n                        <h4>".concat(work.startDate, " - ").concat(work.endDate, " | ").concat(work.job, "</h4>\n                        <h1>").concat(work.title, "</h1>\n                    </div>");
            }
        });
    });
}
function getWebsites() {
    websitesEl.innerHTML = '';
    fetch('https://samuelwarduppgifter.one/restprojekt/websites.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.forEach(function (website) {
            websitesEl.innerHTML +=
                "<div class=\"item\">\n                    <h4>".concat(website.year, " | ").concat(website.type, "</h4>\n                    <h1>").concat(website.title, "</h1>\n                    <div class=\"item-info\">\n                        <p>").concat(website.description, "</p>\n                        <br><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23.603\" height=\"11.801\" viewBox=\"0 0 23.603 11.801\">\n                            <path id=\"Icon_material-link\" data-name=\"Icon material-link\" d=\"M5.242,16.4A3.662,3.662,0,0,1,8.9,12.742h4.721V10.5H8.9a5.9,5.9,0,0,0,0,11.8h4.721V20.059H8.9A3.662,3.662,0,0,1,5.242,16.4Zm4.839,1.18h9.441v-2.36H10.081ZM20.7,10.5H15.982v2.242H20.7a3.658,3.658,0,0,1,0,7.317H15.982V22.3H20.7a5.9,5.9,0,0,0,0-11.8Z\" transform=\"translate(-3 -10.5)\" fill=\"#fff\"/>\n                        </svg>\n                        <a href=\"").concat(website.link, "\" target=\"_blank\"><i>").concat(website.link, "</i></a>\n                        <img src=\"imgs/").concat(website.image, "\" alt=\"Preview of ").concat(website.title, "\">\n                    </div>\n                </div>");
        });
    });
}
window.addEventListener('load', function () {
    getCourses();
    getJobs();
    getWebsites();
});
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
