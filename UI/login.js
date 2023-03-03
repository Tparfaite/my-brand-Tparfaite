const form=document.getElementsByClassName("form2")[0];
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const button2=document.getElementById("submit2");





// console.log(username.value);

const errorUser=document.getElementById("errorUser");


const errorPass=document.getElementById("errorpass");
// console.log(errorPass);
// errorUser.innerText="incorrect username";
// errorUser.style.color="red";





const validateInputs=()=>{
       
   const validUser=JSON.parse(localStorage.getItem("users"));
   console.log(validUser);


   let validUsername=[];
   validUser.map((item)=>{
      validUsername.push(item.email)
   })
   console.log(validUsername);


   let checkUserName=validUsername.includes(email.value);
   console.log(checkUserName);



   let validPass=[];
   validUser.map((item)=>{
    validPass.push(item.userPassword)
   })
   console.log(validPass);
   let checkPass=validPass.includes(pass.value);
   console.log(checkPass);

   // if(checkUserName && checkPass){
   //    window.open('admin.html');
   // }
   // else if(!checkUserName){
   //    errorUser.innerText="invalid username";
   //   errorUser.style.color="red";
   //   errorUser.style.visibility="visible";
   //    errorPass.innerHTML="incorrect password";
   //    errorPass.style.color="red";
   //    errorPass.style.visibility="visible";
   // }

      
   //   correctName=username.value;
   //   correctPassword=pass.value;
   
  
     




   if(email.value.trim()===""){
    errorUser.innerText="Email is required";
    errorUser.style.color="red";
    errorUser.style.visibility="visible";
   }

   if(pass.value.trim()===""){
    errorPass.innerText=" password is required";
    errorPass.style.color="red";
    errorPass.style.visibility="visible";
    
   }
   
}



button2.addEventListener("click",async(e)=>{
   e.preventDefault();
   try{
      const response=await fetch("https://my-brand-parfaite.cyclic.app/api/login",{
         method:"POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: email.value,
            pass: pass.value
         })
      });
      const data=await response.json();
      console.log(data)
   } catch(error){
      console.error(error);
   }
   // validateInputs();
});


// const checkUser=async()=>{

//    const response=await (await fetch("https://my-brand-parfaite.cyclic.app/api/login",{
//       method:"POST",
//       headers:{
//          'content-Type':'Application/json'
//       },
//       body:'JSON.stringfy()'
//    })).json();
//    console.log(response);

  

// }

// button2.addEventListener("click",e=>{
//     e.preventDefault();
//    validateInputs();
   

// })

