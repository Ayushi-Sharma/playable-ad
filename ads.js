var isCapcicum = false,
  isMushroom = false,
  isBacon = false,
  isSauce = false,
  isCheese = false,
  isTutorial = true,
  isServePizza = false;

function initialize() {
  document.querySelector('#main').style.display = 'flex';
}

function gotoScene3() {
  document.querySelector('#scene2').style.display = 'none';
  document.querySelector('#download-section').style.display = 'flex';
}

function gotoScene2() {
  document.querySelector('#banner_still_character').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('#order_menu').style.display = 'flex';
  }, 1000);
  setTimeout(() => {
    document.querySelector('#banner').style.display = 'flex';
    document.querySelector('.hand').style.display = 'flex';
    document.querySelector('#tutorial_audio').play();
  }, 2000);
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#scene2').style.display = 'flex';
  document.querySelector('#download-section').style.display = 'none';
}

function add_sause() {
  document.getElementsByClassName('sause')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isSauce = true;
  serve_dish();
}

function add_cheese() {
  document.getElementsByClassName('cheese')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isCheese = true;
  serve_dish();
}

function add_bacon() {
  document.getElementsByClassName('bacon')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isBacon = true;
  serve_dish();
}

function add_capsicum() {
  document.getElementsByClassName('capsicum')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isCapcicum = true;
  serve_dish();
}

function add_mushroom() {
  document.getElementsByClassName('mushroom')[0].className += ' ingredient-add';
  document.querySelector('#ingredient_audio').play();
  isMushroom = true;
  serve_dish();
}

function end_tutorial() {
  if (isTutorial) {
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
  document.querySelector('#customer_happy').play();
  setTimeout(() => {
    document.querySelector('#banner_gif').style.display = 'none';
    document.querySelector('#banner_still_character').style.display = 'flex';
  }, 1000);
}

function serve_dish() {
  if (isServePizza) {
    serve_pizza();
  }
  if (
    isCapcicum &&
    isMushroom &&
    isBacon &&
    isSauce &&
    isCheese &&
    !isServePizza
  ) {
    document.querySelector('.hand_end_game').style.display = 'flex';
    isServePizza = true;
  }
}

function serve_pizza() {
  animate_character();
  document.querySelector('#banner_still_character').style.display = 'none';
  document.querySelector('#banner_gif').style.display = 'flex';
  document.querySelector('.hand_end_game').style.display = 'none';
  document.getElementsByClassName('pizza_division')[0].className +=
    ' pizza_animate';
  setTimeout(gotoScene3, 1500);
}

document.querySelector('#main').style.display = 'none';
document.querySelector('#scene2').style.display = 'none';
document.querySelector('#download-section').style.display = 'none';
document.querySelector('.hand').style.display = 'none';
document.querySelector('.hand_end_game').style.display = 'none';
document.querySelector('#order_menu').style.display = 'none';
document.querySelector('#banner').style.display = 'none';
document.querySelector('#banner_gif').style.display = 'none';

setTimeout(initialize, 500);
setTimeout(gotoScene2, 4500);
