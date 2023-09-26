// import axios from 'axios';
// const API_KEY = ''

const BASE_URL = 'https://pixabay.com/api/';
API_KEY = '39676340-6e766954fc3fa698c8d5ed3b9';


function fetchServer() {
    return fetch(`${BASE_URL}?key=${API_KEY}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
};

fetchServer().then(response => {
    console.log(response);
  })
  
