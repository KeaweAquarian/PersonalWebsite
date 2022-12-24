//  To check traveller email if it is valid or not 

const submitBtn = document.getElementById('submitBtn');

// 
submitBtn.addEventListener("click", validateData);

function validateData() {
  const email = document.getElementById('mail1');
  const phone = document.getElementById('phone');
  ValidateEmail(email);
  phonenumber(phone)
}

function ValidateEmail(inputText) {


  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.bookForm.mail1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.bookForm.mail1.focus();
    return false;
  }
}

// to Validate phone number
function phonenumber(inputtxt)
{
 
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if((inputtxt.value.match(phoneno)))
        {
          alert("valid Phone Number");

      return true;
        }
      else
        {
        alert("Invalid Phone Number/format");
        return false;
        }
}


function myFunction(id) {
  var popup = document.getElementById("myPopup" + id);
  popup.classList.toggle("show");
}