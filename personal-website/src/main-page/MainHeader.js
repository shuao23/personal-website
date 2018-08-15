import React from 'react';
import Header from './Header';

const menuItems = [
  "ABOUT",
  "PROJECTS",
  "BLOG"
];

const MainHeader = ({ title, logo }) => ( 
  <Header
    title={title}
    logo={logo}
    menuItems={menuItems}
  />
);

export default MainHeader;
