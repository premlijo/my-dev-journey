import React, {useState } from 'react';
import './App.css';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';
import { searchBooks } from './services/bookApi';

function App() {
  const [books, setBooks] = useState([]);
  const [selecteBookId, setSelectedBookId] = useState(null);

  const handleSearch = (query) => {
    searchBooks(query).then((results) => setBooks(results));
  };
  const handleSelectBook = (bookId) => setSelectedBookId(bookId);

  return (
    <div className="App">
      {!selecteBookId ? (
        <>
        <BookSearch onSearch={handleSearch}/>
        <BookList books={books} onSelectBook={handleSelectBook}/>
        </>
      ) : {}}
      
    </div>
  );
}

export default App;
