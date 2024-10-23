var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var menuItems = document.querySelectorAll('#menu a');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    burgerMenu.classList.remove("close");  
    overlay.classList.remove("overlay");   
  });
});