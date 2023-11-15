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
var range: any;

// DEFINE YOUR GRADIENT COLORS HERE
// Pct refers to the percentage position of the gradient stop point.

const gradientColorOne = [
    [
        { aPct: 0, pct: 0, color: { r: 53, g: 53, b: 53 } },
        { aPct: 100, pct: 0,  color: { r: 103, g: 80, b: 144 } }
    ],
    [
        { aPct: 0, pct: 0,  color: { r: 103, g: 80, b: 144 } },
        { aPct: 100, pct: 0,  color: { r: 82, g: 166, b: 122 } }
    ],
    [
        { aPct: 0, pct: 0,  color: { r: 82, g: 166, b: 122 } },
        { aPct: 100, pct: 0,  color: { r: 59, g: 75, b: 131 } }
    ],
    [
        { aPct: 0, pct: 0,  color: { r: 59, g: 75, b: 131 } },
        { aPct: 100, pct: 0,  color: { r: 222, g: 61, b: 90 } }
    ]
]

const gradientColorTwo = [
    [
        { aPct: 0, pct: 30, color: { r: 40, g: 40, b: 40 } },
        { aPct: 100, pct: 30,  color: { r: 84, g: 49, b: 144 } }
    ],
    [
        { aPct: 0, pct: 30,  color: { r: 84, g: 49, b: 144 } },
        { aPct: 100, pct: 30,  color: { r: 58, g: 116, b: 86 } }
    ],
    [
        { aPct: 0, pct: 30,  color: { r: 58, g: 116, b: 86 } },
        { aPct: 100, pct: 30,  color: { r: 51, g: 61, b: 99 } }
    ],
    [
        { aPct: 0, pct: 30,  color: { r: 51, g: 61, b: 99 } },
        { aPct: 100, pct: 30,  color: { r: 179, g: 48, b: 71 } }
    ]
]

const gradientColorThree = [
    [
        { aPct: 0, pct: 100, color: { r: 0, g: 0, b: 0 } },
        { aPct: 100, pct: 100,  color: { r: 33, g: 16, b: 62 } }
    ],
    [
        { aPct: 0, pct: 100,  color: { r: 33, g: 16, b: 62 } },
        { aPct: 100, pct: 100,  color: { r: 25, g: 50, b: 37 } }
    ],
    [
        { aPct: 0, pct: 100,  color: { r: 25, g: 50, b: 37 } },
        { aPct: 100, pct: 100,  color: { r: 22, g: 28, b: 48 } }
    ],
    [
        { aPct: 0, pct: 100,  color: { r: 22, g: 28, b: 48 } },
        { aPct: 100, pct: 100,  color: { r: 108, g: 29, b: 43 } }
    ]
]

// Apply our gradient programmatically so we can completely manipulate the gradient from JS rather than CSS
let c1 = gradientColorOne[0][0];
let c2 = gradientColorTwo[0][0];
let c3 = gradientColorThree[0][0];
body!.style.background = `radial-gradient(circle, rgba(${c1.color.r},${c1.color.g},${c1.color.b},1) ${c1.pct}%, rgba(${c2.color.r},${c2.color.g},${c2.color.b},1) ${c2.pct}%, rgba(${c3.color.r},${c3.color.g},${c3.color.b},1) ${c3.pct}%)`;
   
// This function transitions between two rgb colors
const getColor = function(aPct: number, colorSet: string | any[]) {
    for (var i = 1; i < colorSet.length - 1; i++) {
        if (aPct < colorSet[i].aPct) {
            break;
        }
    }

    // This conversion figures out the transition between two rgb values
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

    /* console.log("lower: " + lower.color.r + ", " + lower.color.g + ", " + lower.color.b + "\n"
                 + "upper: " + upper.color.r + ", " + upper.color.g + ", " + upper.color.b + "\n" 
                 + "range: " + range + "\n" 
                 + "rangePct: " + rangePct + "\n" 
                 + "pctLower: " + pctLower + "\n" 
                 + "pctUpper: " + pctUpper + "\n" 
                 + "color: " + color.r + ", " + color.g + ", " + color.b
               );
 */
    // And returns the rgb code
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
}


let transitionTime = 1000           // <-- 100 ms - time our animation will last
let previousTime: any, start = 0;        // <-- stores data on animation
let animationDirection = "forwards"; // <-- stores the animation direction
let intervalFrame: string | number | NodeJS.Timer | undefined;                  // <-- stores the interval frame
let currentPct = 0;                 // <-- current percentage through the animation
let elapsed = 0;                    // <-- number of frames which have ellapsed 
let scrollPos: number;
let oldScroll = 0;
let sectionNum = 0;
let oldSectionNum = 0;

// This is our animation
const animateGradient = function() {
    if(intervalFrame === undefined) {
        intervalFrame = setInterval(() => {
            let time = transitionTime / 1000; // time in seconds
            let numberOfFrames = time * 60; // 60 frames per second -> 1 second = 60 frames
            let colorOne = "";
            let colorTwo = "";
            let colorThree = "";

            console.log("Current percent: " + currentPct);
            
            // If the animation is going forward
            if (animationDirection === 'forwards' && currentPct != 100) {
                // Add 1 to elapsed
                elapsed += 1;
                // The elapsed frames out of max frames
                currentPct = Math.min(elapsed / numberOfFrames, 1) * 100;

                // Calculate current color in this time for each gradient color
                colorOne = getColor(currentPct, gradientColorOne[sectionNum - 1]);
                colorTwo = getColor(currentPct, gradientColorTwo[sectionNum - 1]);
                colorThree = getColor(currentPct, gradientColorThree[sectionNum - 1]);

            }

            else if (animationDirection === 'backwards' && currentPct != 0) {
                // Otherwise we're going back - subtract 1 from ellapsed
                elapsed -= 1;
                // The elapsed frames out of max frames
                currentPct = Math.max(elapsed / numberOfFrames, 0) * 100;

                // Calculate current color in this time for each gradient color
                colorOne = getColor(currentPct, gradientColorOne[sectionNum]);
                colorTwo = getColor(currentPct, gradientColorTwo[sectionNum]);
                colorThree = getColor(currentPct, gradientColorThree[sectionNum]);
            }

            else {
                clearInterval(intervalFrame);
                intervalFrame = undefined;
            }

            // Generate CSS string
            let generateGradient = `radial-gradient(circle, ${colorOne} 0%, ${colorTwo} 30%, ${colorThree} 100%)`;

            // Add it to our background.
            body!.style.backgroundImage = generateGradient;
        }, 16.667); // 60 frames per second
    }
};

window.addEventListener("scroll", () => {
    scrollPos = this.window.scrollY;
    // console.log("old section: " + oldSectionNum + "\n" + "current section: " + sectionNum)

    if (oldScroll < scrollPos) {
        animationDirection = "forwards";
    } else {
        animationDirection = "backwards";
    }

    oldScroll = scrollPos;

    if (oldSectionNum != sectionNum && animationDirection == "forwards") {
        currentPct = 0;
        elapsed = 0;
        animateGradient();
    } else if (oldSectionNum != sectionNum && animationDirection == "backwards") {
        currentPct = 100;
        elapsed = 60;
        animateGradient();
    }

    if (scrollPos == 0) {
        navInfo!.style.opacity = "1";
        seeMore!.style.opacity = "1";
    }

    if (scrollPos > 0) {
        navInfo!.style.opacity = "0";
        seeMore!.style.opacity = "0";
    }

    if (scrollPos > 612 && scrollPos < 1500) {     
        oldSectionNum = sectionNum;
        sectionNum = 1;

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "100%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1.25)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scrollPos > 1500 && scrollPos < 3064) {
        oldSectionNum = sectionNum;
        sectionNum = 2;

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "100%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1.25)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scrollPos > 3064 && scrollPos < 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 3;
        
        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "100%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1.25)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scrollPos > 4258) {
        oldSectionNum = sectionNum;
        sectionNum = 4;

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "100%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1.25)";
    } else {
        oldSectionNum = sectionNum;
        sectionNum = 0;

        welcome!.style.opacity = "100%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
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

/* Animationer under skrollning (Med jobbsektion)
window.addEventListener("scroll", () => {
    var scroll = this.scrollY;

    if (scroll == 0) {
        navInfo!.style.opacity = "1";
        seeMore!.style.opacity = "1";
    }

    if (scroll > 0) {
        navInfo!.style.opacity = "0";
        seeMore!.style.opacity = "0";
    }

    if (scroll > 612 && scroll < 1500) {
        this.document.body.style.background = "radial-gradient(circle, rgba(103,80,144,1) 0%, rgba(84,49,144,1) 15%, rgba(33,16,62,1) 80%";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "100%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1.25)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scroll > 1500 && scroll < 3064) {
        this.document.body.style.backgroundColor = "#193225";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "100%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1.25)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scroll > 3064 && scroll < 4258) {
        this.document.body.style.backgroundColor = "#161c30";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "100%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1.25)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scroll > 4258) {
        this.document.body.style.backgroundColor = "#6c1d2b";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "100%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1.25)";
    } else {
        this.document.body.style.background = "#101010";
        
        welcome!.style.opacity = "100%";
        projects!.style.opacity = "15%";
        experience!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        experienceIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    }
}); */

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

/* Animationer under skrollning (Utan jobbsektion)
window.addEventListener("scroll", () => {
    var scroll = this.scrollY;

    if (scroll == 0) {
        navInfo!.style.opacity = "1";
        seeMore!.style.opacity = "1";
    }

    if (scroll > 0) {
        navInfo!.style.opacity = "0";
        seeMore!.style.opacity = "0";
    }

    if (scroll > 612 && scroll < 1500) {
        this.document.body.style.backgroundColor = "#21103e";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "100%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1.25)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scroll > 1500 && scroll < 3064) {
        this.document.body.style.backgroundColor = "#161c30";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        education!.style.opacity = "100%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1.25)";
        contactIcon!.style.transform = "scale(1)";
    } else if (scroll > 3064) {
        this.document.body.style.backgroundColor = "#6c1d2b";

        welcome!.style.opacity = "15%";
        projects!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "100%";

        projectsIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1.25)";
    } else {
        this.document.body.style.backgroundColor = "#101010";
        
        welcome!.style.opacity = "100%";
        projects!.style.opacity = "15%";
        education!.style.opacity = "15%";
        contact!.style.opacity = "15%";

        projectsIcon!.style.transform = "scale(1)";
        educationIcon!.style.transform = "scale(1)";
        contactIcon!.style.transform = "scale(1)";
    }
}); */