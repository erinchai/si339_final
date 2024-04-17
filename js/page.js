function myFunction() {
    var element = document.body;
    var nav = document.nav;
    element.classList.toggle("dark-mode");
    localStorage.setItem('darkModeEnabled', document.body.classList.contains('dark-mode'));
 }


function SecondFunction() {
    var element = document.body;
    var nav = document.nav;
    element.classList.toggle("dark-mode");
    localStorage.setItem('darkModeEnabled', document.body.classList.contains('dark-mode'));
 }


   var darkModeEnabled = localStorage.getItem('darkModeEnabled');
   if (darkModeEnabled === 'true') {
     document.body.classList.add('dark-mode');
   }


var button = document.querySelector("button")
var Clicked = false;
button.addEventListener('click', function() {
    Clicked = !Clicked;
    if (Clicked) {
        button.textContent = 'Light Mode';
      } else {
        button.textContent = 'Dark Mode';
      }
    });

