// let amountUSD2 = 234.44;
// let amountUAH2 = amountUSD2 * rate;
// console.log('Amount = ' + amountUAH2);

// function calculateAmountUAH(amountUSD, rate) {
//   let amountUAH = amountUSD * rate;
//   console.log(amountUSD);
//   console.log(amountUAH);
// }

function onDocumentReady() {
  console.log('Document Loaded!!!');
  var btn = document.getElementById('mybutton');
  btn.addEventListener('click', onButtonClick);

  var btn2 = document.getElementById('mybutton2');
  btn2.addEventListener('click', onButton2Click);

  var btn3 = document.getElementById('mybutton3');
  btn3.addEventListener('click', onButton3Click);
}

function onButtonClick() {
  SaySomething('Vika', 'Good night');
}
function onButton2Click() {
  var el = document.getElementById('username');
  el.classList.remove('modern');
  el.classList.add('beautiful');
  //   el.style.color = 'purple';
  //   el.style.background = 'black';
  //   el.style.fontSize = '5rem';
  //   el.style.textAlign = 'center';
}
function onButton3Click() {
  var el = document.getElementById('username');
  el.classList.remove('beautiful');

  el.classList.add('modern');
  //   el.style.color = 'purple';
  //   el.style.background = 'black';
  //   el.style.fontSize = '5rem';
  //   el.style.textAlign = 'center';
}
function SaySomething(firstName, message) {
  var userNameElement = document.getElementById('username');

  var txt = message + ', ' + firstName + '!';
  userNameElement.innerText = txt;
}

document.addEventListener('DOMContentLoaded', onDocumentReady);

// SayHi('Vika');
// SayHi('Yura');
