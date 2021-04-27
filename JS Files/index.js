const title = document.querySelector('#content h1');
const button = document.querySelector('#content button');

setInterval(() => {
    const lastChar = title.innerHTML[title.innerHTML.length-1];
    if (lastChar === '_') {
        title.innerHTML = './JonKali';
    } else {
        title.innerHTML = './JonKali_';
    }
}, 600)

button.addEventListener('click', event => {
    window.location = 'about-me.html';
})