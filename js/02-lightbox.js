import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refGallery = document.querySelector(".gallery");
function createGallery() {
  const markup = galleryItems
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
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
  const lightbox = new SimpleLightbox(".gallery a", { close: true });
  document.addEventListener("keydown", closeLightbox);
  function closeLightbox() {
    lightbox.close();
  }
  // function onEscClose(event) {
  //   if (event.code === "Escape") {
  //     instance.close();
  //     document.removeEventListener("keydown", onEscClose);
  //   }
  // }
  // document.addEventListener("keydown", onEscClose);
}
