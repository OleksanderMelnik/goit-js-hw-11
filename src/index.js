import Notiflix from 'notiflix';
import { fetchPhoto } from './key-api';

const searchForm = document.getElementById('search-form');
const containerGallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
    
    query = e.currentTarget.elements.searchQuery.value.trim();
    console.log(query);
    fetchPhoto()
    .then(data => {
       {
        renderMarkingToGallery(data.hits);
      }
    })
   
}


function renderMarkingToGallery(images) { 
    const markup = images.map(image => { const {id, largeImageURL, webformatURL, tags, likes, views, comments,downloads } = image;
      return `
        <a class="gallery__link" href="${largeImageURL}">
          <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
        </a>
      `;
    })
    .join('');

    containerGallery.insertAdjacentHTML('beforeend', markup);

}
  
