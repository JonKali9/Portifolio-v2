const button = document.querySelector('#about-me button');
const skills = document.getElementsByClassName('skill');

button.addEventListener('click', event => {
    window.location = 'projects.html';
})
// Set Skill hrefs
skills[0].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/JavaScript'});
skills[1].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/HTML'});
skills[2].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/CSS'});
skills[3].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/Python'});
skills[4].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/Linux'});
skills[5].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/Github'});
skills[6].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/VS Code'});
skills[7].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29'});
skills[8].addEventListener('click', event => {window.location = 'https://en.wikipedia.org/wiki/API'});