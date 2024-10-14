// Adds clickable functionality to the images in the gallery
function openLightbox(imageIndex) {
    var lightbox = document.getElementById("lightbox");
    var expandedImg = document.getElementById("expandedImg");
    var caption = document.getElementById("caption");
    var images = document.querySelectorAll(".image-container img");
  
    lightbox.style.display = "block";
    expandedImg.src = images[imageIndex].src;
    caption.innerHTML = images[imageIndex].alt;
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  