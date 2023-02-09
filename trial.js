var errorMsgList=["NIC should contain 14 characters and cannot be empty",
 "First name cannot have numbers and cannot be empty",
  "Last name cannot have numbers and cannot be empty",
  "Phone number should have 8 digits and cannot contain alphabets",
   "phone number cannot have alphabets",
   "Email address should be in the format Username@mail.com",
    "You have to select a gender",
    "This field cannot be empty",
    "username should be in the format A-Za-z0-9&#$@",
     "password must contain at least 6 characters and at most 15 characters",
   " Confirm password did not match password",
 "You have to select a country"
,"State cannot be a number!"
,"Username must have more than 8 characters"];





function valusername(){
var format = /^[A-Za-z0-9&#$@]+$/;
var username = document.getElementById("txtusername");
var username1 = document.getElementById("erruname");

if(username.value == null || username.value == ""){
  username.select();
  username.style.backgroundColor = "#f0ffff";
  username1.innerText= errorMsgList[7];
  return false;
}
else if(username.value.length < 9){
  username.select();
  username.style.backgroundColor = "#f0ffff";
  username1.innerText= errorMsgList[13];
  return false;
}
else if(username.value.match(format) == null){

    username.select();
    username.style.backgroundColor = "#f0ffff";
    username1.innerText= errorMsgList[8];
    return false;
}

else{
  username.style.backgroundColor = "";
  document.getElementById('erruname').innerText= "";
  return false;
}
}
