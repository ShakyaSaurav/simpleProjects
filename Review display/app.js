const reviews=[
    {
        id:1,
        name:"Saurav Shakya",
        job:"Web developer",
        img:"C:\Users\HP B&O\Desktop\IMG_9224.JPG",
        text:"asdkjadshjhjadshjhjdhjjhadsjhhjadjhjadshjdjhjhadhjjhhjadshjhjhjadsjhhjadsjh",
    },
    {
        id:2,
        name:"Saugat Shakya",
        job:"Senior Web developer",
        img:"C:\Users\HP B&O\Desktop\IMG_9224.JPG",
        text:"asdasdkldsfhjkyhjkhjkhujnmnfvcbcxcxcvcxvxcvcxvcxxcvxjadsjhhjadsjh",
    },
    {
        id:3,
        name:"Vishma Shrestha",
        job:"Singer",
        img:"C:\Users\HP B&O\Desktop\IMG_9224.JPG",
        text:"asdkjadshjhjadshjhjdhjjhadsjhhjadjhjadshjdjhjhadhjjhhjadshjhjhjadsjhhjadsjh",
    },
    {
        id:4,
        name:"Paltik Shrestha",
        job:"Front end developer",
        img:"C:\Users\HP B&O\Desktop\New folder\paltik.jpg",
        text:"asdkjadshjhjadshjhjdhjjhadsjhhjadjhjadshjdjhjhadhjjhhjadshjhjhjadsjhhjadsjh",
    },
];
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn =document.querySelector(".prev-btn");
const nextBtn =document.querySelector(".next-btn");
const randomBtn =document.querySelector(".random-btn");

//starting value
let currentItem=0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
    //console.log("hello");
    const item=reviews[currentItem];
    img.src= item.img;

});


