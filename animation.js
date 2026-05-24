// add this code in iframe if you want to create animation in iframe 


const imageContainer = document.getElementById('myImage');
const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
  // Add as many as you need
];

let currentIndex = 0;
let preloadedImages = [];
let loadedCount = 0;

// 1. The Preloading Function
function preloadImages(urls, callback) {
  urls.forEach((url, index) => {
    const img = new Image();
    img.src = url;
    
    img.onload = () => {
      preloadedImages[index] = img; // Store the actual image object
      loadedCount++;
      
      // Check if all images are done
      if (loadedCount === urls.length) {
        callback();
      }
    };

    img.onerror = () => {
      console.error("Failed to load image at: " + url);
    };
  });
}

// 2. The Animation Function
function startAnimation() {
  console.log("All images loaded. Starting animation...");
  
  setInterval(() => {
    // We update the 'src' of our visible <img> using the preloaded cache
    imageContainer.src = preloadedImages[currentIndex].src;
    
    currentIndex = (currentIndex + 1) % preloadedImages.length;
  }, 100); // 100ms = 10 frames per second
}

// 3. Kick it off
preloadImages(imageUrls, startAnimation);
