import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '39676340-6e766954fc3fa698c8d5ed3b9';

axios.defaults.baseURL = `${BASE_URL}`;

// перехоплювач

axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return Promise.reject(error);
    },
  );

  async function fetchPhoto() {
    const responce = await axios.get(options);
    const options = {
        params: {
            key: '39676340-6e766954fc3fa698c8d5ed3b9',
            q: `${searchQuery}`,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    }
    return responce.data;
  }
  
  export { fetchPhoto };
  