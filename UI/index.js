let card=document.getElementsByClassName("card")[0];
console.log(card);
let cardbtn=document.querySelectorAll("cardbtn");
// console.log(cardbtn);
let card1btn=document.getElementById("card1btn");
let card2btn=document.getElementById("card2btn");
let card3btn=document.getElementById("card3btn");

let fullStory=document.getElementsByClassName("fullStory")[0];
let full2Story=document.getElementsByClassName("full2Story")[0];
let full3Story=document.getElementsByClassName("full3Story")[0];
console.log(full2Story);

let blog1=document.getElementsByClassName("blog1")[0];
let blog2=document.getElementsByClassName("blog2")[0];
let blog3=document.getElementsByClassName("blog3")[0];
// console.log(blog2);

card1btn.addEventListener("click", e=>{
    e.preventDefault();
    fullStory.classList.toggle("blog1Display");
    card1btn.classList.toggle("card1bt");
})


card2btn.addEventListener("click",e=>{
    e.preventDefault();
    full2Story.classList.toggle("blog1Display");
    card2btn.classList.toggle("card1bt");
})

card3btn.addEventListener("click",e=>{
    e.preventDefault();
    full3Story.classList.toggle("blog1Display");
    card3btn.classList.toggle("card1bt");
})