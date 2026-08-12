let cropData = JSON.parse(localStorage.getItem("crops")) || [];


let cropNames = [];

cropData.forEach(function(c){

cropNames.push(c.name);

});


let count={};


cropNames.forEach(function(name){

count[name]=(count[name]||0)+1;

});


let labels=Object.keys(count);

let values=Object.values(count);



new Chart(

document.getElementById("cropChart"),

{

type:"bar",

data:{

labels:labels,

datasets:[{

label:"Crop Quantity",

data:values

}]

},

options:{

responsive:true

}

}

);