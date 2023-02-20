const card=document.querySelector(".cards");
console.log(card);

const blogForm=document.querySelector(".blogForm");
console.log(blogForm);

const create=document.getElementById("create");
const title=document.getElementById("tit");
const author=document.getElementById("aut");
const content=document.getElementById("myTextarea");
// var content = tinymce.get("myTextarea").getContent();
// console.log(myContent);



let allBlogs=[];
console.log(allBlogs);


const blogData=()=>{
    const blogTitle=title.value;
    const blogAuthor=author.value;
    const blogContent=content.value;

    const blog={
        blogTitle,
        blogAuthor,
        blogContent
    }

    allBlogs.push(blog);
    localStorage.setItem("allBlogs", JSON.stringify(allBlogs));
   

}


blogForm.addEventListener("submit",e=>{
    e.preventDefault();
    blogData();
    blogForm.reset();
    location.reload()
})


// const validContent=JSON.parse(localStorage.getItem("allBlogs"));
//    console.log(validContent);

const allBlog=JSON.parse(localStorage.getItem("allBlogs"));
console.log(allBlog);

const displayBlog=(allBlog)=>{
    allBlog.map(data=>{

    const fullBlog=`
    
    <div class="card1">
        <div class="title">Blog title:
            <h2>${data.blogTitle}</h2><br>
        </div>
        <div class="Author">Author:<h3>${data.blogAuthor}</h3></div><br>
        
        <div class="fullstory">
            <p id="paragraph">
            ${data.blogContent}
            </p><br><br>
            <div class="footer">
                <button id="delete">Delete</button> &nbsp; &nbsp
                <button id="update">Update</button>
            </div><br>
        </div>
  
    </div>
    `

    card.innerHTML+=fullBlog;

   

  })
}



document.addEventListener("DOMContentLoaded",e=>{
    e.preventDefault();
    displayBlog(allBlog);
    
    const paragraph=document.getElementById("paragraph");
   
    const deleted=document.getElementById("delete");
    const update=document.getElementById("update");

    
    deleted.addEventListener("click",e=>{
        e.preventDefault();
        localStorage.removeItem("");
        console.log("deleted");
    })
   
  

  
})



