
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book'
import { removeBook } from '../actions'
​
​
​
class BooksList extends React.Component {
  constructor(props) {
    super(props);
​
    this.handleBookRemove = this.handleBookRemove.bind(this);
  }
​
  handleBookRemove(book) {
    this.props.removeBook(book)
  }
​
  render() {
    const books = this.props.books.map((book) => {
      return <Book key={book.id} book={book} handleBookRemove={this.handleBookRemove} />;
    });
​
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </table>
      </div>
    )
  }
}
​
const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};
​
const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: book => dispatch(removeBook(book))
  }
};
​
​
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
