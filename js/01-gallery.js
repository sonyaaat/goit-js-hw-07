import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList=document.querySelector(".gallery");
galleryList.addEventListener('click',onPhotoOpen)
function createMarkup(items){
  const markup= items.map(({preview,original,description})=>
    {
        return `<div class="gallery__item">
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join('');
    return markup;
}
galleryList.insertAdjacentHTML("beforeend",createMarkup(galleryItems))
function onPhotoOpen(evt){
if(evt.target.nodeName!=="IMG")
{
    return;
}
const instance = basicLightbox.create(    `
<img width="1400" height="900" src="${evt.target.dataset.source}">
`,
    {onShow: () => { instance.element().querySelector('img').onclick = instance.close;
    window.addEventListener('keydown', onEscapeClick); },
    onClose: () => {
      window.removeEventListener('keydown', onEscapeClick);
    },},);
    function onEscapeClick(event)
    {
        if (event.key === 'Escape')
        {instance.close(); return; }
    }
instance.show();
    galleryList.addEventListener('click',onPhotoOpen)



}


