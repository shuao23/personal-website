import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string,
    logo: PropTypes.element,
    menuItems: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    const { title, logo, menuItems } = { ...this.props };
    return (
      <div className="Header">
        <div className="content">
          <div className="title">{title}</div>
          <div className="logo">{logo}</div>
          <ui className="items">
            {
              menuItems.map((item) => (
                <li className="item">{item}</li>
              ))
            }
          </ui>
        </div>
      </div >
    );    
  }
}

export default Header; 