/**
 CSS script document for home.html.
developed by Keawe Aquarian 260351368, Magda Prieto 261067065, Qi Yao 261051100
script date Nov,  2022
*/

// Headroom.js
// https://github.com/WickyNilliams/headroom.js
var myElement = document.querySelector("header");

var headroom  = new Headroom(myElement, {
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
    "notTop" : "not-top",
  }
});

headroom.init();

window.addEventListener('scroll', function() {
  if (window.pageYOffset === 0) {
    myElement.classList.remove('slideDown')
  }
})


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openPhoneMessage() {
  let phonePopUp = document.getElementById("phonePopUp");
  phonePopUp.classList.add("openMessage");
}

function closePhoneMessage() {
  let phonePopUp = document.getElementById("phonePopUp");
  phonePopUp.classList.remove("openMessage");
}

function handleSelect(elm) {
  switch (elm) {
    case "Australia":
      window.location.href = "Destinations-EN.html";
      break;
    case "Caribbean":
      window.location.href = "Destinations-EN.html#myPopup4";
      break;
    case "Greece":
      window.location.href = "Destinations-EN.html#myPopup6";
      break;
    case "Italy":
      window.location.href = "Destinations-EN.html#myPopup10";
      break;
    case "Maldives":
      window.location.href = "Destinations-EN.htmlmyPopup13";
      break;
    case "Portugal":
      window.location.href = "Destinations-EN.html#myPopup16";
      break;
    case "Thailand":
      window.location.href = "Destinations-EN.html#myPopup18";
      break;
    default:
    // code block
  }

}

function myFunction(id) {
  var popup = document.getElementById("myPopup" + id);
  popup.classList.toggle("show");
}
