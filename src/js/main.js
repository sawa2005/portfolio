// Fetch-API kod
"use strict";
// Variabler
var studiesEl = document.getElementById("studies");
var workEl = document.getElementById("work");
var websitesEl = document.getElementById("websites");
// Funktioner
// Hämta och skriv ut kurser
function getCourses() {
    // Återställ inläggslistan
    studiesEl.innerHTML = '';
    // Hämta och skriv ut inlägg
    fetch('https://samuelwarduppgifter.one/restprojekt/studies.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // Sorterar inläggen i datumsordning
        data.sort(sortByDate);
        data.forEach(function (course) {
            studiesEl.innerHTML +=
                "<div class=\"item\">\n                    <h4>".concat(course.startDate, " - ").concat(course.endDate, " | ").concat(course.type, " | ").concat(course.school, "</h4>\n                    <h1>").concat(course.name, "</h1>\n                </div>");
        });
    });
}
// Hämta och skriv ut jobb
function getJobs() {
    workEl.innerHTML = '';
    fetch('https://samuelwarduppgifter.one/restprojekt/work.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.sort(sortByDate);
        data.forEach(function (work) {
            // Ser till att slutdatumet endast skrivs ut om det finns
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
// Hämta och skriv ut webbsidor
function getWebsites() {
    websitesEl.innerHTML = '';
    fetch('https://samuelwarduppgifter.one/restprojekt/websites.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        data.sort(sortByYear);
        data.forEach(function (website) {
            websitesEl.innerHTML +=
                "<div class=\"item\">\n                    <h4>".concat(website.year, " | ").concat(website.type, "</h4>\n                    <h1>").concat(website.title, "</h1>\n                    <div class=\"item-info\">\n                        <p>").concat(website.description, "</p>\n                        <br><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23.603\" height=\"11.801\" viewBox=\"0 0 23.603 11.801\">\n                            <path id=\"Icon_material-link\" data-name=\"Icon material-link\" d=\"M5.242,16.4A3.662,3.662,0,0,1,8.9,12.742h4.721V10.5H8.9a5.9,5.9,0,0,0,0,11.8h4.721V20.059H8.9A3.662,3.662,0,0,1,5.242,16.4Zm4.839,1.18h9.441v-2.36H10.081ZM20.7,10.5H15.982v2.242H20.7a3.658,3.658,0,0,1,0,7.317H15.982V22.3H20.7a5.9,5.9,0,0,0,0-11.8Z\" transform=\"translate(-3 -10.5)\" fill=\"#fff\"/>\n                        </svg>\n                        <a href=\"").concat(website.link, "\" target=\"_blank\"><i>").concat(website.link, "</i></a>\n                        <img src=\"imgs/").concat(website.image, "\" alt=\"Preview of ").concat(website.title, "\">\n                    </div>\n                </div>");
        });
    });
}
// Sorterar en array i datumsordning
function sortByDate(a, b) {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}
// Sorterar en array i årsordning
function sortByYear(a, b) {
    return b.year - a.year;
}
// Eventlyssnare
window.addEventListener('load', function () {
    getCourses();
    getJobs();
    getWebsites();
});
// Visar webbsidornas info när rubriken klickas
websitesEl.addEventListener('click', function (e) {
    var target = e.target;
    var currentTarget = e.currentTarget;
    var item = target.parentNode;
    var items = Array.from(currentTarget.querySelectorAll('.item-info'));
    var info = item.querySelector('.item-info');
    if (item.matches('div')) {
        if (info.style.display == "block") {
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }
            info.style.display = "none";
        }
        else {
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }
            info.style.display = "block";
        }
    }
});
// Generell kod och animationer
var _this = this;
// Variabler
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
var body = document.querySelector('body');
var range;
// Variabler för gradientanimation
var transitionTime = 1000; // <-- hur lång animationen ska vara i millisekunder
var previousTime, start = 0; // <-- lagrar data under animationen
var animationDirection = "forwards"; // <-- lagrar animationens riktning
var intervalFrame; // <-- lagrar intervall
var currentPct = 0; // <-- antalet procent av animationen som har slutförts
var elapsed = 0; // <-- antalet bildrutor som har passerat 
var scrollPos; // <-- vertikala positionen som har skrollats till
var oldScroll = 0; // <-- tidigare skrollposition
var sectionNum = 0; // <-- sektionen som användaren granskar
var oldSectionNum = 0; // <-- tidigare sektion
// Gradientfärger
var gradientColorOne = [
    [
        { aPct: 0, pct: 0, color: { r: 53, g: 53, b: 53 } },
        { aPct: 100, pct: 0, color: { r: 103, g: 80, b: 144 } }
    ],
    [
        { aPct: 0, pct: 0, color: { r: 103, g: 80, b: 144 } },
        { aPct: 100, pct: 0, color: { r: 82, g: 166, b: 122 } }
    ],
    [
        { aPct: 0, pct: 0, color: { r: 82, g: 166, b: 122 } },
        { aPct: 100, pct: 0, color: { r: 59, g: 75, b: 131 } }
    ],
    [
        { aPct: 0, pct: 0, color: { r: 59, g: 75, b: 131 } },
        { aPct: 100, pct: 0, color: { r: 222, g: 61, b: 90 } }
    ]
];
var gradientColorTwo = [
    [
        { aPct: 0, pct: 30, color: { r: 40, g: 40, b: 40 } },
        { aPct: 100, pct: 30, color: { r: 84, g: 49, b: 144 } }
    ],
    [
        { aPct: 0, pct: 30, color: { r: 84, g: 49, b: 144 } },
        { aPct: 100, pct: 30, color: { r: 58, g: 116, b: 86 } }
    ],
    [
        { aPct: 0, pct: 30, color: { r: 58, g: 116, b: 86 } },
        { aPct: 100, pct: 30, color: { r: 51, g: 61, b: 99 } }
    ],
    [
        { aPct: 0, pct: 30, color: { r: 51, g: 61, b: 99 } },
        { aPct: 100, pct: 30, color: { r: 179, g: 48, b: 71 } }
    ]
];
var gradientColorThree = [
    [
        { aPct: 0, pct: 100, color: { r: 0, g: 0, b: 0 } },
        { aPct: 100, pct: 100, color: { r: 33, g: 16, b: 62 } }
    ],
    [
        { aPct: 0, pct: 100, color: { r: 33, g: 16, b: 62 } },
        { aPct: 100, pct: 100, color: { r: 25, g: 50, b: 37 } }
    ],
    [
        { aPct: 0, pct: 100, color: { r: 25, g: 50, b: 37 } },
        { aPct: 100, pct: 100, color: { r: 22, g: 28, b: 48 } }
    ],
    [
        { aPct: 0, pct: 100, color: { r: 22, g: 28, b: 48 } },
        { aPct: 100, pct: 100, color: { r: 108, g: 29, b: 43 } }
    ]
];
// Sätter den första gradienten
var c1 = gradientColorOne[0][0];
var c2 = gradientColorTwo[0][0];
var c3 = gradientColorThree[0][0];
body.style.background = "radial-gradient(circle, rgba(".concat(c1.color.r, ",").concat(c1.color.g, ",").concat(c1.color.b, ",1) ").concat(c1.pct, "%, rgba(").concat(c2.color.r, ",").concat(c2.color.g, ",").concat(c2.color.b, ",1) ").concat(c2.pct, "%, rgba(").concat(c3.color.r, ",").concat(c3.color.g, ",").concat(c3.color.b, ",1) ").concat(c3.pct, "%)");
// Funktion som tar fram färgerna mellan två färger
var getColor = function (aPct, colorSet) {
    for (var i = 1; i < colorSet.length - 1; i++) {
        if (aPct < colorSet[i].aPct) {
            break;
        }
    }
    var lower = colorSet[i - 1];
    var upper = colorSet[i];
    var range = upper.aPct - lower.aPct;
    var rangePct = (aPct - lower.aPct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    // Returnerar RGB-kod
    return "rgb(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ")");
};
// Funktion för animationen av gradienter
var animateGradient = function () {
    if (intervalFrame === undefined) {
        intervalFrame = setInterval(function () {
            var time = transitionTime / 1000; // tid i sekunder
            var numberOfFrames = time * 60; // 60 FPS -> 1 sekund = 60 bildrutor
            var colorOne = "";
            var colorTwo = "";
            var colorThree = "";
            console.log("Current percent: " + currentPct);
            // Om animationens riktning är framåt
            if (animationDirection === 'forwards' && currentPct != 100) {
                // Addera elapsed
                elapsed += 1;
                // Antalet bilder utav maximala
                currentPct = Math.min(elapsed / numberOfFrames, 1) * 100;
                // Kalkylera vilken färg som borde visas på den nuvarande bildrutan
                colorOne = getColor(currentPct, gradientColorOne[sectionNum - 1]);
                colorTwo = getColor(currentPct, gradientColorTwo[sectionNum - 1]);
                colorThree = getColor(currentPct, gradientColorThree[sectionNum - 1]);
            }
            else if (animationDirection === 'backwards' && currentPct != 0) {
                // Otherwise we're going back - subtract 1 from ellapsed
                elapsed -= 1;
                currentPct = Math.max(elapsed / numberOfFrames, 0) * 100;
                colorOne = getColor(currentPct, gradientColorOne[sectionNum]);
                colorTwo = getColor(currentPct, gradientColorTwo[sectionNum]);
                colorThree = getColor(currentPct, gradientColorThree[sectionNum]);
            }
            else {
                // Om denna körs är animationen klar och återställs
                clearInterval(intervalFrame);
                intervalFrame = undefined;
            }
            // Generera CSS sträng
            var generateGradient = "radial-gradient(circle, ".concat(colorOne, " 0%, ").concat(colorTwo, " 30%, ").concat(colorThree, " 100%)");
            // Lägg till den till bakgrunden
            body.style.backgroundImage = generateGradient;
        }, 16.667); // 60 FPS
    }
};
// Körs när webbläsaren skrollas
window.addEventListener("scroll", function () {
    scrollPos = _this.window.scrollY;
    // Kollar skrollriktning och sätter rätt animationsriktning
    if (oldScroll < scrollPos) {
        animationDirection = "forwards";
    }
    else {
        animationDirection = "backwards";
    }
    oldScroll = scrollPos;
    // Kör animationfunktionen när användaren går mellan två sektioner
    if (oldSectionNum != sectionNum && animationDirection == "forwards") {
        currentPct = 0;
        elapsed = 0;
        animateGradient();
    }
    else if (oldSectionNum != sectionNum && animationDirection == "backwards") {
        currentPct = 100;
        elapsed = 60;
        animateGradient();
    }
    // Sektioner & andra animationer
    if (scrollPos == 0) {
        navInfo.style.opacity = "1";
        seeMore.style.opacity = "1";
    }
    if (scrollPos > 0) {
        navInfo.style.opacity = "0";
        seeMore.style.opacity = "0";
    }
    if (scrollPos > 612 && scrollPos < 1500) {
        oldSectionNum = sectionNum;
        sectionNum = 1;
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
    else if (scrollPos > 1500 && scrollPos < 3064) {
        oldSectionNum = sectionNum;
        sectionNum = 2;
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
    else if (scrollPos > 3064 && scrollPos < 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 3;
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
    else if (scrollPos > 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 4;
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
        oldSectionNum = sectionNum;
        sectionNum = 0;
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
// Uppdaterar tiden när webbsidan laddas om och varje sekund
updateTime();
setInterval(function () { updateTime(); }, 1000);
// Uppdaterar och skriver ut nuvarande tiden
function updateTime() {
    var date = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric" });
    time.innerText = date;
}
;
// Animationer när sidan laddats in
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
