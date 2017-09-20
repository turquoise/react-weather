import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/">Posts</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/posts/new">Posts New</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/photogrid">Photogrid</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/reduxstagram">Reduxstagram</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/books">Book List</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/weather">Weather</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}



export default NavbarComponent;
