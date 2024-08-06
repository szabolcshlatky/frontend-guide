'use strict';

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

const h1 = $$('h1');
const img = $$('img');
const btn = $$('.btn');

h1.addEventListener('click', () => {
  alert('Hello World!');
});

img.addEventListener('click', () => {
  const imgSrc = img.getAttribute('src');
  if (imgSrc === 'images/jawascript.png') {
    img.setAttribute('src', 'images/javascript.png');
    img.setAttribute('alt', 'JavaScript logo featuring a stylized red and blue coffee cup with steam, and the word ˝JavaScript˝ written below in red letters.');
  } else {
    img.setAttribute('src', 'images/jawascript.png');
    img.setAttribute('alt', 'Illustration of a character resembling a Jawa from Star Wars, dressed in a brown hooded robe with glowing yellow eyes, standing against a dark textured background with JavaScript code snippets. The text ˝JAWASCRIPT PROFESSIONAL˝ is written below the character.');
  }
});

/*
function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  btn.textContent = `Hello, ${myName}`;
}
UPDATED TO THIS: */

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    btn.textContent = `Engineer: ${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  btn.textContent = `Engineer: ${storedName}`;
}

btn.onclick = () => {
  setUserName();
};
