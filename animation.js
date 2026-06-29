<html>
<head>
<style>
.slideshow {
  position: relative;
  width: 100%; 
  height: 400px; /* Adjust based on your needs */
}

.slideshow img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Total duration = 100ms (10 images * 10ms) */
  animation: fastFlip 0.1s infinite;
}

/* Staggering the animation by 10ms (0.01s) for each image */
.slideshow img:nth-child(1) { animation-delay: 0s; }
.slideshow img:nth-child(2) { animation-delay: 0.01s; }
.slideshow img:nth-child(3) { animation-delay: 0.02s; }
.slideshow img:nth-child(4) { animation-delay: 0.03s; }
.slideshow img:nth-child(5) { animation-delay: 0.04s; }
.slideshow img:nth-child(6) { animation-delay: 0.05s; }
.slideshow img:nth-child(7) { animation-delay: 0.06s; }
.slideshow img:nth-child(8) { animation-delay: 0.07s; }
.slideshow img:nth-child(9) { animation-delay: 0.08s; }
.slideshow img:nth-child(10) { animation-delay: 0.09s; }

@keyframes fastFlip {
  0% {
    opacity: 0;
  }
  /* The image becomes visible for its exact 10% slice of time */
  1%, 10% {
    opacity: 1;
  }
  11%, 100% {
    opacity: 0;
  }
}

</style>
</head>
<body>
<div class="slideshow">
  <img src="img1.jpg" alt="Image 1">
  <img src="img2.jpg" alt="Image 2">
  <img src="img3.jpg" alt="Image 3">
  <img src="img4.jpg" alt="Image 4">
  <img src="img5.jpg" alt="Image 5">
  <img src="img6.jpg" alt="Image 6">
  <img src="img7.jpg" alt="Image 7">
  <img src="img8.jpg" alt="Image 8">
  <img src="img9.jpg" alt="Image 9">
  <img src="img10.jpg" alt="Image 10">
</div>
</body></html>

