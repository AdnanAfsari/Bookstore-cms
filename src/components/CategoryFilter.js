import React from 'react';
import { bookCategories } from '../utils'



const filterCategories = [...['All'], ...bookCategories];

class CategoryFilter extends React.Component {
  render() {
    const filterOptions = filterCategories.map((category) => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <b>Filter by:</b>
        <select onChange={this.props.handleFilterChange}>
          {filterOptions}
        </select>
      </div>
    );
  }
}

export default CategoryFilter;
