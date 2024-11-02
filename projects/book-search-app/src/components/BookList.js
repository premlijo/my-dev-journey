import React from 'react';

const BookList = ({ books, onSelectBook }) => (
  <div className="row">
    {books.map((book) => (
      <div key={book.id} className="col-md-4 mb-4" onClick={() => onSelectBook(book.id)}>
        <div className="card">
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Cover" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{book.volumeInfo.title}</h5>
            <p className="card-text">{book.volumeInfo.authors?.join(', ')}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BookList;
