import React from 'react';
import './Book.css';

const Book = (props) => {
  const { book } = props;

  return (
    <div className="panel">
      <div className="first">
        <h5>{book.category}</h5>
        <h2>{book.title}</h2>
        <p>Suzanne Collins</p>
        <div className="meta-panel">
          <div className="meta">Comments</div>
          <div className="meta"><button onClick={() => props.handleBookRemove(book)}>Remove Book</button></div>
          <div className="meta">Edit</div>
        </div>
      </div>
      <div className="second" />
      <div className="third">
        <h5>CURRENT CHAPTER</h5>
        <h5> CHAPTER 17</h5>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
