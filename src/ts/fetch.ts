// Fetch-API kod

"use strict"

// Variabler
let studiesEl = document.getElementById("studies");
let workEl = document.getElementById("work");
let websitesEl = document.getElementById("websites");

// Funktioner

// Hämta och skriv ut kurser
function getCourses() {
    // Återställ inläggslistan
    studiesEl!.innerHTML = '';

    // Hämta och skriv ut inlägg
    fetch('https://samuelwarduppgifter.one/restprojekt/studies.php')
        .then(response => response.json())
        .then(data => {
            // Sorterar inläggen i datumsordning
            data.sort(sortByDate);
            data.forEach((course: any) => {
                studiesEl!.innerHTML +=
                `<div class="item">
                    <h4>${course.startDate} - ${course.endDate} | ${course.type} | ${course.school}</h4>
                    <h1>${course.name}</h1>
                </div>`
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
                if (work.endDate == null) {
                    workEl!.innerHTML +=
                    `<div class="item">
                        <h4>${work.startDate} - Today | ${work.job}</h4>
                        <h1>${work.title}</h1>
                    </div>`
                } else {
                    workEl!.innerHTML +=
                    `<div class="item">
                        <h4>${work.startDate} - ${work.endDate} | ${work.job}</h4>
                        <h1>${work.title}</h1>
                    </div>`
                }
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
                        <img src="imgs/${website.image}" alt="Preview of ${website.title}">
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
websitesEl!.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;
    let item = target.parentNode as HTMLElement;
    let items = Array.from(currentTarget.querySelectorAll('.item-info')) as Array<HTMLElement>;
    let info = item.querySelector('.item-info') as HTMLDivElement;

    if (item.matches('div')) {

        if (info.style.display == "block") {

            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }

            info.style.display = "none";

        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }

            info.style.display = "block";
        }
        
    }
});