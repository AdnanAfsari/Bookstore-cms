import React from 'react';
import { connect } from 'react-redux';
​
​
const bookCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];
​
​
class BooksForm extends React.Component {
  render() {
    const bookOptions = bookCategories.map((category) => {
      return <option key={`book-category-${category}`} value={category}>{category}</option>
    });
​
    return (
      <div>
        <h3>Books form:</h3>
        <form>
          <input type="text" name="title" />
          <select name="category">{bookOptions}</select>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
​
​
​
export default connect()(BooksForm);
