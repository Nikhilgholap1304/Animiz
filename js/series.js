//for anime series


const boxes = document.querySelectorAll('.box_element');
const loadBtn = document.getElementById('load_more');
const img_cont1 = document.querySelectorAll('.img_cont');
// initialize current index to 0
let currentIndex = 0;

// hide all cards except for the first two
for (let i = 10; i < boxes.length; i++) {
  boxes[i].style.visibility = 'hidden';
  boxes[i].style.margin = 'auto';
  boxes[i].style.height = '0';
  boxes[i].style.opacity = '0';
  boxes[i].style.transform = 'translateY(10rem)';
  img_cont1[i].style.marginTop = '0';
}



// add event listener to load button
loadBtn.addEventListener('click', () => {
  // show the next two cards
  for (let i = currentIndex + 10; i < currentIndex + 12; i++) {
    // if (window.matchMedia("(max-width: 580px)").matches) {
    //   boxes[i].style.display = 'block';
    // } else {
    //   boxes[i].style.display = 'flex';
    // }
    boxes[i].style.visibility = 'visible';
    boxes[i].style.height = 'auto';
    boxes[i].style.transition = '0.5s ease-in';
    boxes[i].style.opacity = '1';
    boxes[i].style.transform = 'translateY(0)';
    boxes[i].style.marginTop = '2.5rem';
    img_cont1[i].style.marginTop = '1.5rem';
  }

  // update current index
  currentIndex += 2;

  // disable load button when all cards have been displayed
  if (currentIndex >= boxes.length - 10) {
    loadBtn.style.display = 'none';
  }
});

if (window.matchMedia("(max-width: 580px)").matches) {
  boxes.style.display = 'block';
} else {
  boxes.style.display = 'flex';
}

if (window.matchMedia("(max-width: 580px)").matches) {
   img_cont1.style.marginTop = '0';
}

////