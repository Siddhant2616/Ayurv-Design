var modal = document.getElementById("myModal");
 
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
}

modal.onclick = function() {
  img01.className += " out";
  setTimeout(function() {
     modal.style.display = "none";
     img01.className = "modal-content";
   }, 200);
}

 var modal2 = document.getElementById("myModal2");
 
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    modalImg2.alt = this.alt;
}

modal2.onclick = function() {
    img02.className += " out";
    setTimeout(function() {
       modal2.style.display = "none";
       img02.className = "modal-content";
     }, 200);
    
 }

 var modal3 = document.getElementById("myModal3");
 
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    modalImg3.alt = this.alt;
}

modal3.onclick = function() {
    img03.className += " out";
    setTimeout(function() {
       modal3.style.display = "none";
       img03.className = "modal-content";
     }, 200);
    
    }



