import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {

  render() {
    return (
      <div>
        <div><Link to="/">Posts</Link></div>
        <div><Link to="/posts/new">Posts New</Link></div>
        <div><Link to="/photogrid">Photogrid</Link></div>
        <div><Link to="/reduxstagram">Reduxstagram</Link></div>
        <div><Link to="/books">Book List</Link></div>
        <div><Link to="/weather">Weather</Link></div>
        <hr />
      </div>
    )
  }
}



export default NavbarComponent;
