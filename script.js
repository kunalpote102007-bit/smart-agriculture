console.log("Smart Agriculture Platform");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.background="#dcedc8";

});

card.addEventListener("mouseleave",()=>{

card.style.background="white";

});

});

const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{

alert("Welcome to Smart Agriculture Platform");

});