const formpart=document.getElementsByClassName("formpart")[0];
const form2=document.getElementById("form2");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const emails=document.getElementById("emails");
const passwords=document.getElementById("password");
const submit=document.getElementById("submit");


const errorf=document.getElementById("errorf");
const errorn=document.getElementById("errorn");
const errorEm=document.getElementById("errorEm");
const errorp=document.getElementById("errorp");

const response=document.getElementById("response");
console.log(response);



const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passd= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

function validateInput(){


    if(fname.value.trim()===""){
        errorf.innerText="The first name is required!";
        errorf.style.color="red";
        errorf.style.visibility="visible";
        fname.style.borderColor="#FF0000";
    }else{
        errorf.style.visibility="hidden";
        fname.style.borderColor="#228B22"
    }
   
    if(lname.value.trim()===""){
        errorn.innerText="The last name is required!";
        errorn.style.color="red";
        errorn.style.visibility="visible";
        lname.style.borderColor="#FF0000";
    }else{
        errorn.style.visibility="hidden";
        lname.style.borderColor="#228B22"
    }



   

    if(!emails.value.match(validEmail)){
        errorEm.innerText="please enter valid email!";
        errorEm.style.color="red";
        errorEm.style.visibility="visible";
        emails.style.borderColor="#FF0000";
    }else{
        errorEm.style.visibility="hidden";
        emails.style.borderColor="#228B22"
    }
    

    

    if(!passwords.value.match(passd)){
       errorp.innerText="put valid password please!";
       errorp.style.color="red";
       errorp.style.visibility="visible";
       passwords.style.borderColor="#FF0000";
    }else{
        errorp.style.visibility="hidden";
        passwords.style.borderColor="#228B22";
    }
  
}

const createAccount=async()=>{

    const credential=await (await fetch("https://my-brand-parfaite.cyclic.app/api/createUser",{
        method:'POST',
        headers:{'content-Type':'Application/json'},
        body:JSON.stringify({
            firstName:fname.value,
            lastName:lname.value,
            email:emails.value,
            password:passwords.value
        })
    })).json()
    console.log(credential);
    if(credential.status='success'){
        response.innerHTML="You successfully sign up";
        response.style.color="red";
        response.style.fontSize="28px"
    }
}



form2.addEventListener("submit",e=>{
    e.preventDefault();
    validateInput();

    if(fname.value!=="" && lname.value!=="" && emails.value.match(validEmail) && passwords.value.match(passd)){
        createAccount();
        form2.reset();
    }
    
    
    


});