import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <label htmlFor="filterSelect">
        Category Filter
        <select id="filterSelect" onChange={handleFilter}>
          {categories.map((cat) => (
            <option key={cat} valur={cat}>{cat}</option>
          ))}
        </select>
      </label>
    </>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
