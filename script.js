document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".polaroid");
  const image1 = "images/polaroid.png";
  const image2 = "images/polaroid2.png"; // Remplace par une autre image

  images.forEach(img => {
      img.addEventListener("click", () => {
          img.src = img.src.includes(image1) ? image2 : image1;
      });
  });
});