const letter = document.getElementById("letterText");

letter.addEventListener("input", () => {
  localStorage.setItem("letter", letter.innerHTML);
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("letter");
  if (saved) letter.innerHTML = saved;
});

const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

/* ===== IMÁGENES ===== */

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image7.png",
  "image8.png",
  "image9.png",
  "image10.png",
  "image11.png",
  "image12.png",
  "image13.png",
  "image14.png",
  "image15.png",
  "image16.png",
  "image17.png",
  "image18.png",
  "image19.png",
  "image20.png",
  "image21.png",
  "image22.png",
  "image23.png",
  "image24.png",
  "image25.png",
  "image26.png",
  "image27.png",
  "image28.png",
  "image29.png",
  "image30.png",
  "image31.png",
  "image32.png",
  "image33.png",
];


/* ===== GENERAR GALERÍA ===== */

const galleryGrid =
  document.querySelector(".gallery-grid");

images.forEach(image => {

  const img = document.createElement("img");

  img.src = `assets/img/galeria/${image}`;

  galleryGrid.appendChild(img);

});


/* ===== POPUP ===== */

const galleryPopup =
  document.getElementById("galleryPopup");

const openGallery =
  document.getElementById("openGallery");

const closeGallery =
  document.getElementById("closeGallery");

const closeGalleryBtn =
  document.getElementById("closeGalleryBtn");


/* ===== ABRIR ===== */

openGallery.addEventListener("click", () => {

  galleryPopup.classList.add("active");

});


/* ===== CERRAR ===== */

closeGallery.addEventListener("click", () => {

  galleryPopup.classList.remove("active");

});

closeGalleryBtn.addEventListener("click", () => {

  galleryPopup.classList.remove("active");

});

// Contador de días
const fechaInicio = new Date(2025, 4, 24);

function actualizarDias() {
  const hoy = new Date();

  hoy.setHours(0, 0, 0, 0);
  fechaInicio.setHours(0, 0, 0, 0);

  const diferencia = hoy.getTime() - fechaInicio.getTime();

  const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
  );

  document.getElementById("contadorDias").textContent =
    `${dias} días contigo`;
}

actualizarDias();