import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { bookCategories, generateID } from '../utils';

const styles = {
  input: {
    marginRight: '10px',
    height: '45px',
    width: '60%',
    fontSize: '18px',
  },
  select: {
    marginRight: '10px',
    height: '50px',
    width: '20%',
    fontSize: '18px',
  },
  button: {
    width: '18%',
    background: '#0290ff',
    color: '#fff',
    padding: '16px',
    fontSize: '18px',
  },
};


class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: 'Action',
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
    const { title, category } = this.state;

    event.preventDefault();

    // eslint-disable-next-line
    this.props.createBook({
      id: generateID(),
      title,
      category,
    });

    this.setState({
      title: '',
      category: 'Action',
    });

    event.target.reset();
  }

  render() {
    const bookOptions = bookCategories.map((category) => (
      <option key={category} value={category}>{category}</option>));

    return (
      <div>
        <h3>ADD NEW BOOK</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} style={styles.input} type="text" name="title" placeholder="Title" />
          <select onChange={this.handleChange} style={styles.select} name="category" value="category">{bookOptions}</select>
          <input style={styles.button} type="submit" value="ADD BOOK" />
        </form>
      </div>
    );
  }
}


BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(null, { createBook })(BooksForm);
