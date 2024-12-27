//  A bit of js for dark mode (the toggle button are on the header part {the ClintLAB Logo} ) 
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
}