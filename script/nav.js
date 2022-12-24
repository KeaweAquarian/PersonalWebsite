/**
 CSS script document for home.html.
developed by Keawe Aquarian 260351368, Magda Prieto 261067065, Qi Yao 261051100
script date Nov,  2022
*/



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 
  
  function openPhoneMessage(){
    let phonePopUp = document.getElementById("phonePopUp");
    phonePopUp.classList.add("openMessage");
  }

  function closePhoneMessage(){
    let phonePopUp = document.getElementById("phonePopUp");
    phonePopUp.classList.remove("openMessage");
  }
