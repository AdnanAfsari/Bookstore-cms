import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const styles = {
  input: {
    marginRight: "10px",
    height: "45px",
    width: "60%",
    fontSize: "18px"
  },
  select: {
    marginRight: "10px",
    height: "50px",
    width: "20%",
    fontSize: "18px"
  },
  button: {
    padding: "10px",
    width: "18%",
    background: "#0290ff",
    color: "#fff",
    padding: "16px",
    fontSize: "18px"
  }
}


const bookCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

const generateID = () => {
  return Math.floor((Math.random() * 1000) + 1);
}


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createBook({
      id: generateID(),
      title: this.state.title,
      category: this.state.category
    });

    this.setState({
      title: '',
      category: 'Action'
    });

    event.target.reset();
  }

  render() {
    const bookOptions = bookCategories.map((category) => {
      return <option key={`book-category-${category}`} value={category}>{category}</option>
    });

    return (
      <div>
        <h3>ADD NEW BOOK</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} style={styles.input} type="text" name="title" />
          <select onChange={this.handleChange} style={styles.select} name="category">{bookOptions}</select>
          <input style={styles.button} type="submit" value="ADD BOOK"/>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(createBook(book))
  }
};



export default connect(null, mapDispatchToProps)(BooksForm);
