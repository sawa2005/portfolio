// Fetch-API kod

"use strict"

// Variabler
let studiesEl = document.getElementById("studies");
let workEl = document.getElementById("work");
let websitesEl = document.getElementById("websites");

let itemsElArray = document.getElementsByClassName("items");

// Funktioner

// Hämta och skriv ut kurser
function getCourses() {
    // Återställ inläggslistan
    studiesEl!.innerHTML = '';

    // Hämta och skriv ut inlägg
    fetch('https://samuelwarduppgifter.one/restprojekt/programs.php')
        .then(response => response.json())
        .then(data => {
            // Sorterar inläggen i datumsordning
            data.sort(sortByDate);
            data.forEach((program: any) => {
                studiesEl!.innerHTML +=
                `<div class="item">
                    <h4>${program.startDate} - ${ (program.endDate) ? (program.endDate) : ("Today")} | ${program.school} | Program</h4>
                    <h1>${program.name}</h1>
                    <div id="courses-${program.id}">
                    </div>
                </div>`
            })
        })

    fetch('https://samuelwarduppgifter.one/restprojekt/studies.php')
    .then(response => response.json())
    .then(data => {
        // Sorterar inläggen i datumsordning
        data.sort(sortByDate);
        data.forEach((course: any) => {
            if (document.getElementById("courses-" + course.program) != null) {
                document.getElementById("courses-" + course.program)!.innerHTML +=
                `<div class="item">
                    <h5>${course.startDate} - ${ (course.endDate) ? (course.endDate) : ("Today")} | Course</h5>
                    <h3>${course.name}</h3>
                </div>`
            }
        })
    })
}

// Hämta och skriv ut jobb
function getJobs() {
    workEl!.innerHTML = '';

    fetch('https://samuelwarduppgifter.one/restprojekt/work.php')
        .then(response => response.json())
        .then(data => {
            data.sort(sortByDate);
            data.forEach((work: any) => {
                // Ser till att slutdatumet endast skrivs ut om det finns
                workEl!.innerHTML +=
                `<div class="item">
                    <h4>${work.startDate} - ${ (work.endDate) ? (work.endDate) : ("Today")} | ${work.job}</h4>
                    <h1>${work.title}</h1>
                    <div class="item-info">
                        <p>${work.description}</p>
                    </div>
                </div>`
            })
        })
}

// Hämta och skriv ut webbsidor
function getWebsites() {
    websitesEl!.innerHTML = '';

    fetch('https://samuelwarduppgifter.one/restprojekt/websites.php')
        .then(response => response.json())
        .then(data => {
            data.sort(sortByYear);
            data.forEach((website: any) => {
                websitesEl!.innerHTML +=
                `<div class="item">
                    <h4>${website.year} | ${website.type}</h4>
                    <h1>${website.title}</h1>
                    <div class="item-info">
                        <p>${website.description}</p>
                        <br><svg xmlns="http://www.w3.org/2000/svg" width="23.603" height="11.801" viewBox="0 0 23.603 11.801">
                            <path id="Icon_material-link" data-name="Icon material-link" d="M5.242,16.4A3.662,3.662,0,0,1,8.9,12.742h4.721V10.5H8.9a5.9,5.9,0,0,0,0,11.8h4.721V20.059H8.9A3.662,3.662,0,0,1,5.242,16.4Zm4.839,1.18h9.441v-2.36H10.081ZM20.7,10.5H15.982v2.242H20.7a3.658,3.658,0,0,1,0,7.317H15.982V22.3H20.7a5.9,5.9,0,0,0,0-11.8Z" transform="translate(-3 -10.5)" fill="#fff"/>
                        </svg>
                        <a href="${website.link}" target="_blank"><i>${website.link}</i></a>
                        <img class="item-img" src="imgs/${website.image}" alt="Preview of ${website.title}">
                    </div>
                </div>`
            })
        })
}

// Sorterar en array i datumsordning
function sortByDate(a: any, b: any) {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}


// Sorterar en array i årsordning
function sortByYear(a: any, b: any) {
    return b.year - a.year;
}

// Eventlyssnare
window.addEventListener('load',() => {    
    getCourses();
    getJobs();
    getWebsites();
});

// Visar webbsidornas info när rubriken klickas

for (var i = 0; i < itemsElArray.length; i++) {
    itemsElArray[i].addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const currentTarget = e.currentTarget as HTMLElement;
        let item = target.parentNode as HTMLElement;
        let items = Array.from(currentTarget.querySelectorAll('.item-info')) as Array<HTMLElement>;
        let info = item.querySelector('.item-info') as HTMLDivElement;

        if (item.matches('div')) {

            if (info.style.display == "block") {
                info.style.transform = "translateX(700px)";
                info.style.opacity = "0";

                setTimeout( () => {
                    info.style.display = "none";

                    for (let i = 0; i < items.length; i++) {
                        items[i].style.display = "none";
                    }
                }, 500)

            } else {
                for (let i = 0; i < items.length; i++) {
                    items[i].style.display = "none";
                }

                info.style.display = "block";
                setTimeout( () => {
                    info.style.transform = "translateX(0)";
                    info.style.opacity = "1";
                }, 100)
            }
            
        }
    });
}