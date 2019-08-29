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

const BooksList = (props) => {
  const handleFilterChange = (event) => props.changeFilter(event.target.value);
  const handleBookRemove = (book) => props.removeBook(book);

  const books = filteredBooks(props.books, props.filter).map((book) => {
    return <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />;
  });

  return(
    <div>
    <CategoryFilter handleFilterChange={handleFilterChange}/>
    <div>{books}</div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    books: state.books,
    filter: state.filter
  }
};

export default connect(mapStateToProps, { changeFilter, removeBook })(BooksList);
