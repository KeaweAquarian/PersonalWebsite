/**
 CSS script document for home.html.
developed by Keawe Aquarian
script date Nov,  2022
*/


var myElement = document.querySelector("header");

var headroom = new Headroom(myElement, {
    "offset": 220,
    "tolerance": {
        up: 0,
        down: 0
    },
    "classes": {
        "initial": "header--fixed",
        "pinned": "slideDown",
        "unpinned": "slideUp",
        "top": "top",
        "notTop": "not-top",
    }
});

headroom.init();

window.addEventListener('scroll', function () {
    if (window.pageYOffset === 0) {
        myElement.classList.remove('slideDown')
    }
})

var nav = document.getElementById("nav");
function showMenu(){
  nav.style.right = "0";
}
function hideMenu(){
  nav.style.right = "-200px";
}


function myFunction(id) {
  var popup = document.getElementById("myPopup" + id);
  popup.classList.toggle("show");
}
