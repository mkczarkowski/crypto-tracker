import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import styleVars from '../../shared/styles/variables';

const SearchBar = ({ handleChange, searchQuery }) => {
  const styles = {
    container: {
      display: 'flex',
      marginRight: styleVars.baseMargin,
      justifyContent: 'flex-end',
      marginBottom: 24,
      '@media (max-width: 800px)': {
        marginRight: styleVars.smallMargin,
      },
    },
    input: {
      transition: 'all 0.30s ease-in-out',
      outline: 'none',
      padding: '0.5em 0.6em',
      margin: '5px 1px 3px 0px',
      border: '1px solid #DDDDDD',
      borderRadius: '4px',
      ':focus': {
        boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
        border: '1px solid rgba(81, 203, 238, 1)',
      },
    },
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        value={searchQuery}
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};

SearchBar.defaultProps = {
  searchQuery: '',
};

export default Radium(SearchBar);
