//let searchbtn = document.querySelector('#search-btn');
//let searchbar = document.querySelector('.search-bar');
let loginbtn = document.querySelector('#login');
let formbtn = document.querySelector('.login-form');
let closebtn = document.querySelector('#close-btn');
let menubtn = document.querySelector('#menu-bar');
let menulist = document.querySelector('.menulist');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');


// searchbtn.addEventListener('click', () =>{
//     searchbtn.classList.toggle('fa-times');
//     searchbar.classList.toggle('active'); 
// });

loginbtn.addEventListener('click', () => {
    formbtn.classList.add('active');
})
closebtn.addEventListener('click', () => {
    formbtn.classList.remove('active'); 
})

menubtn.addEventListener('click', () =>{
    menubtn.classList.toggle('fa-times')
    menulist.classList.toggle('active'); 
})

box1.onended = function() {
    box2.play();
    box1.style.opacity=0;
    box2.style.opacity=1;
}
box2.onended = function() {
    box3.play();
    box2.style.opacity=0;
    box3.style.opacity=1;
}
box3.onended = function() {
    box4.play();
    box3.style.opacity=0;
    box4.style.opacity=1;
}
box4.onended = function() {
    box1.play();
    box4.style.opacity=0;
    box1.style.opacity=1;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

