const card=document.querySelector(".cards");
console.log(card);

const blogForm=document.querySelector(".blogForm");
console.log(blogForm);

const create=document.getElementById("create");
const title=document.getElementById("tit");
const author=document.getElementById("aut");
const content=document.getElementById("myTextarea");






// GetAllBlogs
const blogTable=document.getElementById("blogTable");
const blogs=document.getElementById("blogs");

const fetchBlogs=async()=>{
    const response=await fetch("https://my-brand-parfaite.cyclic.app/api/getAllBlogs");
    const blogs=await response.json();
    let allBlogs=blogs.data.post;
    // console.log(allBlogs);
   

    const tableBody = document.querySelector('tbody');
    allBlogs.forEach((allBlogs,index)=>{
       

        tableBody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${allBlogs.blogTitle}</td>
        <td>${allBlogs.blogAuthor}</td>
        <td><button>Delete</button></td>
        <td><i class="fa fa-refresh" aria-hidden="true"></i></td>
        </tr>
      `;
    });
   

}

blogs.addEventListener('click',e=>{
    e.preventDefault();
    fetchBlogs();
});

// AllUsers
const allUsers=document.getElementById("allUsers");

const fetchAllUsers=async()=>{
    const result=await fetch("https://my-brand-parfaite.cyclic.app/api/getAllUsers");
    const users=await result.json();
    let allUser=users.message.post;
    // console.log(allUser);
    
    const tableBodyUsers = document.getElementById('tbody');
    allUser.forEach((allUser,index)=>{

        tableBodyUsers.innerHTML+=`
         <tr>
        <td>${index + 1}</td>
        <td>${allUser.firstName}</td>
        <td>${allUser.lastName}</td>
        <td>${allUser.email}</td>
        <td><i class="fa fa-trash" aria-hidden="true" data-user-id=${allUser._id}></i></td>
        </tr>
        `;
   
    })
    deleteUser();
}


const deleteUser=()=>{
   const deleteIcon=document.querySelectorAll('.fa-trash');
   const deleteIconArr=Array.from(deleteIcon);
   deleteIconArr.map((icon)=>{
   icon.addEventListener("click",e=>{
    e.preventDefault();
    const userId=e.target.dataset.userId;
    
    const deleteUserById=async()=>{
        const deletedUser=await fetch(`https://my-brand-parfaite.cyclic.app/api/deleteUser ${userId}`,{method:'DELETE',
      headers:{'content-Type':'application/json',token:`Bearer ${token}`}
    })
    }
   })
   })
  
}



// const deleteButton = tableBodyUsers.querySelector('button');
//         deleteButton.addEventListener("click",e=>{
//             e.preventDefault();
//             fetch(`https://my-brand-parfaite.cyclic.app/api/deleteUser/${post._id}`,{
//                 method:"DELETE"
//             }).then(()=>tableBodyUsers.remove())
//             .catch(error=>console.error(error));
            
//     });






allUsers.addEventListener("click",e=>{
    e.preventDefault();
    fetchAllUsers();
    
   
})



// blogForm.addEventListener("submit",e=>{
//     e.preventDefault();
    
// })

















// let allBlogs=[];
// console.log(allBlogs);


// const blogData=()=>{
//     const blogTitle=title.value;
//     const blogAuthor=author.value;
//     const blogContent=content.value;

//     const blog={
//         blogTitle,
//         blogAuthor,
//         blogContent
//     }

//     allBlogs.push(blog);
//     localStorage.setItem("allBlogs", JSON.stringify(allBlogs));
   

// }


// blogForm.addEventListener("submit",e=>{
//     e.preventDefault();
//     blogData();
//     blogForm.reset();
//     location.reload()
// })


// const validContent=JSON.parse(localStorage.getItem("allBlogs"));
//    console.log(validContent);

// const allBlog=JSON.parse(localStorage.getItem("allBlogs"));
// console.log(allBlog);

// const displayBlog=(allBlog)=>{
//     allBlog.map(data=>{

//     const fullBlog=`
    
//     <div class="card1">
//         <div class="title">Blog title:
//             <h2>${data.blogTitle}</h2><br>
//         </div>
//         <div class="Author">Author:<h3>${data.blogAuthor}</h3></div><br>
        
//         <div class="fullstory">
//             <p id="paragraph">
//             ${data.blogContent}
//             </p><br><br>
//             <div class="footer">
//                 <button id="delete">Delete</button> &nbsp; &nbsp
//                 <button id="update">Update</button>
//             </div><br>
//         </div>
  
//     </div>
//     `

//     card.innerHTML+=fullBlog;

   

//   })
// }



// document.addEventListener("DOMContentLoaded",e=>{
//     e.preventDefault();
//     displayBlog(allBlog);
    
//     const paragraph=document.getElementById("paragraph");
   
//     const deleted=document.getElementById("delete");
//     const update=document.getElementById("update");

    
//     deleted.addEventListener("click",e=>{
//         e.preventDefault();
//         localStorage.removeItem("");
//         console.log("deleted");
//     })
   
  

  
// })



