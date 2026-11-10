import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;