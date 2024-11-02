import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = (query) => 
  axios.get(`${BASE_URL}?q=${query}`).then((response) => (response.data.items) || []);


export const fetchBookDetails = (bookId) =>
  axios.get(`${BASE_URL}/${bookId}`).then((response) => response.data);
