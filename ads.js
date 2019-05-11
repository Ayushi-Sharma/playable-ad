function gotoScene3() {
  document.querySelector('#scene2').style.display = 'none';
  document.querySelector('#download-section').style.display = 'flex';
  document.getElementById('download-now').addClass('animated bounceInUp');
}

function gotoScene2() {
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#scene2').style.display = 'flex';
  document.querySelector('#download-section').style.display = 'none';

  // document.getElementById('hand').addClass('animated bounceInLeft');
  // document.getElementById('plate').addClass('animated bounceInUp');
  document.getElementsByClassName('dough')[0].className += " dough-add";
  document.getElementsByClassName('bacon')[0].className += " bacon-add";
  document.getElementsByClassName('capsicum')[0].className += " capsicum-add";
  document.getElementsByClassName('mushroom')[0].className += " mushroom-add";
  document.getElementsByClassName('cheese')[0].className += " cheese-add";
  document.getElementsByClassName('sause')[0].className += " sause-add";
}
// document.querySelector('#main').style.display = 'none';
document.querySelector('#scene2').style.display = 'none';
setTimeout(gotoScene2, 4000);
setTimeout(gotoScene3, 6000);
