function chklogin(){
  var un= document.querySelector("#txtusername").value;
  var pass = document.querySelector("#txtpassword").value;

var lsun =  localstorage.setItem("username");
var lspass =  localstorage.setItem("pwd");

if(un != lsun  || pass != lspass){
  return false;
}

else{
  return true;
}

}


function Validate(){
  if (valfn() == true && valphonenum() == true && validateUn() == true && validatePass() == true       ){
    var un= document.querySelector("#txtuname").value;
    var pass = document.querySelector("#txtpwd").value;
    localstorage.setItem("username", un);
    localstorage.setItem("pwd", pass);
    return true;
  }
  else{
    return false;
  }
}

function valfn(){
  var fn = document.getElementById('txtfname').value;

  if (fn == null || fn == ""){
    document.getElementById('txtfname').select();
    document.getElementById('txtfname').style.backgroundColor = "yellow";
    document.getElementById('errfn').src = "error.gif";
    return false;
  }
  else{
    document.getElementById('errfn').src = "ok.gif";
    return true;
  }

}

function valphonenum(){
  var phone = document.getElementById('txtphonenum').value;

  if (phone == null || phone == "" || isNaN(phone) == true ){
    document.getElementById('txtphonenum').select();
    document.getElementById('txtphonenum').style.backgroundColor = "yellow";
    document.getElementById('errph').src = "error.gif";
    return false;
  }
  else{
    document.getElementById('errph').src = "ok.gif";
    return true;
  }


}

function validateUn() {
var un = document.querySelector("#txtuname").value;
if (un == "" || un == null) {
  document.querySelector("#txtfname").style.backgroundColor="yellow";
  document.querySelector("#erruname").src="error.gif";
  return false;
}
else{
  document.querySelector("#erruname").src="ok.gif";
  return true;
}
}

function validatePass() {
var pwd = document.querySelector("#txtpwd").value;
if (pwd == "" || pwd == null || pwd.length < 4 ) {
  document.querySelector("#txtpwd").style.backgroundColor="yellow";
  document.querySelector("#errpwd").src="error.gif";
  return false;
}
else{
  document.querySelector("#errpwd").src="ok.gif";
  return true;
}
}
