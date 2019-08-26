import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book'
import { changeFilter, removeBook } from '../actions'
import CategoryFilter from '../components/CategoryFilter';



const filteredBooks = (books, filter) => {
  if(filter === 'All') {
    return books;
  } else {
    return books.filter((book) => {
      return book.category === filter;
    });
  }
}


class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleBookRemove = this.handleBookRemove.bind(this);
  }

  handleFilterChange(event) {
    this.props.changeFilter(event.target.value);
  }

  handleBookRemove(book) {
    this.props.removeBook(book)
  }

  render() {
    const books = filteredBooks(this.props.books, this.props.filter).map((book) => {
      return <Book key={book.id} book={book} handleBookRemove={this.handleBookRemove} />;
    });

    return(
      <div>
      <CategoryFilter handleFilterChange={this.handleFilterChange}/>
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
    books: state.books,
    filter: state.filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: filter => dispatch(changeFilter(filter)),
    removeBook: book => dispatch(removeBook(book))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
