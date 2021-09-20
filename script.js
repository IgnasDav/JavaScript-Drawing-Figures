'use strict';

const btnAll = document.querySelector('.main__btns');
const btnTriangle = document.querySelector('.btn--triangle');
const btnPyramid = document.querySelector('.btn--pyramid');
const btnReversePyramid = document.querySelector('.btn--reverse--pyramid');
const btnClear = document.querySelector('.btn--clear');
const star = document.querySelector('.fa-star');
const btnDiamond = document.querySelector('.btn--diamond');
const figure = document.querySelector('.figure');
const numInput = document.querySelector('.main__number');

//1) Draw a triangle
function drawTriangle() {
  const rows = numInput.value;
  let string = '';
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= i; j++) {
      string += '*';
    }
    string += '<br>';
  }
  figure.innerHTML += `<pre>${string}</pre>`;
}
//2) Draw a Pyramid
function drawPyramid() {
  const rows = numInput.value;
  let string = '';
  for (let i = 0; i <= rows; i++) {
    for (let j = rows; j > i; j--) {
      string += ' ';
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      string += '*';
    }
    string += '<br>';
  }
  figure.innerHTML += `<pre>${string}</pre>`;
}

//3) Draw a reversed pyramid
function drawReversedPyramid() {
  const rows = numInput.value;
  let string = '';
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      string += ' ';
    }
    for (let k = 0; k < (rows - i) * 2 - 1; k++) {
      string += '*';
    }
    string += '\n';
  }
  figure.innerHTML += `<pre>${string}</pre>`;
}
// 5) Draw diamond
function drawDiamond() {
  const rows = numInput.value;
  let string = '';
  for (let i = 0; i <= rows; i++) {
    for (let j = rows; j > i; j--) {
      string += ' ';
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      string += '*';
    }
    string += '\n';
  }
  for (let i = 0; i <= rows - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += ' ';
    }
    for (let k = (rows - i) * 2 - 1; k > 0; k--) {
      string += '*';
    }
    string += '\n';
  }
  figure.innerHTML += `<pre>${string}</pre>`;
}
//6) Clearing values
function clear() {
  figure.innerHTML = '';
  numInput.value = '';
}

//5)Insert the value using the selector
btnTriangle.addEventListener('click', drawTriangle);
btnPyramid.addEventListener('click', drawPyramid);
btnReversePyramid.addEventListener('click', drawReversedPyramid);
btnClear.addEventListener('click', clear);
btnDiamond.addEventListener('click', drawDiamond);

if (btnTriangle) {
  btnTriangle.addEventListener('click', drawTriangle);
} else if (btnPyramid.onclick) {
  btnPyramid.addEventListener('click', drawPyramid);
} else if (btnReversePyramid) {
  btnReversePyramid.addEventListener('click', drawReversedPyramid);
} else if (btnClear) {
  btnClear.addEventListener('click', clear);
}
