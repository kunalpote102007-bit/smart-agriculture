let farmer = JSON.parse(localStorage.getItem("farmer"));

if(farmer){

document.getElementById("pname").value = farmer.name;

document.getElementById("pmobile").value = farmer.mobile;

document.getElementById("pemail").value = farmer.email;

document.getElementById("paddress").value = farmer.address;

}

function updateProfile(){

let farmer={

name:document.getElementById("pname").value,

mobile:document.getElementById("pmobile").value,

email:document.getElementById("pemail").value,

address:document.getElementById("paddress").value,

password:JSON.parse(localStorage.getItem("farmer")).password

};

localStorage.setItem("farmer",JSON.stringify(farmer));

alert("Profile Updated Successfully");

}

function deleteAccount(){

if(confirm("Delete Account?")){

localStorage.removeItem("farmer");

localStorage.removeItem("login");

alert("Account Deleted");

window.location="register.html";

}

}

function logout(){

localStorage.removeItem("login");

window.location="login.html";

}

document.getElementById("photo").addEventListener("change",function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

document.getElementById("preview").src=e.target.result;

localStorage.setItem("profileImage",e.target.result);

}

reader.readAsDataURL(file);

}

});

let img=localStorage.getItem("profileImage");

if(img){

document.getElementById("preview").src=img;

}