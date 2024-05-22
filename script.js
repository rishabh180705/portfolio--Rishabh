
const menu = document.querySelector('#menu');
const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const homy=document.querySelector("#homy");
const links=document.querySelectorAll("#hLink")
const body=document.querySelector("body")
const moon=document.querySelector("#moon");
moon.addEventListener('click', () => {
    body.classList.toggle('dark');
}); 



const projects=document.querySelectorAll(".projects");
projects.forEach(project=>{
project.addEventListener('click',()=>{
   alert("Project section will be added soon");
});
});
hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    homy.classList.toggle('hidden');
 
});  
close.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    homy.classList.toggle('hidden');
}); 
links.forEach( link=> {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        // homy.classList.toggle('hidden');
     
    });    
    
}); 
const slides= document.querySelectorAll(".slide");
var counter=0;

slides.forEach(
(slide,index)=>{
   slide.style.left= `${index * 100}%`
}
)

const goPrev = () => {
  if (counter == 0) {
      counter = slides.length - 1;
      slideImage();
  } else {
      counter--;
      slideImage();
  }
}

const goNext = () => {
  if (counter == slides.length - 1) {
      counter = 0;
      slideImage();
  } else {
      counter++;
      slideImage();
  }
}
const slideImage = () => {
slides.forEach(
  (slide) =>
  {
    slide.style.transform =`translateX(-${(counter)*100}%)`     
  }
)
}
