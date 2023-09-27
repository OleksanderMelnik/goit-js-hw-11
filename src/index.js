import Notiflix from 'notiflix';
import { fetchPhoto } from './key-api';

const searchForm = document.getElementById('search-form');
const containerGallery = document.querySelector('.gallery');
const searchQuery = 40;

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
}

