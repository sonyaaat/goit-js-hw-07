import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList=document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend",createMarkup(galleryItems))

function createMarkup(items)
{
    const markup= items.map(({preview,original,description})=>

        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    ).join('');
    console.log(markup);
    return markup
}


(function() {
    var $gallery = new SimpleLightbox('.gallery__item', {captions:"true",captionSelector:'img',captionType:"alt",captionPosition:"bottom",captonDelay:"250ms"});
})();
