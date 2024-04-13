function enlargeImage(image) {
    image.classList.add('enlarged');
  }
  
  function shrinkImage(image) {
    image.classList.remove('enlarged');
  }
  
  function fadeInImage(image) {
    image.style.opacity = '0';
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.05;
        image.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 50);
  }
  