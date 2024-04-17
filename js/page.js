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

   // Check if dark mode preference is stored in localStorage
   var darkModeEnabled = localStorage.getItem('darkModeEnabled');
   if (darkModeEnabled === 'true') {
     // Apply dark mode if the preference is true
     document.body.classList.add('dark-mode');
   }