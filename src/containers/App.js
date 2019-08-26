import React from 'react';
import './App.css';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo">Bookstore CMS</div>
        <div className="span">BOOKS</div>
        <div className="span">CATEGORIES</div>
      </div>
      <div className="App-content">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
