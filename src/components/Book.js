import React from 'react';

class Book extends React.Component {
  render() {
    const book = this.props.book;

    return(
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>
        remove
        </td>
      </tr>
    )
  }
}





export default Book;
