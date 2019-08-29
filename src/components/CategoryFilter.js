import React from 'react';


const bookCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

const filterCategories = [...['All'], ...bookCategories];

class CategoryFilter extends React.Component {
  render() {
    const filterOptions = filterCategories.map((category) => {
      return <option key={`filter-category-${category}`} value={category}>{category}</option>
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
