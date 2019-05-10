function gotoScene3() {
  document.querySelector('#scene2').style.display = 'none';
  document.querySelector('#download-section').style.display = 'flex';
  document.getElementById('download-now').addClass('animated bounceInUp');
}

function gotoScene2() {
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#scene2').style.display = 'flex';
  document.querySelector('#download-section').style.display = 'none';

  document.getElementById('hand').addClass('animated bounceInLeft');
  document.getElementById('plate').addClass('animated bounceInUp');
  document.getElementById('dough').style.display='block';
}
// document.querySelector('#main').style.display = 'none';
document.querySelector('#scene2').style.display = 'none';
setTimeout(gotoScene2, 4000);
setTimeout(gotoScene3, 6000);
