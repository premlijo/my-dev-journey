import React, {useState} from 'react';

const BookSearch = ({onSearch}) => {
    const [query,setQuery] = useState('');

    const handleSearch = () => {
        if(query) onSearch(query);
    };



return (
    <div className="mb-4 p-4 ">
        <input
        type="text"
        placeholder="Search books by title, author, or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control" 
        />
        <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
    </div>
);
};

export default BookSearch;