import React from 'react';
import './App.css';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
