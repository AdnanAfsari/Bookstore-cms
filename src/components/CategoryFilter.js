import React from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../utils';


const filterCategories = [...['All'], ...bookCategories];


const CategoryFilter = props => {
  const { handleFilterChange } = props;
  const filterOptions = filterCategories
    .map(category => <option key={category} value={category}>{category}</option>);
  return (
    <div>
      <b>Filter by:</b>
      <select onChange={handleFilterChange}>
        {filterOptions}
      </select>
    </div>
  );
};


CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
