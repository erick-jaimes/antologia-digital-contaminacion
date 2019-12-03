var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
  }

var miVideo;

carga1=function() {
  miVideo1 = document.getElementById("video1"); 
}

function JuegaPausa1() { 
    if (miVideo1.paused) 
        miVideo1.play(); 
    else 
        miVideo1.pause(); 
} 

function Grande1() { 
    miVideo1.width = 630; 
}  

function Pequeno1() { 
    miVideo1.width = 320; 
} 

function Normal1() { 
    miVideo1.width = 420; 
} 

carga2=function() {
  miVideo2 = document.getElementById("video2"); 
}

function JuegaPausa2() { 
    if (miVideo2.paused) 
        miVideo2.play(); 
    else 
        miVideo2.pause(); 
} 

function Grande2() { 
    miVideo2.width = 630; 
}  

function Pequeno2() { 
    miVideo2.width = 320; 
} 

function Normal2() { 
    miVideo2.width = 420; 
} 

carga3=function() {
  miVideo3 = document.getElementById("video3"); 
}

function JuegaPausa3() { 
    if (miVideo3.paused) 
        miVideo3.play(); 
    else 
        miVideo3.pause(); 
} 

function Grande3() { 
    miVideo3.width = 630; 
}  

function Pequeno3() { 
    miVideo3.width = 320; 
} 

function Normal3() { 
    miVideo3.width = 420; 
} 


showSlides();
carga1();
// carga2();
carga3();
