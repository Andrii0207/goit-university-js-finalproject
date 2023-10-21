import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")

function createGallery(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("")
}

galleryEl.insertAdjacentHTML("beforeend", createGallery(galleryItems))

galleryEl.addEventListener("click", onOpenModal)

function onOpenModal(e) {
    e.preventDefault()

    const isImage = e.target.classList.contains("gallery__image");

    if (!isImage) {
        return console.log("It's not a image")
    }

    new SimpleLightbox(".gallery a", {
        showCounter: false,
        captionDelay: 250,
        captionPosition: "bottom",
        close: false,
        overlayOpacity: 1,
        captionsData: `alt`
    })
}

