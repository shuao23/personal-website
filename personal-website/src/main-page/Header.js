import React from 'react';
import './Header.css';

const Header = ({ title, menuItems }) => {
  return (
    <div className="Header">
      {title}
      {
        menuItems.map((item) => (
          <div>{item}</div>
        ))
      }
    </div>
  );
}

export default Header; 