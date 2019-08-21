import React from 'react';
import './App.css';
import BooksList from '../components/BooksList';
import BooksForm from '../components/BooksForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
