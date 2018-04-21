import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.css';

const SearchBar = ({ handleChange, searchQuery }) => (
  <div className={styles['search-bar']}>
    <input
      className={styles['search-bar__input']}
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
