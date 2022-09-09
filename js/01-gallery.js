import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList=document.querySelector(".gallery");

galleryList.addEventListener('click',onPhotoOpen)

galleryList.insertAdjacentHTML("beforeend",createMarkup(galleryItems))



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

function onPhotoOpen(evt){
if(evt.target.nodeName!=="IMG")
{
    return;
}

	basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`, {
		onShow: (instance) => {document.addEventListener('keydown',event=>
        {
            if(event.key==="Escape")
            {
                instance.close();
            }
            console.log(event.key)
        })
        console.log("OPEN")
    },
     onClose: (instance) => document.removeEventListener('keydown', event=>
     {
         console.log("CLOSE")
         console.log(event.key)
     })}).show()

    }


