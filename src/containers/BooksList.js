import React from 'react';
import { connect } from 'react-redux';



class BooksList extends React.Component {
  render() {


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
