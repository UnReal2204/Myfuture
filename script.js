var errorMsgList=["NIC should contain 14 characters",
 "First name cannot have numbers ",
  "Last name cannot have numbers",
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


function chklogin(){
  var un= document.querySelector("#txtusername").value;
  var pass = document.querySelector("#txtpwd").value;

var lsun =  localStorage.getItem("username");
var lspass = localStorage.getItem("pwd");

if(un != lsun  || pass != lspass){
  return false;
}

else{
  return true;
}

}

function Validate(){
  if (!valnic() && !valfn() &&  !valln() &&  !valphonenum() &&  !valemail() &&  !valGender() &&  !valcountry() &&  !valstate() &&   !valusername() &&   !valpwd() &&  !matchPwd() &&  !valcapcha()){

    return false;
  }
  else{
    localStorage.setItem('username', document.getElementById('txtusername').value);
    localStorage.setItem('pwd', document.getElementById('txtpwd').value);

    return true;
  }
}




function valnic(){
  var nic = document.getElementById('nic').value;

  if (nic == null || nic == ""){
    document.getElementById('nic').select();
    document.getElementById('nic').style.backgroundColor ="#f0ffff";
    document.getElementById('errph').innerText = errorMsgList[7];
    return false;
  }

  else if(nic.length != 14){
    document.getElementById('nic').select();
    document.getElementById('nic').style.backgroundColor ="#f0ffff";
    document.getElementById('errph').innerText = errorMsgList[0];
    return false;
  }
  else{
    document.getElementById('nic').style.backgroundColor ="";
    document.getElementById('errph').innerText = "";
    return true;
  }

}


function valfn(){
   var letters=/^[A-Za-z\s]*$/;
  var fn = document.getElementById('txtfname');
  var fn1 =document.getElementById('errName');

 if(fn.value == "" || fn.value == null ){
    fn.select();
    fn.style.backgroundColor = "#f0ffff";
    fn1.innerText = errorMsgList[7];
    return false;
  }
    else if(fn.value.match(letters)==null){
    fn.select();
    fn.style.backgroundColor = "#f0ffff";
    fn1.innerText = errorMsgList[1];
    return false;
  }
  else{
    fn.style.backgroundColor ="";
    fn1.innerText= "";
    return true;

  }

}

function valln(){
   var letters=/^[A-Za-z\s]*$/;
  var ln = document.getElementById('txtlname');
  var ln1 =document.getElementById('errlname');
    if (ln.value == "" || ln.value == null && ln.value.match(letters) == null){
    ln.select();
    ln.style.backgroundColor = "#f0ffff";
    ln1.innerText = errorMsgList[2];
    return false;
  }
  else if(ln.value.match(letters)==null){
    ln.select();
    ln.style.backgroundColor = "#f0ffff";
    ln1.innerText = errorMsgList[2];
    return false;
  }
  else{
    ln.style.backgroundColor ="";
    ln1.innerText= "";
    return true;

  }

}



function valphonenum(){
  var numbers= /^[0-9]{8}$/ ;
  var phone = document.getElementById('num');
  var phone1 = document.getElementById('errphone');

  if(phone.value == null || phone.value == "" || phone !== 8 && phone.value.match(numbers)==null){
    phone.select();
    phone.style.backgroundColor = "#f0ffff";
    phone1.innerText= errorMsgList[3];
    return false;
}
else if(phone.value.match(numbers)==null){
  phone.select();
  phone.style.backgroundColor ="#f0ffff";
  phone1.innerText = errorMsgList[3];

}
  else{
    phone.style.backgroundColor ="";
    phone1.innerText= "";
    return true;
  }
}

function valemail(){
  const EMAIL = document.getElementById("txtemail");
  var format = /^[\w\._-]+@[\w\._-]+\.[a-zA-Z]{2,5}$/ ;
  var emailValue = EMAIL.value ;

  if(emailValue == null || emailValue == ""){
    EMAIL.select();
    EMAIL.style.backgroundColor="#f0ffff";
   document.getElementById("output").innerText = errorMsgList[7];
    return false;
  }

  else if(emailValue.match(format) == null){
    EMAIL.select();
    EMAIL.style.backgroundColor="#f0ffff";
     document.getElementById("output").innerText = errorMsgList[5];
    return false;
  }

  else{
    EMAIL.style.backgroundColor="";
    document.getElementById("output").innerText = " ";
    return true;
  }
}

function valGender(){
  var male = document.getElementById('male');
  var female=document.getElementById('female');
  var other=document.getElementById('other');
  if(male.checked == false && female.checked == false && other.checked == false){
    document.getElementById('output2').innerText = errorMsgList[6];
    return false;
}
else{
document.getElementById('output2').innerText = "";
return true;
}
}



function valcountry(){
  var country= document.getElementById("country");
  var country1= document.getElementById("errcountry");
  if(country.value == "null"){
    country1.innerText = errorMsgList[11];
    return false;
  }

  else if(country.value == "Mauritius"){
    document.querySelector('.state').style.cssText="visibility:hidden";
    return true;
  }
  else{
    document.querySelector('.state').style.cssText="visibility:visible";
    country1.innerText = " ";
    return true;
  }
}

function valstate(){
  var country= document.getElementById("country");
  var state=document.getElementById('txtstate');
  var state1= document.getElementById("errstate");

  if(country.value ==  "Mauritius"){
    return true;
  }

  else if(state.value== null || state.value == ""){
    state.select();
    state.style.backgroundColor = "#f0ffff";
    state1.innerText= errorMsgList[7];
    return false;
}

else if(isNaN(state.value) == false   ){
  state.select();
  state.style.backgroundColor = "#f0ffff";
  state1.innerText= errorMsgList[12];
  return false;

}

else{
  state.style.backgroundColor = "";
  state1.innerText= "";
  return true;
}
}

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
  return true;
}
}


function valpwd(){
  var pwd = document.getElementById("txtpwd");
  var pwd1=document.getElementById("errpwd");

  if(pwd.value == "" ||  pwd == null) {
    pwd.select();
    pwd.style.backgroundColor ="#f0ffff";
    pwd1.innerText = errorMsgList[7];
    return false;
  }

  else if(pwd.value.length <= 6 || pwd.value.length >= 15 ){
    pwd.select();
    pwd.style.backgroundColor ="#f0ffff";
    pwd1.innerText = errorMsgList[9];
    return false;
  }

 else{
   pwd.style.backgroundColor = "";
   pwd1.innerText= " ";
   return true;
}
}

function matchPwd(){
  var pwd = document.getElementById("txtpwd");
  var cpwd = document.getElementById("txtcpwd");

  if(cpwd.value == "" ||  cpwd == null) {
    cpwd.select();
    cpwd.style.backgroundColor ="#f0ffff";
    document.getElementById("errcpwd").innerText = errorMsgList[7];
    return false;
  }

  else if(cpwd.value != pwd.value){
    cpwd.select();
    cpwd.style.backgroundColor ="#f0ffff";
    document.getElementById('errcpwd').innerText= errorMsgList[10];
    return false;
  }

  else {
     cpwd.style.backgroundColor ="";
    document.getElementById('errcpwd').innerText="";
    return true;
  }
}


var capcha = "";
function generatecap() {
    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    capcha = "";

    for (let i = 1; i < 6; i++) {
        capcha += randomchar.charAt(Math.floor(Math.random() *  randomchar.length))
    }
    //document.getElementById("capchatext").innerHTML = capcha;
}


function displaycapcha(){
 document.getElementById("capchatext").innerHTML = capcha;
   //document.getElementById('capcode').value = capcha;
}

window.onload = function() {generatecap() , displaycapcha()};
document.getElementById("cbtn").onclick = function() {generatecap(),displaycapcha()};



function valcapcha() {
    const usr_input = document.getElementById("capchacode").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == capcha) {
        document.getElementById("message").innerHTML = "Matched";
        return true;
    }
    else {
      document.getElementById("message").innerHTML = "not Matched";
      return false;
    }
}

function reset(){
if(confirm("Resetting the form will cancel everything. Do you want to continue?") == true){
     location.reload();
    }
}
document.getElementById("resetbtn").addEventListener("click", reset);




function play(){
  if(confirm("Pressing play means you are engaging yourself with the game. Do you want to continue?") == true){
       location.assign('millionaire.html');
      }
      else{
        location.assign('homepage.html')
      }

}
  document.getElementById("playbtn").addEventListener("click",'millionaire.html');




//    $('img').click(function() {
// $('#img').slideUp(2000).slideDown(2000);
//     var div = $('div');
// div.animate({height: '300px', opacity: '0.4'}, "slow");
// div.animate({width: '300px', opacity: '0.8'}, "slow");
// div.animate({height: '100px', opacity: '0.4'}, "slow");
// div.animate({width: '100px', opacity: '0.8'}, "slow");
//});
