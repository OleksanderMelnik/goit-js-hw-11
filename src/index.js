import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import NewsApiService from './key-api'

let perPage = 0;
const newsApiService = new NewsApiService();

const searchForm = document.getElementById('search-form');
const containerGallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearchForm);
loadMore.addEventListener('click', onLoadMore)

function onSearchForm(e) {
    e.preventDefault();  
    
    newsApiService.query = e.currentTarget.elements.searchQuery.value.trim(); 
    containerGallery.innerHTML = '';
   
    if (newsApiService.query === '') {
      Notiflix.Notify.failure(
        'Sorry, but you did not enter anything. Please enter the text',
      );
      return;
    }
    newsApiService.currentPage();

  fetchPhoto();

}

function onLoadMore() {
  newsApiService.incrementPage();
  fetchPhoto();
}

loadMore.classList.add('is-hidden');

async function fetchPhoto() {  
  const response = await newsApiService.fetchPhoto();
  const { hits, totalHits } = response;
  if (totalHits === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
          )};          
      renderMarkingToGallery(hits);

loadMore.classList.remove('is-hidden');
      perPage += hits.length;
      console.log(perPage);
      lightBoxImag();
      Notiflix.Notify.success(`Hooray! We found ${totalHits - perPage} images.`);
  if (perPage >= totalHits) {
    Notiflix.Notify.failure(
      'We are sorry, but you have reached the end of search results.');
      loadMore.classList.add('is-hidden');
  }
    }

   
function renderMarkingToGallery(images) { 
    const markup = images.map(image => { const {id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
      return `<a class="" href="${largeImageURL}">
      <div class="photo-card" id="${id}">
      <img class="" src="${webformatURL}" alt="${tags}" loading="lazy" />
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

function lightBoxImag() {
  lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}


  

  
