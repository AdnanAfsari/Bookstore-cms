import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { bookCategories, generateID } from '../utils';
import '../styles/BooksForm.css';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: 'Action',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    // eslint-disable-next-line
    const { title, category, error } = this.state;

    // Validating the input form
    if (title === '') {
      this.setState({
        error: 'Error: Title cannot be blank',
      });
    }

    event.preventDefault();

    this.props.createBook({
      id: generateID(),
      title,
      category,
    });

    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const bookOptions = bookCategories
      .map(category => <option key={category} value={category}>{category}</option>);

    return (
      <div>
        <h3>ADD NEW BOOK</h3>
        <div className="error">{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className="input" type="text" name="title" value={this.state.title} placeholder="Title" />
          <select onChange={this.handleChange} className="select" name="category" value={this.state.category}>{bookOptions}</select>
          <input className="button" type="submit" value="ADD BOOK" />
        </form>
      </div>
    );
  }
}


BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(null, { createBook })(BooksForm);
