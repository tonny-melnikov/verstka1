window.onload = function() {
  fixSize();
  window.addEventListener('resize', fixSize);
};

function fixSize() {
  var windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var inputH = document.getElementById('inputarea').offsetHeight;
  var navbarH = document.getElementById('navbar').offsetHeight;
  var hei = (windowH - inputH - navbarH) + 'px';
  document.getElementById('chat').style.height = hei;
  document.getElementById('chat').style.maxHeight = hei;
}