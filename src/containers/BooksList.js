import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book'




class BooksList extends React.Component {
  render() {
    const books = this.props.books.map((book) => {
      return <Book key={book.id} book={book} handleBookRemove={this.handleBookRemove} />;
    });

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

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};


export default connect(mapStateToProps)(BooksList);
