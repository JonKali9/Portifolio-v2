const button = document.querySelector('#about-me button');
const skills = document.getElementsByClassName('skill');

button.addEventListener('click', event => {
    window.location = 'projects.html';
})

// Set Skill hrefs
skills[0].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/JavaScript', '_blank')});
skills[1].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/HTML', '_blank')});
skills[3].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/Python', '_blank')});
skills[2].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/CSS', '_blank')});
skills[4].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/Linux', '_blank')});
skills[5].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/Github', '_blank')});
skills[6].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/VS Code', '_blank')});
skills[7].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29', '_blank')});
skills[8].addEventListener('click', event => {window.open('https://en.wikipedia.org/wiki/API', '_blank')});