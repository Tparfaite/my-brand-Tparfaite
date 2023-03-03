// const form=document.querySelector(".form");
const form=document.getElementsByClassName("form")[0];
console.log(form);
const email=document.getElementById("email");
const contact=document.getElementById("contact");
const fname=document.getElementById("name");
const message=document.getElementById("message");
console.log(message);

form.addEventListener("submit",e=>{
    e.preventDefault();
    form.reset();
   const fetchMessage=async ()=>{
    
   }
    
})
