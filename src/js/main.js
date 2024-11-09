// Fetch-API kod
"use strict";
// Variabler
var studiesEl = document.getElementById("studies");
var workEl = document.getElementById("work");
var websitesEl = document.getElementById("websites");
var itemsElArray = document.getElementsByClassName("items");
// Funktioner
// Hämta och skriv ut kurser
function getCourses() {
    // Återställ inläggslistan
    studiesEl.innerHTML = '';
    // Hämta och skriv ut inlägg
    fetch('https://samuelwarduppgifter.one/restprojekt/programs.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // Sorterar inläggen i datumsordning
        data.sort(sortByDate);
        data.forEach(function (program) {
            studiesEl.innerHTML +=
                "<div class=\"item\">\n                    <h4>".concat(program.startDate, " - ").concat((program.endDate) ? (program.endDate) : ("Today"), " | ").concat(program.school, " | Program</h4>\n                    <h1>").concat(program.name, "</h1>\n                    <div id=\"courses-").concat(program.id, "\">\n                    </div>\n                </div>");
        });
    });
    fetch('https://samuelwarduppgifter.one/restprojekt/studies.php')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // Sorterar inläggen i datumsordning
        data.sort(sortByDate);
        data.forEach(function (course) {
            if (document.getElementById("courses-" + course.program) != null) {
                document.getElementById("courses-" + course.program).innerHTML +=
                    "<div class=\"item\">\n                    <h5>".concat(course.startDate, " - ").concat((course.endDate) ? (course.endDate) : ("Today"), " | Course</h5>\n                    <h3>").concat(course.name, "</h3>\n                </div>");
            }
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
            workEl.innerHTML +=
                "<div class=\"item\">\n                    <h4>".concat(work.startDate, " - ").concat((work.endDate) ? (work.endDate) : ("Today"), " | ").concat(work.job, "</h4>\n                    <h1>").concat(work.title, "</h1>\n                    <div class=\"item-info\">\n                        <p>").concat(work.description, "</p>\n                    </div>\n                </div>");
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
                "<div class=\"item\">\n                    <h4>".concat(website.year, " | ").concat(website.type, "</h4>\n                    <h1>").concat(website.title, "</h1>\n                    <div class=\"item-info\">\n                        <p>").concat(website.description, "</p>\n                        <br><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23.603\" height=\"11.801\" viewBox=\"0 0 23.603 11.801\">\n                            <path id=\"Icon_material-link\" data-name=\"Icon material-link\" d=\"M5.242,16.4A3.662,3.662,0,0,1,8.9,12.742h4.721V10.5H8.9a5.9,5.9,0,0,0,0,11.8h4.721V20.059H8.9A3.662,3.662,0,0,1,5.242,16.4Zm4.839,1.18h9.441v-2.36H10.081ZM20.7,10.5H15.982v2.242H20.7a3.658,3.658,0,0,1,0,7.317H15.982V22.3H20.7a5.9,5.9,0,0,0,0-11.8Z\" transform=\"translate(-3 -10.5)\" fill=\"#fff\"/>\n                        </svg>\n                        <a href=\"").concat(website.link, "\" target=\"_blank\"><i>").concat(website.link, "</i></a>\n                        <img class=\"item-img\" src=\"imgs/").concat(website.image, "\" alt=\"Preview of ").concat(website.title, "\">\n                    </div>\n                </div>");
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
for (var i = 0; i < itemsElArray.length; i++) {
    itemsElArray[i].addEventListener('click', function (e) {
        var target = e.target;
        var currentTarget = e.currentTarget;
        var item = target.parentNode;
        var items = Array.from(currentTarget.querySelectorAll('.item-info'));
        var info = item.querySelector('.item-info');
        if (item.matches('div')) {
            if (info.style.display == "block") {
                info.style.transform = "translateX(700px)";
                info.style.opacity = "0";
                setTimeout(function () {
                    info.style.display = "none";
                    for (var i_1 = 0; i_1 < items.length; i_1++) {
                        items[i_1].style.display = "none";
                    }
                }, 500);
            }
            else {
                for (var i_2 = 0; i_2 < items.length; i_2++) {
                    items[i_2].style.display = "none";
                }
                info.style.display = "block";
                setTimeout(function () {
                    info.style.transform = "translateX(0)";
                    info.style.opacity = "1";
                }, 100);
            }
        }
    });
}
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
var bgImg = document.getElementById('welcome-bg');
var projectsIcon = document.getElementById('projects-icon');
var experienceIcon = document.getElementById('experience-icon');
var educationIcon = document.getElementById('education-icon');
var contactIcon = document.getElementById('contact-icon');
var body = document.querySelector('body');
var gradientEl = document.getElementById('gradient-overlay');
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
        { aPct: 0, pct: 0, color: { r: 80, g: 80, b: 80 } },
        { aPct: 100, pct: 0, color: { r: 133, g: 102, b: 187 } }
    ],
    [
        { aPct: 0, pct: 0, color: { r: 133, g: 102, b: 187 } },
        { aPct: 100, pct: 0, color: { r: 102, g: 187, b: 142 } }
    ],
    [
        { aPct: 0, pct: 0, color: { r: 102, g: 187, b: 142 } },
        { aPct: 100, pct: 0, color: { r: 90, g: 112, b: 163 } }
    ],
    [
        { aPct: 0, pct: 0, color: { r: 90, g: 112, b: 163 } },
        { aPct: 100, pct: 0, color: { r: 248, g: 104, b: 64 } }
    ]
];
var gradientColorTwo = [
    [
        { aPct: 0, pct: 30, color: { r: 51, g: 51, b: 51 } },
        { aPct: 100, pct: 30, color: { r: 77, g: 45, b: 131 } }
    ],
    [
        { aPct: 0, pct: 30, color: { r: 77, g: 45, b: 131 } },
        { aPct: 100, pct: 30, color: { r: 45, g: 131, b: 85 } }
    ],
    [
        { aPct: 0, pct: 30, color: { r: 45, g: 131, b: 85 } },
        { aPct: 100, pct: 30, color: { r: 45, g: 79, b: 131 } }
    ],
    [
        { aPct: 0, pct: 30, color: { r: 45, g: 79, b: 131 } },
        { aPct: 100, pct: 30, color: { r: 173, g: 57, b: 25 } }
    ]
];
var gradientColorThree = [
    [
        { aPct: 0, pct: 100, color: { r: 0, g: 0, b: 0 } },
        { aPct: 100, pct: 100, color: { r: 18, g: 9, b: 33 } }
    ],
    [
        { aPct: 0, pct: 100, color: { r: 18, g: 9, b: 33 } },
        { aPct: 100, pct: 100, color: { r: 9, g: 33, b: 18 } }
    ],
    [
        { aPct: 0, pct: 100, color: { r: 9, g: 33, b: 18 } },
        { aPct: 100, pct: 100, color: { r: 9, g: 17, b: 33 } }
    ],
    [
        { aPct: 0, pct: 100, color: { r: 9, g: 17, b: 33 } },
        { aPct: 100, pct: 100, color: { r: 19, g: 8, b: 5 } }
    ]
];
// Sätter den första gradienten
var c1 = gradientColorOne[0][0];
var c2 = gradientColorTwo[0][0];
var c3 = gradientColorThree[0][0];
gradientEl.style.background = "radial-gradient(circle, rgba(".concat(c1.color.r, ",").concat(c1.color.g, ",").concat(c1.color.b, ",1) ").concat(c1.pct, "%, rgba(").concat(c2.color.r, ",").concat(c2.color.g, ",").concat(c2.color.b, ",1) ").concat(c2.pct, "%, rgba(").concat(c3.color.r, ",").concat(c3.color.g, ",").concat(c3.color.b, ",1) ").concat(c3.pct, "%)");
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
                currentPct = 0;
                elapsed = 0;
                if (intervalFrame !== undefined) {
                    clearInterval(intervalFrame);
                    intervalFrame = undefined;
                }
            }
            // Generera CSS sträng
            var generateGradient = "radial-gradient(circle, ".concat(colorOne, " 0%, ").concat(colorTwo, " 30%, ").concat(colorThree, " 100%)");
            // Lägg till den till bakgrunden
            gradientEl.style.backgroundImage = generateGradient;
        }, 16.667); // 60 FPS
    }
};
// Körs när webbläsaren skrollas
window.addEventListener("scroll", function () {
    scrollPos = _this.window.scrollY;
    // Kollar skrollriktning och sätter rätt animationsriktning
    if (oldScroll < scrollPos && currentPct == 0) {
        animationDirection = "forwards";
    }
    else if (oldScroll > scrollPos && currentPct == 0) {
        animationDirection = "backwards";
    }
    oldScroll = scrollPos;
    // Kör animationfunktionen när användaren går mellan två sektioner
    if (oldSectionNum != sectionNum && animationDirection == "forwards" && currentPct == 0) {
        currentPct = 0;
        elapsed = 0;
        animateGradient();
    }
    else if (oldSectionNum != sectionNum && animationDirection == "backwards" && currentPct == 0) {
        currentPct = 100;
        elapsed = 60;
        animateGradient();
    }
    // Sektioner & andra animationer
    if (scrollPos == 0) {
        navInfo.style.opacity = "1";
        seeMore.style.opacity = "1";
        bgImg.style.opacity = "1";
    }
    if (scrollPos > 0) {
        navInfo.style.opacity = "0";
        seeMore.style.opacity = "0";
        bgImg.style.opacity = "0";
    }
    if (scrollPos > 612) {
        gradientEl.style.height = "100vh";
    }
    else {
        gradientEl.style.height = "500vh";
    }
    if (scrollPos > 612 && scrollPos < 1500) {
        oldSectionNum = sectionNum;
        sectionNum = 1;
        welcome.style.opacity = "15%";
        projects.style.opacity = "100%";
        experience.style.opacity = "15%";
        education.style.opacity = "15%";
        contact.style.opacity = "15%";
        projectsIcon.setAttribute('class', 'nav-icon active');
        experienceIcon.setAttribute('class', 'nav-icon inactive');
        educationIcon.setAttribute('class', 'nav-icon inactive');
        contactIcon.setAttribute('class', 'nav-icon inactive');
    }
    else if (scrollPos > 1500 && scrollPos < 3064) {
        oldSectionNum = sectionNum;
        sectionNum = 2;
        welcome.style.opacity = "15%";
        projects.style.opacity = "15%";
        experience.style.opacity = "100%";
        education.style.opacity = "15%";
        contact.style.opacity = "15%";
        projectsIcon.setAttribute('class', 'nav-icon inactive');
        experienceIcon.setAttribute('class', 'nav-icon active');
        educationIcon.setAttribute('class', 'nav-icon inactive');
        contactIcon.setAttribute('class', 'nav-icon inactive');
    }
    else if (scrollPos > 3064 && scrollPos < 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 3;
        welcome.style.opacity = "15%";
        projects.style.opacity = "15%";
        experience.style.opacity = "15%";
        education.style.opacity = "100%";
        contact.style.opacity = "15%";
        projectsIcon.setAttribute('class', 'nav-icon inactive');
        experienceIcon.setAttribute('class', 'nav-icon inactive');
        educationIcon.setAttribute('class', 'nav-icon active');
        contactIcon.setAttribute('class', 'nav-icon inactive');
    }
    else if (scrollPos > 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 4;
        welcome.style.opacity = "15%";
        projects.style.opacity = "15%";
        experience.style.opacity = "15%";
        education.style.opacity = "15%";
        contact.style.opacity = "100%";
        projectsIcon.setAttribute('class', 'nav-icon inactive');
        experienceIcon.setAttribute('class', 'nav-icon inactive');
        educationIcon.setAttribute('class', 'nav-icon inactive');
        contactIcon.setAttribute('class', 'nav-icon active');
    }
    else {
        oldSectionNum = sectionNum;
        sectionNum = 0;
        welcome.style.opacity = "100%";
        projects.style.opacity = "15%";
        experience.style.opacity = "15%";
        education.style.opacity = "15%";
        contact.style.opacity = "15%";
        projectsIcon.setAttribute('class', 'nav-icon');
        experienceIcon.setAttribute('class', 'nav-icon');
        educationIcon.setAttribute('class', 'nav-icon');
        contactIcon.setAttribute('class', 'nav-icon');
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
        bgImg.style.opacity = "1";
    }, 3500);
});
