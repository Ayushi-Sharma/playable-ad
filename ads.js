var isCapcicum = false,
  isMushroom = false,
  isBacon = false,
  isSauce = false,
  isCheese = false,
  isTutorial = true;

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
  isCheese = true;
}

function add_bacon() {
  document.getElementsByClassName('bacon')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isBacon = true;
}

function add_capsicum() {
  document.getElementsByClassName('capsicum')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isCapcicum = true;
}

function add_mushroom() {
  document.getElementsByClassName('mushroom')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isMushroom = true;
}

function end_tutorial() {
  if (isTutorial) {
    animate_character();
    document.querySelector('.hand').style.display = 'none';
    document.querySelector('#banner').style.display = 'none';
    isTutorial = false;
  }
}

function tutorial_sound() {
  document.querySelector('#tutorial_sound').style.allow = 'autoplay';
}

function goToDownloadLink() {
  document.getElementById('dl-link').click();
}

function animate_character() {
  document.querySelector('#banner_gif').style.display = 'flex';
  document.querySelector('#banner_still_character').style.display = 'none';
  setTimeout(() => {
    document.querySelector('#banner_gif').style.display = 'none';
    document.querySelector('#banner_still_character').style.display = 'flex';
  }, 1000);
}

function end_game() {
  if (isCapcicum && isMushroom && isBacon && isSauce && isCheese) {
    animate_character();
    setTimeout(gotoScene3, 1500);
  }
}

document.querySelector('#main').style.display = 'none';
document.querySelector('#scene2').style.display = 'none';
document.querySelector('#download-section').style.display = 'none';
document.querySelector('#banner_gif').style.display = 'none';
document.querySelector('#banner_still_character').style.display = 'none';

setTimeout(initialize, 500);
setTimeout(gotoScene2, 4500);
// setTimeout(tutorial_sound, 4000);
