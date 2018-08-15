import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import HeaderTitle from './HeaderTitle';

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
          <HeaderTitle
            title={title}
            logo={logo}
          />
          <ul className="items">
            {
              menuItems.map((item, idx) => (
                <li className="item" key={idx}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div >
    );    
  }
}

export default Header; 