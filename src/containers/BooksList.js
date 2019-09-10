import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';


const filteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter);
};


const BooksList = props => {
  const {
    changeFilter, removeBook, filter,
  } = props;


  const handleFilterChange = event => changeFilter(event.target.value);


  const books = filteredBooks(props.books, filter).map(book => (
    <Book key={book.id} book={book} handleBookRemove={removeBook} />));

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div>{books}</div>
    </div>
  );
};


const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});


BooksList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, { changeFilter, removeBook })(BooksList);
