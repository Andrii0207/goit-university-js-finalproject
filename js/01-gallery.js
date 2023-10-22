import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector(".gallery")

function createGallery(gallery) {
    return gallery.map(({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("")
}

listEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));
listEl.addEventListener("click", onOpenModal)

function onOpenModal(e) {
    e.preventDefault()

    const selectedImage = e.target.classList.contains("gallery__image");
    const originalSizeImg = e.target.dataset.source;
    const altImg = e.target.alt;

    if (!selectedImage) {
        return
    }

    const instance = basicLightbox.create(`<div class="modal"><img src="${originalSizeImg}" alt="${altImg}"/></div>`, {
        onShow: instance => { window.addEventListener("keydown", onCloseModal) },
        onClose: instance => { window.removeEventListener("keydown", onCloseModal) }
    })
    instance.show()

    function onCloseModal(e) {
        if (e.code === "Escape") {
            instance.close()
        }
    }
}
