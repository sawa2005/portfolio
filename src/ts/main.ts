// Generell kod och animationer

// Variabler
var time = document.getElementById('date');
const nav = document.querySelector('nav');

const welcome = document.getElementById('welcome-text');
const projects = document.getElementById('projects-text');
const experience = document.getElementById('experience-text');
const education = document.getElementById('education-text');
const contact = document.getElementById('contact-text');

const navInfo = document.getElementById('nav-info');
const seeMore = document.getElementById('see-more');

const projectsIcon = document.getElementById('projects-icon');
const experienceIcon = document.getElementById('experience-icon');
const educationIcon = document.getElementById('education-icon');
const contactIcon = document.getElementById('contact-icon');

let body = document.querySelector('body');
let gradientEl = document.getElementById('gradient-overlay');
var range: any;

// Variabler för gradientanimation
let transitionTime = 1000                                       // <-- hur lång animationen ska vara i millisekunder
let previousTime: any, start = 0;                               // <-- lagrar data under animationen
let animationDirection = "forwards";                            // <-- lagrar animationens riktning
let intervalFrame: string | number | NodeJS.Timer | undefined;  // <-- lagrar intervall
let currentPct = 0;                                             // <-- antalet procent av animationen som har slutförts
let elapsed = 0;                                                // <-- antalet bildrutor som har passerat 
let scrollPos: number;                                          // <-- vertikala positionen som har skrollats till
let oldScroll = 0;                                              // <-- tidigare skrollposition
let sectionNum = 0;                                             // <-- sektionen som användaren granskar
let oldSectionNum = 0;                                          // <-- tidigare sektion

// Gradientfärger
const gradientColorOne = [
    [
        { aPct: 0, pct: 0, color: { r: 80, g: 80, b: 80 } },
        { aPct: 100, pct: 0,  color: { r: 133, g: 102, b: 187 } }
    ],
    [
        { aPct: 0, pct: 0,  color: { r: 133, g: 102, b: 187 } },
        { aPct: 100, pct: 0,  color: { r: 102, g: 187, b: 142 } }
    ],
    [
        { aPct: 0, pct: 0,  color: { r: 102, g: 187, b: 142 } },
        { aPct: 100, pct: 0,  color: { r: 90, g: 112, b: 163 } }
    ],
    [
        { aPct: 0, pct: 0,  color: { r: 90, g: 112, b: 163 } },
        { aPct: 100, pct: 0,  color: { r: 248, g: 104, b: 64 } }
    ]
]

const gradientColorTwo = [
    [
        { aPct: 0, pct: 30, color: { r: 51, g: 51, b: 51 } },
        { aPct: 100, pct: 30,  color: { r: 77, g: 45, b: 131 } }
    ],
    [
        { aPct: 0, pct: 30,  color: { r: 77, g: 45, b: 131 } },
        { aPct: 100, pct: 30,  color: { r: 45, g: 131, b: 85 } }
    ],
    [
        { aPct: 0, pct: 30,  color: { r: 45, g: 131, b: 85 } },
        { aPct: 100, pct: 30,  color: { r: 45, g: 79, b: 131 } }
    ],
    [
        { aPct: 0, pct: 30,  color: { r: 45, g: 79, b: 131 } },
        { aPct: 100, pct: 30,  color: { r: 173, g: 57, b: 25 } }
    ]
]

const gradientColorThree = [
    [
        { aPct: 0, pct: 100, color: { r: 0, g: 0, b: 0 } },
        { aPct: 100, pct: 100,  color: { r: 18, g: 9, b: 33 } }
    ],
    [
        { aPct: 0, pct: 100,  color: { r: 18, g: 9, b: 33 } },
        { aPct: 100, pct: 100,  color: { r: 9, g: 33, b: 18 } }
    ],
    [
        { aPct: 0, pct: 100,  color: { r: 9, g: 33, b: 18 } },
        { aPct: 100, pct: 100,  color: { r: 9, g: 17, b: 33 } }
    ],
    [
        { aPct: 0, pct: 100,  color: { r: 9, g: 17, b: 33 } },
        { aPct: 100, pct: 100,  color: { r: 19, g: 8, b: 5 } }
    ]
]

// Sätter den första gradienten
let c1 = gradientColorOne[0][0];
let c2 = gradientColorTwo[0][0];
let c3 = gradientColorThree[0][0];
gradientEl!.style.background = `radial-gradient(circle, rgba(${c1.color.r},${c1.color.g},${c1.color.b},1) ${c1.pct}%, rgba(${c2.color.r},${c2.color.g},${c2.color.b},1) ${c2.pct}%, rgba(${c3.color.r},${c3.color.g},${c3.color.b},1) ${c3.pct}%)`;

// Funktion som tar fram färgerna mellan två färger
const getColor = function(aPct: number, colorSet: string | any[]) {
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
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

// Funktion för animationen av gradienter
const animateGradient = function() {
    if(intervalFrame === undefined) {
        intervalFrame = setInterval(() => {
            let time = transitionTime / 1000; // tid i sekunder
            let numberOfFrames = time * 60; // 60 FPS -> 1 sekund = 60 bildrutor
            let colorOne = "";
            let colorTwo = "";
            let colorThree = "";
            
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
                clearInterval(intervalFrame);
                intervalFrame = undefined;
            }

            // Generera CSS sträng
            let generateGradient = `radial-gradient(circle, ${colorOne} 0%, ${colorTwo} 30%, ${colorThree} 100%)`;

            // Lägg till den till bakgrunden
            gradientEl!.style.backgroundImage = generateGradient;
        }, 16.667); // 60 FPS
    }
};

// Körs när webbläsaren skrollas
window.addEventListener("scroll", () => {
    scrollPos = this.window.scrollY;

    // Kollar skrollriktning och sätter rätt animationsriktning
    if (oldScroll < scrollPos && currentPct == 0) {
        animationDirection = "forwards";
    } else if (oldScroll > scrollPos && currentPct == 0) {
        animationDirection = "backwards";
    }

    oldScroll = scrollPos;

    // Kör animationfunktionen när användaren går mellan två sektioner
    if (oldSectionNum != sectionNum && animationDirection == "forwards" && currentPct == 0) {
        currentPct = 0;
        elapsed = 0;
        animateGradient();
    } else if (oldSectionNum != sectionNum && animationDirection == "backwards" && currentPct == 0) {
        currentPct = 100;
        elapsed = 60;
        animateGradient();
    }

    // Sektioner & andra animationer
    if (scrollPos == 0) {
        navInfo!.style.opacity = "1";
        seeMore!.style.opacity = "1";
    }

    if (scrollPos > 0) {
        navInfo!.style.opacity = "0";
        seeMore!.style.opacity = "0";
    }

    if (scrollPos > 612) {
        gradientEl!.style.height = "100vh";
    } else {
        gradientEl!.style.height = "500vh";
    }

    if (scrollPos > 612 && scrollPos < 1500) {     
        oldSectionNum = sectionNum;
        sectionNum = 1;

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "100%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.setAttribute('class', 'nav-icon active')
        experienceIcon!.setAttribute('class', 'nav-icon inactive')
        educationIcon!.setAttribute('class', 'nav-icon inactive')
        contactIcon!.setAttribute('class', 'nav-icon inactive')
    } else if (scrollPos > 1500 && scrollPos < 3064) {
        oldSectionNum = sectionNum;
        sectionNum = 2;

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "100%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.setAttribute('class', 'nav-icon inactive')
        experienceIcon!.setAttribute('class', 'nav-icon active')
        educationIcon!.setAttribute('class', 'nav-icon inactive')
        contactIcon!.setAttribute('class', 'nav-icon inactive')
    } else if (scrollPos > 3064 && scrollPos < 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 3;
        
        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "100%";
        contact!.style.opacity = "15%";

        projectsIcon!.setAttribute('class', 'nav-icon inactive')
        experienceIcon!.setAttribute('class', 'nav-icon inactive')
        educationIcon!.setAttribute('class', 'nav-icon active')
        contactIcon!.setAttribute('class', 'nav-icon inactive')
    } else if (scrollPos > 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 4;

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "100%";

        projectsIcon!.setAttribute('class', 'nav-icon inactive')
        experienceIcon!.setAttribute('class', 'nav-icon inactive')
        educationIcon!.setAttribute('class', 'nav-icon inactive')
        contactIcon!.setAttribute('class', 'nav-icon active')
    } else {
        oldSectionNum = sectionNum;
        sectionNum = 0;

        welcome!.style.opacity = "100%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.setAttribute('class', 'nav-icon')
        experienceIcon!.setAttribute('class', 'nav-icon')
        educationIcon!.setAttribute('class', 'nav-icon')
        contactIcon!.setAttribute('class', 'nav-icon')
    }
});

// Uppdaterar tiden när webbsidan laddas om och varje sekund
updateTime();
setInterval( () => {updateTime()}, 1000);

// Uppdaterar och skriver ut nuvarande tiden
function updateTime() {
    const date = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    time!.innerText = date;   
};

// Animationer när sidan laddats in
window.addEventListener("load", () => {
    welcome!.style.opacity = "100%";

    setTimeout( () => {
        this.document.body.style.opacity = "1";
    }, 1000)

    if (window.innerWidth > 900) {
        setTimeout( () => {
            nav!.style.transform = "translateX(0px)";
        }, 2000)
    } else {
        nav!.style.transform = "translateX(0px)";
    }

    setTimeout( () => {
        navInfo!.style.opacity = "1";
        seeMore!.style.opacity = "1";
    }, 3500)
});