/**
 CSS script document for header and footer.
developed by Keawe Aquarian 260351368, Magda Prieto 261067065, Qi Yao 261051100
script date Nov,  2022
*/



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
      window.location.href = "Destinations-EN.html#myPopup13";
      break;
    case "Portugal":
      window.location.href = "Destinations-EN.html#myPopup16";
      break;
    case "Thailand":
      window.location.href = "Destinations-EN.html#myPopup18";
      break;
      case "Australie":
        window.location.href = "Destinations_FR.html";
        break;
      case "Caraïbes":
        window.location.href = "Destinations_FR.html#myPopup4";
        break;
      case "Grèce":
        window.location.href = "Destinations_FR.html#myPopup6";
        break;
      case "Italie":
        window.location.href = "Destinations_FR.html#myPopup10";
        break;
      case "Maldives":
        window.location.href = "Destinations_FR.htmlmyPopup13";
        break;
      case "le Portugal":
        window.location.href = "Destinations_FR.html#myPopup16";
        break;
      case "Thaïlande":
        window.location.href = "Destinations_FR.html#myPopup18";
        break;
    default:
    // code block
  }

}
