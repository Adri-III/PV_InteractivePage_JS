// Projet Validant - JavaScript: Event.
// Fonctionnalité n°1 : 

var footer1 = document.querySelector('footer');
footer1.addEventListener('click', displayClick);

function displayClick() { 
  console.log("clique");
}


// Fonctionnalité n°1_Bis :
var footer1 = document.querySelector('footer');
var count = 1;
footer1.addEventListener('click', displayClick);

function displayClick() {
  console.log("clic numéro " + count);
  count +=1 ;
}


// Fonctionnalité n°2 :
var navbarHeader = document.getElementById('navbarHeader');
var hamburgerMenu = document.querySelector('button.navbar-toggler');

hamburgerMenu.addEventListener('click', balance);

function balance() {
  navbarHeader.classList.toggle("collapse");
}


// Fonctionnalité n°3 :
var cardFonct3 = document.getElementById('cardFonct3');
var editFonct3 = document.getElementById('editFonct3');

editFonct3.addEventListener('click', changeColor);

function changeColor() {
  textFonct3.style.color = 'red';
}


// Fonctionnalité n°4 :
var cardFonct4 = document.getElementById('cardFonct4');
var editFonct4 = document.getElementById('editFonct4');

editFonct4.addEventListener('click', changeColorBis);

function changeColorBis() {
  if (textFonct4.style.color === 'green') {
    textFonct4.style.color = 'black';
  } 
  else {
    textFonct4.style.color = 'green';
  }
}


// Fonctionnalité n°5 :
var navbar1 = document.querySelector('div.navbar');
var bootstrap = document.querySelector('link');
var navbar2 = document.querySelector('main');

navbar1.addEventListener('dblclick', hideNavbar);
navbar2.addEventListener('dblclick', showNavbar);

function hideNavbar() { 
  bootstrap.setAttribute('disabled', 'disabled');
}
function showNavbar() {
  bootstrap.removeAttribute("disabled");
}