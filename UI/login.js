const form=document.getElementsByClassName("form2")[0];
const email=document.getElementById("email");
const password=document.getElementById("password");
const button2=document.getElementById("submit2");
const errorEmail=document.querySelector("#errorEmail");
const errorPassword=document.querySelector("#errorPass");



const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;



function validateInput(){

   if(!email.value.match(validRegex)){
      errorEmail.style.visibility="visible";
      errorEmail.style.color="red";
      errorEmail.innerHTML="Please enter valid email";

   }else{
      email.style.borderColor="green";
   
   }

   if(!password.value.match(passd)){
      errorPassword.innerHTML="please enter valid password";
      errorPassword.style.visibility="visible";
      errorPassword.style.color="red";
   }

}




button2.addEventListener("click",async(e)=>{
   e.preventDefault();
   validateInput();
   if(email.value.match(validRegex) && password.value.match(passd)){

      try{
         const response=await fetch("https://my-brand-parfaite.cyclic.app/api/login",{
            method:"POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: email.value,
               password: password.value
            })
         });
         const data=await response.json();
         console.log(data);
         localStorage.setItem('token',data.token);
     


         if(data.data.role='admin'){
            window.open('admin.html');
         }else {
            window.open('../index.html')
         }
        
        
       } catch(error){
         console.error(error);
      }

    
       
   }
  
  
});




