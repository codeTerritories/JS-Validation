const form = document.querySelector("form");

const fName = document.getElementById("name");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const address = document.getElementById("address");
const state = document.getElementById("state");
const pin = document.getElementById("pincode");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const concode = document.getElementById("cocode");
const code = document.getElementById("countrycode");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const idtype = document.getElementById("identity");
const cardno = document.getElementById("card");

var fnreg = /^[A-Z][a-zA-Z- ]{3,8}$/;
var lnreg = /^[^\s]+[! A-Za-z ]{2,30}$/;
// var emreg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var emreg =
  /^[^@\s]+@((?!subdomain\.com\.com)(?:(?!co\.in|ac\.in|gov\.in|org\.in)[^.\s])+\.([^.\s]{2,}|co\.in|ac\.in|gov\.in|org\.in))$/;
var birthreg =
  /^(0[1-9]|[12][0-9]|3[01])[-./](0[1-9]|1[0-2])[-./](19[0-9]{2}|20[0-2][0-3])$/;

var addreg = /^[a-zA-Z0-9\s\-\#\.]+$/;
var statreg = /^[A-Z][a-zA-Z- ]{2,8}$/;

var pinreg1 = /^[1-9][0-9]{5}$/;
// var pinreg2=/^\d{5}(?:[-\s]\d{4})?$/;
// var pinreg3=/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
// var pinreg4=/^^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/;
var passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
var phreg = /^[0-9]+$/;
var counreg = /[A-Za-z]+/;

fName.onkeyup = function () {
  fnameVal();
};
lName.onkeyup = function () {
  lnameVal();
};
email.onkeyup = function () {
  emailVal();
};
birthday.onkeyup = function () {
  birthdayVal();
};
address.onkeyup = function () {
  addVal();
};
address2.onkeyup = function () {
  addVal2();
};
state.onkeyup = function () {
  stateVal();
};
pincode.onkeyup = function () {
  pinVal();
};
password.onkeyup = function () {
  passVal();
};
cpassword.onkeyup = function () {
  cpassVal();
};
phone.onkeyup = function () {
  phoneVal();
};
country.onkeyup = function () {contVal();};
identity.onkeyup=function(){idfun();};
cardno.onkeyup=function(){idfun();};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  fnameVal();
  lnameVal();
  emailVal();
  birthdayVal();
  addVal();
  addVal2();
  pinVal();
  passVal();
  cpassVal();
  contVal();
  phoneVal();
  stateVal();
  idfun();
});

// First name validation............
function fnameVal() {
  const value = fName.value.trim();
  if (value === "") {
    document.getElementById("nerror").textContent = "first name is required";
    return false;
  } else if (fnreg.test(value)) {
    document.getElementById("nerror").textContent = "";
    return true;
  } else {
    document.getElementById("nerror").textContent = "*invalid";
    return false;
  }
}

// Last name Validation..........
function lnameVal() {
  const value = lName.value.trim();
  //   let value1=document.getElementById('lname').value;
  //   const value2=value1.value;

  // if(value2.inlcudes(".")){
  //   value1.disabled=true;
  // }
  // else{
  //   value1.disabled=false;
  // }

  if (value === "") {
    document.getElementById("lnerror").textContent = "Last name is required";
    return false;
  } else if (fnreg.test(value)) {
    document.getElementById("imerror").textContent = "";
    return true;
  } else {
    document.getElementById("lnerror").textContent = "*invalid";
    return false;
  }
}

// Email validation............

function emailVal() {
  const value = email.value.trim();
  if (value === "") {
    document.getElementById("emailerror").textContent =
      "Email field can not be blank";
    return false;
  } else if (emreg.test(value)) {
    document.getElementById("emailerror").textContent = "";
    return success;
  } else {
    document.getElementById("emailerror").textContent = "*invalid";
    return false;
  }
}

// Birthday validation...... ...

function birthdayVal() {
  const value = birthday.value.trim();
  if (value === "") {
    document.getElementById("daterror").textContent =
      "Birthday field can not be empty";
  } else if (birthreg.test(value)) {
    document.getElementById("daterror").textContent = "";
  } else {
    document.getElementById("daterror").textContent = "*invalid";
  }
}

// Address validation............

function addVal() {
  const value = address.value.trim();
  if (value === "") {
    document.getElementById("adError").textContent = "address is required";
  } else if (lnreg.test(value)) {
    document.getElementById("adError").textContent = "";
  } else {
    document.getElementById("adError").textContent = "*invalid";
  }
}

function addVal2() {
  const value = address2.value.trim();
  if (value === "") {
    document.getElementById("adError2").textContent = "address is required";
  } else if (statreg.test(value)) {
    document.getElementById("adError2").textContent = "";
  } else {
    document.getElementById("adError2").textContent = "*invalid";
  }
}

// state Erro....................

function stateVal() {
  const value = state.value.trim();
  if (value === "") {
    document.getElementById("stateError").textContent = "State is Required";
  } else if (statreg.test(value)) {
    document.getElementById("stateError").textContent = "";
  } else {
    document.getElementById("stateError").textContent = "*invalid";
  }
}

// Pin code validation.............

function pinVal() {
  const value = pin.value.trim();
  if (value === "") {
    document.getElementById("pinError").textContent = "Pin is Required";
  } else if (pinreg1.test(value)) {
    document.getElementById("pinError").textContent = "";
  } else {
    document.getElementById("pinError").textContent = "*invalid";
  }
}

// password validation.........

function passVal() {
  const value = password.value.trim();
  if (value === "") {
    document.getElementById("psError").textContent = "Password must be 8 Digit";
  } else if (passreg.test(value)) {
    document.getElementById("psError").textContent = "";
  } else {
    document.getElementById("psError").textContent = "*invalid";
  }
}

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// confirm Password validaion

function cpassVal() {
  const value = cpassword.value.trim();
  let x = password.value.trim();
  if (value === x) {
    document.getElementById("cpsError").textContent = "";
  } else {
    document.getElementById("cpsError").textContent = "Password does not match";
  }
}

//phone number validation...........

function phoneVal() {
  const value = phone.value.trim();
  // const code1=code.value;
  // if(code1==='IND'){
  if (value === "") {
    document.getElementById("phError").textContent =
      "Mobile Number can not be Empty";
  } else if (phreg.test(value)) {
    document.getElementById("phError").textContent = "";
  } else if (value.length < 10) {
    document.getElementById("phError").textContent = "*Wrong Number";
  } else {
    document.getElementById("phError").textContent = "";
  }
  // }
}

//country code

function contVal() {
  const value = country.value.trim();

  if (value === "") {
    document.getElementById("countryError").textContent =
      "country name is mandatory";
  } else if (fnreg.test(value)) {
    document.getElementById("countryError").textContent = "";
  } else {
    document.getElementById("countryError").textContent =
      "First letter should be capital / Wrong Input";
  }
}

function numdigit() {
  let value = code.value.trim();

  if (value === "IND") {
    phone.setAttribute("maxlength", 10);
  } else if (value === "AFG") {
    phone.setAttribute("maxlength", 9);
  } else if (value === "AUS") {
    phone.setAttribute("maxlength", 8);
  } else if (value === "UK") {
    phone.setAttribute("maxlength", 11);
  } else {
    document.getElementById("");
  }
}

function idfun() {
  
  let value = idtype.value.trim();
  let value1=cardno.value.trim();
  var panreg=/^[A-Z0-9]{10}$/;
  var adhreg=/^[0-9]{12}$/;
  var dlreg=/^[A-Z0-9]{8,15}$/;

  if (value === "Pan") {
    if (panreg.test(value1)) {
      document.getElementById("cardError").textContent = "";
    } else {
      document.getElementById("cardError").textContent = "Incorrect";
    }
  } else if (value==="Adhaar") {
    if (adhreg.test(value1)) {
      document.getElementById("cardError").textContent = "";
    } else {
      document.getElementById("cardError").textContent = "Incorrect";
    }
  } 

  else if (value === "DL") {
    if (dlreg.test(value1)) {
      document.getElementById("cardError").textContent = "";
    } else {
      document.getElementById("cardError").textContent = "Incorrect";
    }
}
else{
  document.getElementById("cardError").textContent = "something went wrong";
}
}

// submit button testing................

function validate() {
  fnameVal();
  lnameVal();
  emailVal();
  birthdayVal();
  addVal();
  addVal2();
  pinVal();
  passVal();
  // cpassVal();
  contVal();
  phoneVal();
  stateVal();
  idfun();
}

// fnameInput.addEventListener('onkeyup',validatefname,updatefullName);

// name testing........

// function validateName(){
//   var name1 = document.getElementById("name").value;
//   var reg = /^[A-Z][a-zA-Z- ]{3,8}$/;

//   if (reg.test(name1)) {

//     document.getElementById("nerror").innerHTML = "";
//   } else {
//     document.getElementById("nerror").innerHTML = "*invalid";
//     return false;
//   }

// }

//   // Last name validation......
//   function vlidatelName(){
//   var lname1 = document.getElementById("lname").value;
//   var reg2 = /^[^\s]+[! A-Za-z ]{2,30}$/;

//   if (reg2.test(lname1)) {
//     document.getElementById("lnerror").innerHTML = "";
//   } else {
//     document.getElementById("lnerror").innerHTML = "*invalid";
//     return false;
//   }
// }

// Email testing........

// var email = document.getElementById("email").value;
// var reg1 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// if (reg1.test(email)) {
//   document.getElementById("emailerror").innerHTML = "";
// } else {
//   document.getElementById("emailerror").innerHTML = "*invalid";
//   return false;
// }

// phone number...........

//    Date of birth vlidation........

// var birthday = document.getElementById("birthday").value;
// // var reg3 = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
// var reg3= /^(0[1-9]|[12][0-9]|3[01])[-./](0[1-9]|1[0-2])[-./](19[0-9]{2}|20[0-2][0-3])$/;

// if (reg3.test(birthday)) {
//   document.getElementById("daterror").innerHTML = "";
// } else {
//   document.getElementById("daterror").innerHTML = "*invalid";
//   return false;
// }

//  Address validation 1&2............

//  var address= document.getElementById("address").value;
// var reg4=/^[a-zA-Z0-9\s\-\#\.]+$/;

//    if(reg4.test(address)){
//     document.getElementById("adError").innerHTML ="";
//    }
//    else{
//     document.getElementById("adError").innerHTML ="*Invalid Address";
//    }

//    var address= document.getElementById("address2").value;
//    var reg4=/^[a-zA-Z0-9\s\-\#\.]+$/;
//    if(reg4.test(address)){
//     document.getElementById("adError2").innerHTML ="";
//    }
//    else{
//     document.getElementById("adError2").innerHTML ="*Invalid Address";
//    }

// State validation............

// var state= document.getElementById("state").value;
//    var reg5=/^[A-Z][a-zA-Z- ]{2,8}$/;
//    if(reg5.test(state)){
//     document.getElementById("stateError").innerHTML ="";
//    }
//    else{
//     document.getElementById("stateError").innerHTML ="*Invalid State name";
//    }
