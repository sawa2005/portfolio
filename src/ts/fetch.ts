"use strict"

// Variabler
let studiesEl = document.getElementById("studies");
let workEl = document.getElementById("work");
let websitesEl = document.getElementById("websites");

// Funktioner
function getCourses() {
    // Återställ kurslistan
    studiesEl!.innerHTML = '';

    fetch('https://samuelwarduppgifter.one/restprojekt/studies.php')
        .then(response => response.json())
        .then(data => {
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

function getJobs() {
    workEl!.innerHTML = '';

    fetch('https://samuelwarduppgifter.one/restprojekt/work.php')
        .then(response => response.json())
        .then(data => {
            data.sort(sortByDate);
            data.forEach((work: any) => {
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

function sortByDate(a: any, b: any) {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

function sortByYear(a: any, b: any) {
    return b.year - a.year;
}

window.addEventListener('load',() => {    
    getCourses();
    getJobs();
    getWebsites();
});