const title = document.querySelector('#content h1');
const button = document.querySelector('#content button');

setInterval(() => {
    const lastChar = title.innerHTML[title.innerHTML.length-1];
    if (lastChar === '_') {
        title.innerHTML = title.innerHTML.substring(0, title.innerHTML.length-1);
    } else {
        title.innerHTML += '_';
    }
}, 600)

button.addEventListener('click', event => {
    window.location = 'about-me.html';
})