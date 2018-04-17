import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleChange, searchQuery }) => (
  <div
    style={{
      display: 'flex',
      paddingRight: '15%',
      justifyContent: 'flex-end',
      marginBottom: 24,
    }}
  >
    <input
      style={{
        padding: '.5em .6em',
        border: '1px solid #ccc',
        boxShadow: 'inset 0 1px 3px #ddd',
        borderRadius: '4px',
      }}
      value={searchQuery}
      placeholder="Search"
      onChange={handleChange}
    />
  </div>
);

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};

SearchBar.defaultProps = {
  searchQuery: '',
};

export default SearchBar;
