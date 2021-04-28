const text = document.getElementById('text');
const underscore = document.getElementById('underscore');
const button = document.querySelector('#content button');

//Function to write name
const writeName = speed => {
    setTimeout(() => {
        text.innerHTML = './J';
        setTimeout(() => {
            text.innerHTML = './Jo';
            setTimeout(() => {
                text.innerHTML = './Jon';
                setTimeout(() => {
                    text.innerHTML = './JonK';
                    setTimeout(() => {
                        text.innerHTML = './JonKa';
                        setTimeout(() => {
                            text.innerHTML = './JonKal';
                            setTimeout(() => {
                                text.innerHTML = './JonKali';
                            }, speed);
                        }, speed);
                    }, speed);
                }, speed);
            }, speed);
        }, speed);
    }, speed);
}
//Function to clear name
const clearName = speed => {
    setTimeout(() => {
        text.innerHTML = './JonKali';
        setTimeout(() => {
            text.innerHTML = './JonKal';
            setTimeout(() => {
                text.innerHTML = './JonKa';
                setTimeout(() => {
                    text.innerHTML = './JonK';
                    setTimeout(() => {
                        text.innerHTML = './Jon';
                        setTimeout(() => {
                            text.innerHTML = './Jo';
                            setTimeout(() => {
                                text.innerHTML = './J';
                                setTimeout(() => {
                                    text.innerHTML = './';
                                    }, speed);
                                }, speed);
                            }, speed);
                        }, speed);
                    }, speed);
                }, speed);
            }, speed);
        }, speed);
}

//Actually do the animation
setTimeout(() => {
    writeName(250);
    setTimeout(() => {
        clearName(300);
    }, 6500);
}, 1000);

setInterval(() => {
    setTimeout(() => {
        writeName(250);
        setTimeout(() => {
            clearName(300);
        }, 6500);
    }, 500);
}, 12500);

//Animation for the underscore
setInterval(() => {
    if (underscore.innerHTML === '_') underscore.innerHTML = '';
    else underscore.innerHTML = '_';
}, 800);

button.addEventListener('click', event => {
    window.location = 'about-me.html';
})