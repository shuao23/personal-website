import React from 'react';
import './Header.css';

const Header = ({ title, menuItems }) => {
  return (
    <div className="Header">
      <div className="content">
        <div className="title">{title}</div>
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

export default Header; 