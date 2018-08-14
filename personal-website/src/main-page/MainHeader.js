import React from 'react';
import Header from './Header';

const menuItems = [
  "About",
  "Projects",
  "Blog",
  "Resume"
];

const MainHeader = ({ title }) => ( 
  <Header
    title={title}
    menuItems={menuItems}
  />
);

export default MainHeader;
