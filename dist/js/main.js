//* Hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
let toggle = false;
menuBtn.addEventListener('click', () => {
    if(!toggle) {
        menuBtn.classList.add('open');
        mobileMenu.classList.add('open');
        toggle = true;
    } else {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        toggle = false;
    }
});

//* Only if it matches screen size
const mediaDevice = window.matchMedia('(max-width: 1024px)');

//* Click events toggle ".item"
let itemOverlay = Array.from(document.querySelectorAll('.item'));

const clickEffect = (e) => {
    if('ontouchstart' in window &&(mediaDevice.matches)) {
        e.preventDefault();
        clicked = document.querySelector('.item.clicked');
        const unclicked = document.querySelectorAll('.item');
        if(unclicked){
            e.currentTarget.classList.add('clicked');
            clicked.classList.remove('clicked');
        }
    }
}

itemOverlay.forEach(node => {
    node.addEventListener('click', clickEffect)
});

//* Click events toggle ".process-icon"
const processIcon = Array.from(document.querySelectorAll('.process-icon'));

//*If icons are clicked they open and close
const iconClickEffect = (e) => {
    if('ontouchstart' in window &&(mediaDevice.matches)) {
        e.preventDefault();

        const clicked = document.querySelector('.process-icon.clicked');
        const unclicked = document.querySelectorAll('.process-icon:not(.clicked)');

        if(unclicked) {
            e.currentTarget.classList.add('clicked');
            toggle = true;
        }
        if(clicked) {
            clicked.classList.remove('clicked');
            toggle = false;
        }
    }
}

processIcon.forEach(node => {
    node.addEventListener('click', iconClickEffect);
});

//* Remove .clicked when anything else is clicked
document.body.addEventListener('click', function(e) {
    var el = e.target;
    const clicked = document.querySelector('.process-icon.clicked');
    if('ontouchstart' in window &&(mediaDevice.matches)) {
        do{
            if(el.classList && el.classList.contains('clicked')) {
                return;
            }
        } while (el = el.parentNode);
        clicked.classList.remove('clicked');
    }
});

//* Accessibility button
const accessBtn = document.querySelector('.accessibility');

accessBtn.addEventListener('click', (checkAllH1));

function checkAllH1() {
    var h1 = document.getElementsByTagName('h1');

    if (!toggle) {
        for(var i = 0; i < h1.length; i++ ) {
            var h1 = h1[i];
            h1.style.fontSize = "4rem";
            toggle = true;
        }
    }   else   {
        for(var i = 0; i < h1.length; i++ ) {
            var h1 = h1[i];
            h1.style.fontSize = "3rem";
            toggle = false;
        }
    }

    //* Changes font size for all h1
    for(var i = 0; i < h1.length; i++ ) {
        var h1 = h1[i];
        h1.style.fontSize = "64px";
    }
}

//* Recaptcha
window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
        if (el) { 
            el.setAttribute('required', 'required'); 
        } 
    }