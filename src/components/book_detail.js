import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { selectBook } from '../actions';

class BookDetail extends Component {

  componentDidMount() {

  }

  render() {
    let bookToDisplay = this.props.bookSelected;

    if (!bookToDisplay) {
      bookToDisplay = this.props.book[0];
      //return <div>Select a book to get started</div>
    } else {
      bookToDisplay = this.props.bookSelected;
    }
    return (
      <div>
        <h4>Title: {bookToDisplay.title}</h4>
        <p>Pages: {bookToDisplay.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookSelected: state.activeBook,
    book: state.books
  };
}

export default connect(mapStateToProps)(BookDetail);
