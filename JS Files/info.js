const button = document.querySelector('#experience button');
const resources = document.getElementsByClassName('resource')

//Make button work when click!!!!!!!
button.addEventListener('click', event => {
    window.location = 'contact-me.html';
})

//Make resource things do things
resources[0].addEventListener('click', () => {window.open('https://www.codecademy.com/', '_blank')});
resources[1].addEventListener('click', () => {window.open('https://www.codewars.com/', '_blank')});
resources[2].addEventListener('click', () => {window.open('https://www.freecodecamp.org/', '_blank')});
resources[3].addEventListener('click', () => {window.open('https://replit.com/', '_blank')});
resources[4].addEventListener('click', () => {window.open('https://www.tryhackme.com/', '_blank')});
resources[5].addEventListener('click', () => {window.open('https://teamtreehouse.com/', '_blank')});
resources[6].addEventListener('click', () => {window.open('https://www.udemy.com/', '_blank')});
resources[7].addEventListener('click', () => {window.open('https://www.w3schools.com/', '_blank')});
resources[8].addEventListener('click', () => {window.open('https://www.youtube.com/', '_blank')});