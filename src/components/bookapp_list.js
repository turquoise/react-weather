import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import BookDetail from './bookapp_detail';
//import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map( (book, index) => {
      console.log('index ', index);
      return (
          <li key={index}
              className="list-group-item"
              onClick={ () => this.props.selectBook(book)}>
            { book.title }
          </li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-6">
          { this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever is return will show up as props.
  return {
    books: state.books
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectBook: selectBook }, dispatch)
// }

export default connect(mapStateToProps, { selectBook })(BookList);
