const form=document.getElementsByClassName("form2")[0];
const username=document.getElementById("username");
const pass=document.getElementById("pass");
const button2=document.getElementById("submit2");
// console.log(username.value);

const errorUser=document.getElementById("errorUser");
console.log(errorUser);

const errorPass=document.getElementById("errorpass");
console.log(errorPass);
// errorUser.innerText="incorrect username";
errorUser.style.color="red";





const validateInputs=()=>{
       
   const validUser=JSON.parse(localStorage.getItem("users"));
   console.log(validUser);


   let validUsername=[];
   validUser.map((item)=>{
      validUsername.push(item.username)
   })
   console.log(validUsername);


   let checkUserName=validUsername.includes(username.value);
   console.log(checkUserName);



   let validPass=[];
   validUser.map((item)=>{
    validPass.push(item.userPassword)
   })
   console.log(validPass);
   let checkPass=validPass.includes(pass.value);
   console.log(checkPass);

   if(checkUserName && checkPass){
      window.open('admin.html');
   }else if(!checkUserName){
      errorUser.innerText="invalid username";
      errorUser.style.color="red";
      errorPass.innerHTML="incorrect password";
      errorPass.style.color="red";
      // alert("Please enter valid username and password");
   }

      
   //   correctName=username.value;
   //   correctPassword=pass.value;
   
  
     




   if(username.value.trim()===""){
    errorUser.innerText="Username is required";
    errorUser.style.color="red";
    errorUser.style.visibility="visible";
   }

   if(pass.value.trim()===""){
    errorPass.innerText=" password is required";
    errorPass.style.color="red";
    errorPass.style.visibility="visible";
    
   }
   
}


button2.addEventListener("click",e=>{
    e.preventDefault();
   validateInputs();
   

})

