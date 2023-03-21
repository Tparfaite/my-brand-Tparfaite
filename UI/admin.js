const card=document.querySelector(".cards");
const blogForm=document.querySelector(".blogForm");
console.log(blogForm);
const create=document.getElementById("create");
const messanger=document.getElementsByClassName("messages")[0];
// console.log(messanger);

const title=document.getElementById("tit");
const author=document.getElementById("aut");
const photo=document.getElementById("photo");
const content=document.getElementById("myTextarea");
const blogLink=document.getElementById("blogLink");

const userLink=document.getElementById("userLink");
const messageLink=document.getElementById("messageLink");
const token=localStorage.getItem('token');
console.log(token);

const container=document.getElementsByClassName("container")[0];


//Create Blog
blogForm.addEventListener("submit",e=>{
    e.preventDefault();

    const formData= new FormData();

    formData.append('blogTitle',title.value);
    formData.append('blogAuthor',author.value);
    formData.append('blogImage',photo.files[0]);
    formData.append('blogContent',content.value);

    const createBlog=async()=>{
        const response=await (await fetch("https://my-brand-parfaite.cyclic.app/api/createBlog",{
            method:'POST',
            headers:{token:`Bearer ${token}`},
            body:formData
        })).json()

        console.log(response);

        if(response){
          blogForm.reset();
          console.log('blog created successful');
        }
    }
   
  createBlog();
})



// GetAllBlogs
const blogTable=document.getElementById("blogTable");
const blogs=document.getElementById("blogs");

const fetchBlogs=async()=>{
    const response=await fetch("https://my-brand-parfaite.cyclic.app/api/getAllBlogs");
    const blogs=await response.json();
    let allBlogs=blogs.data.post;
    blogTable.style.display="block";
    messanger.style.display="none";
    allUsers.style.display="none";
   
    const tableBody = document.querySelector('tbody');
    allBlogs.forEach((allBlogs,index)=>{
       

        tableBody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${allBlogs.blogTitle}</td>
        <td>${allBlogs.blogAuthor}</td>
        <td><i class="fa fa-trash" id="faDeleteBlog" aria-hidden="true" data-blog-id=${allBlogs._id}></i></td>
        <td><i class="fa fa-refresh" aria-hidden="true"></i></td>
        </tr>
      `;
    });

    //Delete blog by Id
    const deleteButton=document.querySelectorAll('#faDeleteBlog');
    const deletedButton=Array.from(deleteButton);
    
    deletedButton.map((item)=>{
        item.addEventListener("click",e=>{
            const blogId=e.target.dataset.blogId;
            console.log(blogId);

            const deleteBlogById=async()=>{
                const deleteBlogs=await fetch(`https://my-brand-parfaite.cyclic.app/api/deleteBlog/${blogId}`,{
                    method:'DELETE',
                    headers:{ 'content-Type':'application/json',token:`Bearer ${token}`}
                });
                console.log(deleteBlogs.status);
                if(deleteBlogs.status==204){
                    tableBody.innerHTML="";
                    fetchBlogs();
                }
            }
            deleteBlogById();
            
        })
    })
    
   

}

blogLink.addEventListener('click',e=>{
    e.preventDefault();
    fetchBlogs();
    
   
});



//Get all messages
const messages=document.getElementById("messages");

const fetchMessages=async()=>{
    const messagees=await fetch("https://my-brand-parfaite.cyclic.app/api/getAllMessages",{
        headers:{token:`Bearer ${token}`}
    });
    const response=await messagees.json();
    const results=response.data.posts;
    messanger.style.display="block";
    blogTable.style.display="none";
    allUsers.style.display="none";
   
    console.log(results);

    const tableMessages=document.getElementById('tableMessages');
  
    results.map((result,index)=>{

        tableMessages.innerHTML += `
        
        <tr>
        <td>${index + 1}</td>
        <td>${result.email}</td>
        <td>${result.fullName}</td>
        <td>${result.message}</td>
        <td><i class="fa fa-trash" id="faDelete" aria-hidden="true" data-message-id=${result._id}></i></td>
       </tr>
        `;

       
    });

  //Delete message by Id

    const deleteButton = document.querySelectorAll('#faDelete');
        const deletionButton=Array.from(deleteButton);

        deletionButton.map((item)=>{
            item.addEventListener("click",e=>{
                const messageId=e.target.dataset.messageId;

                const deleteMessageById=async()=>{
                    const fetchMessage=await fetch(`https://my-brand-parfaite.cyclic.app/api/deleteMessage/${messageId}`,{
                        method:'DELETE',
                        headers:{ 'content-Type':'application/json',token:`Bearer ${token}`}
                    });
                    
                    if(fetchMessage.status==204){
                        tableMessages.innerHTML="";
                        fetchMessages();
                    }
                     
                }
                deleteMessageById();

            })

            
        })
        

}
messageLink.addEventListener("click",e=>{
    e.preventDefault();
    fetchMessages();
    
})





// AllUsers
const allUsers=document.getElementsByClassName("allUsers")[0];

const fetchAllUsers=async()=>{
    const result=await fetch("https://my-brand-parfaite.cyclic.app/api/getAllUsers");
    const users=await result.json();
    let allUser=users.message.post;
    allUsers.style.display="block";
    blogTable.style.display="none";
    messanger.style.display="none";
   
    
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
   
    });

    //Delete user by Id
    const deleteButtons=document.querySelectorAll(".fa-trash");

    const deleteButton=Array.from(deleteButtons);
   deleteButton.map((item)=>{
        item.addEventListener("click",e=>{
            const userId=e.target.dataset.userId;
            // console.log(userId);

            const deleteUserById=async()=>{
                const deleteById=await fetch(`https://my-brand-parfaite.cyclic.app/api/deleteUser/${userId}`,{
                    method:'DELETE',
                    headers:{'content-Type':'application/json', token:`Bearer ${token}`}
                });
                if(deleteById.status==204){
                    tableBodyUsers.innerHTML="";
                    fetchAllUsers();
                }
               

               
            }
            deleteUserById();
            
        })
        
    })
    

 
}

userLink.addEventListener("click",e=>{
    e.preventDefault();
    fetchAllUsers();
   
    
})



















// let allBlogs=[];
// console.log(allBlogs);


// const blogData=()=>{
//     const blogTitle=title;
//     const blogAuthor=author;
//     const blogContent=content;

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



