import React from 'react';
import { Component } from 'react';

import BookList from './bookapp_list';
import BookDetail from './bookapp_detail';

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
