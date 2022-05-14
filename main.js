// Start Setting Box

// check If There's Local Storage Color Option   
let mainColors = localStorage.getItem("color-option");

if(mainColors !== null) {


    document.documentElement.style.setProperty('--main-color-backgrond', mainColors);


    // Remove Active Class From All Childrens
    document.querySelectorAll(".changing-color li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class On Element
        if(element.dataset.color === mainColors) {

            // Add Active Class
            element.classList.add("active");

        };
    });


};

// Random Background Option
let backgroundOption = true;

// Variable To Randomiza Background Imgs 
let backgroundInterval;



// check If There's Local Storang Random Background
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background 
if (backgroundLocalItem !== null) {


    if(backgroundLocalItem === 'true') {

        backgroundOption = true;

    }else{
        backgroundOption = false;
    }

    // Remove Active 
    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove('active');

    });

    if(backgroundLocalItem === 'true') {

        document.querySelector(".random-background .yes").classList.add("active");

    }else {

        document.querySelector(".random-background .no").classList.add("active");

    }

}




// Toggle Settinrs spin 

document.querySelector('.toggle-settings .fa-gear').onclick = function () {

    this.classList.toggle('fa-spin');

    document.querySelector('.setting-box').classList.toggle('open');

};

// Switch colors

const colorsLi = document.querySelectorAll('.changing-color li')

// Loop On List
colorsLi.forEach(li => {

    // Click On Every List 
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty("--main-color-backgrond", e.target.dataset.color);
        // Set Color On Local Storage 
        localStorage.setItem("color-option", e.target.dataset.color);
        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });
        // Remove Active Class On Self 
        e.target.classList.add("active");
    })

})


// Switch Random Background

const randomBackEl = document.querySelectorAll('.random-background span')

// Loop On All Span
randomBackEl.forEach(span => {

    // Click On Every Span 
    span.addEventListener("click", (e) => {

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });
        // Remove Active Class On Self 
        e.target.classList.add("active");

        
    // Add Active Class On Self 
    if (e.target.dataset.background === 'yes') {

        backgroundOption = true;

        randomizeImgs();

        localStorage.setItem("background_option", true);
        
    }else{

        backgroundOption = false;

        clearInterval(backgroundInterval);

        localStorage.setItem("background_option", false);
    }
    });



});

// End Setting Box

// Start links mega menu Create

function test() {
    document.getElementById('mega').style.height= "57%";  
}
function cloo() {
    document.getElementById('mega').style.height= "0%"; 
}

// End links mega menu Create

// Start links mega menu Login

function navOpen() {
    document.getElementById('nav').style.left= "0"; 
}
function navClose() {
    document.getElementById('nav').style.left= "-250px"; 
}

// End links mega menu Login

// Start links mega menu Site Map

function siteMap() {
    document.getElementById('sitemap').style.height= "100%"; 
}
function closeMap() {
    document.getElementById('sitemap').style.height= "0%"; 
}

// End links mega menu Site Map 

// Start mega menu 
const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault(); 


    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email);
    }
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const fromControl = input.parentElement;
    const small = fromControl.querySelector('small');

    fromControl.className = 'from-control error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const fromControl = input.parentElement;
    fromControl.className = 'from-control success';
}
// End mega menu 

// Start Book Now

function openNav() {
    document.getElementById('mysidenav').style.height="60%"; 
    document.getElementById('main').style.height="60%"; 
}
function closeNav() {
    document.getElementById('mysidenav').style.height="0%"; 
    document.getElementById('main').style.height="0%"; 
}

// End Book Now


// Start Landing Page 
let landing = document.querySelector(".landing");

let imgsArray = ["toristt.jpg", "toristt (2).jpg", "toristt(4).jpg", "toristt (5).jpg", "toristt (3).jpg"];



function randomizeImgs() {


    if(backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            landing.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        }, 7000);
        

    }

};

randomizeImgs()
// End Landing Page 



// Start Museums
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 4000);
// End Museums

// Start reveal
window.addEventListener('scroll', reveal);

function reveal(){

    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
// End reveal
