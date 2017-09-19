import React from 'react';
import { Component } from 'react';

import BookList from './book_list';
import BookDetail from './book_detail';

export default class BookApp extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
