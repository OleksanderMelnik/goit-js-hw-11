import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39676340-6e766954fc3fa698c8d5ed3b9';

  async function fetchPhoto() {
      let searchQuery = 40;
      const options = {
      method: 'get',
      url: `${BASE_URL}`,
      params: {
        key: `${API_KEY}`,
        q: `${searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        },
    };
    try {  
      const response = await axios(options);
      console.log(response);
      const data = response.data;
      console.log(data);
      return data;
      
    } catch (error) {
      console.error(error);
      
    }
  }

  export { fetchPhoto };
  