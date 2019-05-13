var isCapcicum = false,
  isMushroom = false,
  isBacon = false,
  isSauce = false,
  isCheese = false;

function initialize() {
  document.querySelector('#main').style.display = 'flex';
  // document.querySelector('#tutorial_audio').play();
}

function gotoScene3() {
  document.querySelector('#scene2').style.display = 'none';
  document.querySelector('#download-section').style.display = 'flex';
  document.getElementById('download-now').addClass('animated bounceInUp');
}

function gotoScene2() {
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#scene2').style.display = 'flex';
  document.querySelector('#download-section').style.display = 'none';
  document.querySelector('#tutorial_audio').play();
}

function add_sause() {
  document.getElementsByClassName('sause')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isSauce = true;
}

function add_cheese() {
  document.getElementsByClassName('cheese')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isCheese = false;
}

function add_bacon() {
  document.getElementsByClassName('bacon')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isBacon = false;
}

function add_capsicum() {
  document.getElementsByClassName('capsicum')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isCapcicum = false;
}

function add_mushroom() {
  document.getElementsByClassName('mushroom')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isMushroom = false;
}

function end_tutorial() {
  document.querySelector('.hand').style.display = 'none';
}

function tutorial_sound() {
  document.querySelector('#tutorial_sound').style.allow = 'autoplay';
}

document.querySelector('#main').style.display = 'none';
document.querySelector('#scene2').style.display = 'none';
document.querySelector('#download-section').style.display = 'none';
setTimeout(initialize, 500);
setTimeout(gotoScene2, 500);
// setTimeout(tutorial_sound, 4000);

if (isCapcicum && isMushroom && isBacon && isSauce && isCheese) {
  gotoScene3();
}
