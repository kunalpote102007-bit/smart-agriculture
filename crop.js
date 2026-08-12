let crops = JSON.parse(localStorage.getItem("crops")) || [];

let editIndex = -1;

display();

function saveCrop(){

let crop={

name:document.getElementById("cropName").value,

type:document.getElementById("cropType").value,

date:document.getElementById("cropDate").value

};

if(editIndex==-1){

crops.push(crop);

}else{

crops[editIndex]=crop;

editIndex=-1;

}

localStorage.setItem("crops",JSON.stringify(crops));

alert("Crop Saved Successfully");

clearForm();

display();

}

function display(){

let table=document.getElementById("cropTable");

table.innerHTML="";

crops.forEach(function(c,index){

table.innerHTML+=`

<tr>

<td>${c.name}</td>

<td>${c.type}</td>

<td>${c.date}</td>

<td>

<button onclick="editCrop(${index})">

Edit

</button>

<button onclick="deleteCrop(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function editCrop(index){

document.getElementById("cropName").value=crops[index].name;

document.getElementById("cropType").value=crops[index].type;

document.getElementById("cropDate").value=crops[index].date;

editIndex=index;

}

function deleteCrop(index){

if(confirm("Delete Crop?")){

crops.splice(index,1);

localStorage.setItem("crops",JSON.stringify(crops));

display();

}

}

function clearForm(){

document.getElementById("cropName").value="";

document.getElementById("cropType").value="";

document.getElementById("cropDate").value="";

}

document.getElementById("searchCrop").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let rows=document.querySelectorAll("#cropTable tr");

rows.forEach(function(row){

if(row.innerText.toLowerCase().includes(value))

row.style.display="";

else

row.style.display="none";

});

});