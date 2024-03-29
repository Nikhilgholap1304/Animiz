//scroll to hide

//dark mode
const body = document.body;
const tog = () => {
  const icon = document.getElementById('icon');
  icon.classList.toggle("bi-moon-fill");
  body.classList.toggle("dark_theme");
  localStorage.setItem('theme', body.classList.contains('dark_theme') ? 'dark' : 'light');
  localStorage.setItem('icon', icon.classList.contains('bi-moon-fill') ? 'moon' : 'sun');
}
// Retrieve user preference for theme and icon from localStorage
const storedTheme = localStorage.getItem('theme');
const storedIcon = localStorage.getItem('icon');
const icon = document.getElementById('icon');

if (storedTheme) {
  // Set the theme based on the user's stored preference
  body.classList.add(storedTheme);

  // Set the icon based on the user's stored preference
  if (storedIcon === 'moon') {
    body.classList.add('dark_theme');
    icon.classList.add('bi-moon-fill');
  } else if (storedIcon === 'sun') {
    body.classList.remove('dark_theme');
    icon.classList.remove('bi-moon-fill');
  }
}

//slider

const pages = document.querySelectorAll('.page');
let counter = 0;
const numPages = pages.length;
let timer = null;

pages.forEach((page, i) => {
  page.style.left = `${i * 100}%`;
});

const goNext = () => {
  counter++;
  slideimage();
}

const goPrev = () => {
  counter--;
  slideimage();
}

const slideimage = () => {
  if (counter < 0) {
    counter = numPages - 1;
  } else if (counter >= numPages) {
    counter = 0;
  }

  pages.forEach((page) => {
    page.style.transform = `translateX(-${counter * 100}%)`;
  });
  resetTimer();
}
const resetTimer = () => {
  if (timer !== null) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    counter++;
    slideimage();
  }, 5000);
}

resetTimer();

//hiding the header functionality not working
//for scroll top and hide header

let prevScrollpos = window.pageYOffset;
let mybutton = document.getElementById("btn_up");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".head").classList.remove("hidden");
  } else {
    document.querySelector(".head").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.opacity = "1";
    mybutton.style.transform = "translateY(0)";
    mybutton.style.transition = "0.3s";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.transform = "translateY(100px)";
    mybutton.style.transition = "0.3s";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.style.opacity = "0";
  mybutton.style.transform = "translateY(100px)";
  document.querySelector(".head").classList.remove("hidden");
}
//working

var toggler = document.getElementById('toggler');
var navbar = document.getElementById('navbar');

// if(toggler.checked = false){
//   document.getElementsByClassName('slider').style.filter = "brightness(1)";
// }
// else if(toggler.checked = true){
//   document.getElementsByClassName('slider').style.filter = "brightness(0.5)";
// }
document.addEventListener('click', function (event) {
  if (navbar.contains(event.target) && toggler.checked) {
    toggler.checked = true;
  }
  else if(!toggler.checked && !navbar.contains(event.target)){
    toggler.checked = false;
  }
});

//for home loading more

const sub_boxes = document.querySelectorAll('.sub_boxes');
const load = document.getElementById('load_m');
let index = 0;

for (let j = 5; j < sub_boxes.length; j++) {
  sub_boxes[j].style.display = 'none';
  sub_boxes[j].style.opacity = '0';
  sub_boxes[j].style.transform = 'translateY(10rem)';
}

load.addEventListener('click', () => {
  for (let j = index + 5; j < index + 6; j++) {
    sub_boxes[j].style.display = 'flex';
    sub_boxes[j].style.transition = '0.5s ease-in';
    sub_boxes[j].style.opacity = '1';
    sub_boxes[j].style.transform = 'translateY(0)';
  }

  // update current index
  index += 1;

  // disable load button when all cards have been displayed
  if (index >= sub_boxes.length - 5) {
    more.style.display = 'none';
    load.style.display = 'none';
  }
});


