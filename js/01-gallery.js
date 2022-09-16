import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refGallery = document.querySelector(".gallery");
function createGallery() {
  const markup = galleryItems
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
  refGallery.insertAdjacentHTML("beforeend", markup);
}
createGallery();
refGallery.addEventListener("click", makeLightbox);
function makeLightbox(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}">
  `
  );
  instance.show();
  function onEscClose(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscClose);
    }
  }
  document.addEventListener("keydown", onEscClose);
}
