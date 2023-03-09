const card=document.getElementsByClassName("card")[0];


const displayBlogs=async()=>{
    const results=await (await fetch("https://my-brand-parfaite.cyclic.app/api/getAllBlogs")).json();
    
    const response=results.data.post;
    console.log(response);

    const blogCard=document.getElementById("blogCard");
    console.log(blogCard);

    response.map((response)=>{
        blogCard.innerHTML +=`
        <div class="allBlogs">
            <div class="blogTitle"><h1>Blog Title:${response.blogTitle}</h1></div>
            <div class="blogAuthor"><h4>Author:${response.blogAuthor}</h4></div><br>
            <div class="blogImage"><img src="${response.blogImage}" id="image"alt=""></div>
            <div class="blogContent">${response.blogContent}</div><br>
        </div>
    
        
        `
       
    })
    

  
}
displayBlogs();
















// let card=document.getElementsByClassName("cards")[0];

// let cardbtn=document.querySelectorAll("cardbtn");

// const validContent=JSON.parse(localStorage.getItem("allBlogs"));
//    console.log(validContent);

// const displayContent=(validContent)=>{
    
// console.log("content");
//    validContent.map(item=>{
//     const fullBlog=`
//     <div class="card1">
//         <div class="title">Blog title:
//             <h2>${item.blogTitle}</h2><br>
//         </div>
//         <div class="Author">Author:<h3>${item.blogAuthor}</h3></div><br>
        
//         <div class="fullstory">
//             <p>
//             ${item.blogContent}
               
//             </p>
//             <div class="footer">
//                 <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
//                 <i class="fa fa-comment fa-2x" aria-hidden="true"></i>
//                 <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>
//             </div><br>
//         </div>
  
//     </div>
//     `
//     card.innerHTML+=fullBlog

//    })


// }

// document.addEventListener("DOMContentLoaded",(e)=>{
//     e.preventDefault();
//     displayContent(validContent);
// })
























// console.log(cardbtn);
// let card1btn=document.getElementById("card1btn");
// let card2btn=document.getElementById("card2btn");
// let card3btn=document.getElementById("card3btn");

// let fullStory=document.getElementsByClassName("fullStory")[0];
// let full2Story=document.getElementsByClassName("full2Story")[0];
// let full3Story=document.getElementsByClassName("full3Story")[0];


// let blog1=document.getElementsByClassName("blog1")[0];
// let blog2=document.getElementsByClassName("blog2")[0];
// let blog3=document.getElementsByClassName("blog3")[0];
// console.log(blog2);

// card1btn.addEventListener("click", e=>{
//     e.preventDefault();
//     fullStory.classList.toggle("blog1Display");
//     card1btn.classList.toggle("card1bt");
// })


// card2btn.addEventListener("click",e=>{
//     e.preventDefault();
//     full2Story.classList.toggle("blog1Display");
//     card2btn.classList.toggle("card1bt");
// })

// card3btn.addEventListener("click",e=>{
//     e.preventDefault();
//     full3Story.classList.toggle("blog1Display");
//     card3btn.classList.toggle("card1bt");
// })