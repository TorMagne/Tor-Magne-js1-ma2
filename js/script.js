// Question 1

const bgButton = document.querySelector('#bg');

function changeBg() {
  document.body.style.backgroundColor = 'green';
}

bgButton.addEventListener('click', changeBg);

// Question 2

const togglerButton = document.querySelector('.toggler');

function borderToggle() {
  const divBorder = document.querySelector('.togglee'); //flytt denne?
  divBorder.classList.toggle('extra');
}

togglerButton.addEventListener('click', borderToggle);

// Question 3

const dropdown = document.querySelector('select');
const paraContainer = document.querySelector('.paragraphs-container');

dropdown.onchange = function () {
  const value = this.value;

  paraContainer.innerHTML = '';

  for (let i = 1; i <= value; i++) {
    paraContainer.innerHTML += `<p class="content">This is a pharagraph</p>`;
  }
};

// Question 4

const character = document.querySelector('input');
const charCount = document.querySelector('.char-count b');

function outputValue() {
  const length = this.value.length;

  charCount.innerHTML = length;
}

character.onkeyup = outputValue;

// Question 5

function windowScroll() {
  const scrolledY = window.scrollY;

  if (scrolledY > 35) {
    document.body.classList.add('highlight');
  } else {
    document.body.classList.remove('highlight');
  }
}

window.addEventListener('scroll', windowScroll);
