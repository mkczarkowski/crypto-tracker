import React from "react";

const SearchBar = ({ handleChange, searchQuery }) => (
  <div>
    <input value={searchQuery} onChange={handleChange} />
  </div>
);

export default SearchBar;
