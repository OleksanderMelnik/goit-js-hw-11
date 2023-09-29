import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39676340-6e766954fc3fa698c8d5ed3b9';


export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.PER_PAGE = 40;
  }
  async fetchPhoto() {    
    const options = {
    method: 'get',
    url: `${BASE_URL}`,
    params: {
      key: `${API_KEY}`,
      q: `${this.searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${this.page}`,
      per_page: `${this.PER_PAGE}`,
      },
  };
  try {  
    const response = await axios(options);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    
  }

}
  incrementPage() {
      this.page += 1;
    }

  currentPage() {
    this.page;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


  


  

  