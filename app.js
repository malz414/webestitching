
let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })

  
  const track = document.getElementById("image-track");

  // Function to handle wheel scroll event
  const handleWheelScroll = event => {
    // Get the distance that the mouse wheel was rotated
    const delta = event.deltaY;
    
    if (delta > 0) {
      // Scrolling down
      scrollImages(-1.11);
    } else if (delta < 0) {    
      // Scrolling up
      scrollImages(1.11);
    }
  };
  
  // Function to scroll images
  const scrollImages = percentage => {
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
          if (nextPercentage < -75) {
            return; // If so, stop scrolling
          }
        
    track.dataset.percentage = nextPercentage;
  
    track.animate({
      transform: `translate(-50%, ${nextPercentage}%)`
    }, { duration: 1200, fill: "forwards" });
  
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  
    track.dataset.prevPercentage = track.dataset.percentage;
  };
  
  // Attach wheel scroll event listener to handle scrolling
  document.addEventListener('wheel', handleWheelScroll);
  
    document.addEventListener('keydown', function(event) {
      // Get the distance that the mouse wheel was rotated

      const key = event.key;
    
   switch(key){
      case "ArrowDown":
        // Up pressed
 
       
              const percentage = .010 * -100,
              nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
              nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

              if (nextPercentage < -85) {
                return; // If so, stop scrolling
              }
        
        track.dataset.percentage = nextPercentage;
        
        track.animate({
          transform: `translate(-50%, ${nextPercentage}%)`
        }, { duration: 1200, fill: "forwards" });
        
        for(const image of track.getElementsByClassName("image")) {
          image.animate({
            objectPosition: `${100 + nextPercentage}% center`
          }, { duration: 1200, fill: "forwards" });
        }
        track.dataset.prevPercentage = track.dataset.percentage;
          
          break;
          case "ArrowUp":  
          {    
               const percentage = -.005 * -100,
              nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
              nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        
        track.dataset.percentage = nextPercentage;
        
        track.animate({
          transform: `translate(-50%, ${nextPercentage}%)`
        }, { duration: 1200, fill: "forwards" });
        
        for(const image of track.getElementsByClassName("image")) {
          image.animate({
            objectPosition: `${100 + nextPercentage}% center`
          }, { duration: 1200, fill: "forwards" });
        }
        track.dataset.prevPercentage = track.dataset.percentage;
          }
      break;
      
      // Check the value of delta
    
      }});
const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientY,
        maxDelta = window.innerHeight / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        if (nextPercentage < -85) {
          return; // If so, stop scrolling
        }
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(-50%, ${nextPercentage}%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

const track1 = document.getElementById("image-track");

const handleOnDown1 = e => track1.dataset.mouseDownAt = e.clientY;

const handleOnUp1 = () => {
  track1.dataset.mouseDownAt = "0";  
  track1.dataset.prevPercentage = track1.dataset.percentage;
}

var throttle1 = 0;
var throttleIndex1 = 0;

document.addEventListener('scroll', function(event) {
  // Get the direction of the scroll
  const deltaY = event.deltaY;

  if (deltaY > 0) {
    // Scrolling down
    const percentage = .010 * -100,
          nextPercentageUnconstrained = parseFloat(track1.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

          if (nextPercentage < -85) {
            return; // If so, stop scrolling
          }

    track1.dataset.percentage = nextPercentage;

    track1.animate({
      transform: `translate(-50%, ${nextPercentage}%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track1.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
    track1.dataset.prevPercentage = track1.dataset.percentage;
  } else if (deltaY < 0) {    
    // Scrolling up
    const percentage = -.01 * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track1.dataset.percentage = nextPercentage;

    track1.animate({
      transform: `translate(-50%, ${nextPercentage}%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track1.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
    track1.dataset.prevPercentage = track.dataset.percentage;
  }
});
// Get the modal


var images = document.querySelectorAll("#image-track img");

// Get the modal and modal content
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Iterate through each image and attach the modal functionality
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Close the modal when the close button is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
} 

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

const hamburger = document.querySelector('.hamburger');
const imageContainer = document.querySelector('.image-container');

// Function to toggle image container visibility on hamburger click
hamburger.addEventListener('click', () => {
  if (imageContainer.style.display === 'flex') {
    imageContainer.style.display = 'none';
  } else {
    imageContainer.style.display = 'flex';
  }
});
const headImg = document.querySelectorAll('.image-container img');

headImg.forEach(image => {
    image.addEventListener('onmouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.filter = 'grayscale(0%)';
    });

    image.addEventListener('onmouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.filter = 'grayscale(100%)';
    });
});