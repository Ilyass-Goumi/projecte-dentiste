const icon = document.querySelector(".menu-bar i");
const list = document.querySelector(".nav");
const close = document.querySelector(".nav li a");

icon.onclick = () => {
     icon.classList.toggle ('fa-xmark');
     list.classList.toggle ('active');
    
 }
 

 const sr = ScrollReveal ({
   distance:"60px" ,
   duration: 2500 ,
   delay: 400,
   reset: true
 })

 sr.reveal('.box-element1 h1' ,{delay: 200 , origin: 'top'})
 sr.reveal('.box-element1 p' ,{delay: 600 , origin: 'left'})
 sr.reveal('.box-element1 button' ,{delay: 200 , origin: 'left'})
 sr.reveal('.container-about h1' ,{delay: 50 , origin: 'left'})
 sr.reveal('.container-box-about1' ,{delay: 150 , origin: 'top'})
 sr.reveal('.container-box-about2-1 .ego' ,{delay: 50 , origin: 'left'})
 sr.reveal('.container-box-about2-1 .ego1' ,{delay: 50 , origin: 'right'})
 sr.reveal('.container-box-about2-1 .ego2' ,{delay: 50 , origin: 'left'})
 sr.reveal('.container-box-about2-1 .ego3' ,{delay: 50 , origin: 'right'})
 sr.reveal('. container-3 h1' ,{delay: 50 , origin: 'top'})
 sr.reveal('.container-3-boxes' ,{delay: 50 , origin: 'top'})
 sr.reveal('.container-clients' ,{delay: 50 , origin: 'top'})
 sr.reveal('.container-3-boxes' ,{delay: 50 , origin: 'top'})
 sr.reveal('.container-contact' ,{delay: 50 , origin: 'left'})
