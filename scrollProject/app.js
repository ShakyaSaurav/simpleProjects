//setting date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//closelinks
const navToggle=document.querySelector('.nav-toggle');
const linksContainer=document.querySelector('.links-container');
const links=document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle("show-links");
    const containerHeight =linksContainer.getBoundingClientRect();
    //console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    //console.log(linksHeight);
    if(containerHeight===0){
        linksContainer.style.height= `${linksHeight}px`;
    } else{
        linksContainer.style.height= 0 ;
    }
});
const navbar= document.getElementById('nav');
const topLink = document.querySelector(".top-link");
window.addEventListener('scroll',function(){
 //console.log(window.pageYOffset);
const scrollHeight= window.pageYOffset;
const navHeight= navbar.getBoundingClientRect().height;
if(scrollHeight>navHeight){
    navbar.classList.add('fixed-nav');
}else{
    navbar.classList.remove('.fixed-nav');
}

if(scrollHeight>500){
    //console.log(toplink.classlist);
    topLink.classList.add('show-link');
}
else{
    topLink.classList.remove('show-link');
}
});
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        //prevetn default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href');
        console.log(id);
    });
});