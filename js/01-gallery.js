import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery")


function createGallery(gallery) {
    return gallery.map(({ preview, original, description }) => `<li class="gallery__item" >
    <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
</li >`).join("")
}

listEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));
listEl.addEventListener("click", onOpenModal)

function onOpenModal(e) {
    const selectedImage = e.target.classList.contains("gallery__image")
    const originalSizeImg = e.target.dataset.source
    const altImg = e.target.alt

    console.log(originalSizeImg)

    if (!selectedImage) {
        return
    }

    const instance = basicLightbox.create(`<img src="${originalSizeImg}" alt="${altImg}"/>`, {
        closable: false,
    })
    instance.show(() => console.log("Lightbox now visible"))

    window.addEventListener("keydown", onCloseModal)

    function onCloseModal(e) {
        if (e.code === "Escape") {
            instance.close()
        }
    }
}



// <a class="gallery__link" href="${original}">
        
    // </a>
