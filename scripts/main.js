
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Who are you?', 'anonymous');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName;
}

myButton.addEventListener('click', () => {
    setUserName();
});

let index = 0;
let myImg = document.querySelector('img');
myImg.onclick = function () {
    let imgSrcs = [
        'resources/icons/Google_Chrome-Logo.wine.png',
        'resources/icons/Firefox-Logo.wine.png',
        'resources/icons/Microsoft_Edge-New-Logo.wine.png',
        'resources/icons/Safari_(web_browser)-Logo.wine.png',
    ];
    myImg.setAttribute('src', imgSrcs[index]);
    if (++index >= imgSrcs.length) {
        index = 0;
    }
}