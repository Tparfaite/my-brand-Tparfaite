// const form=document.querySelector(".form");
const form=document.getElementsByClassName("form")[0];
console.log(form);
const email=document.getElementById("email");
const contact=document.getElementById("contact");
const fname=document.getElementById("fname");
const message=document.getElementById("message");
console.log(message);

// const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const createMessage=async()=>{

    const newMessage=await (await fetch("https://my-brand-parfaite.cyclic.app/api/createMessage",{
        method:'POST',
        body:JSON.stringify({
            email:email.value,
            fullName:fname.value,
            contact:contact.value,
            message:message.value
        }),
        headers:({'content-Type':'application/json'})
    })).json()
    console.log(newMessage)
}

form.addEventListener("submit",e=>{
    e.preventDefault();
    createMessage();
    form.reset();
})





// const createMessage=async()=>{

//     const fullMessage={
//         email:email.value,
//         fullName:fname.value,
//         contact:contact.value,
//         message:message.value
//     };

//     const sendData = {
//         method: "POST",
//         body: JSON.stringify(fullMessage),
//         headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
//     };

//     fetch("https://my-brand-parfaite.cyclic.app/api/createMessage",sendData)
//     .then(response=>response.json())
//     .then((data)=>{
//         console.log(data);
//     })
   
// }

// form.addEventListener("submit",e=>{
//     e.preventDefault();
//     // form.reset();
//     // alert('hello there');
//     createMessage();
    
// })




// function validateInput(){

//     if(fname.value.trim()===""){
//         errorf.innerText="The first name is required!";
//         errorf.style.color="red";
//         errorf.style.visibility="visible";
//         fname.style.borderColor="#FF0000";
//     }else{
//         errorf.style.visibility="hidden";
//         fname.style.borderColor="#228B22"
//     }



//     if(!email.value.match(validEmail)){
//         errorEm.innerText="please enter valid email!";
//         errorEm.style.color="red";
//         errorEm.style.visibility="visible";
//         email.style.borderColor="#FF0000";
//     }else{
//         errorEm.style.visibility="hidden";
//         email.style.borderColor="#228B22"
//     }

// }