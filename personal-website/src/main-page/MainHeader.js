import React from 'react';
import Header from './Header';

const menuItemsTop = [
  "ABOUT",
  "PROJECTS",
  "BLOG"
];

const menuItems = [
  "ABOUT",
  "PROJECTS",
  "BLOG",
  "RESUME"
];

const MainHeader = ({ title, logo }) => ( 
  <Header
    title={title}
    logo={logo}
    menuItems={menuItems}
  />
);

export default MainHeader;

export const MainHeaderTop = ({ title, logo }) => (
  <Header
    title={title}
    logo={logo}
    menuItems={menuItemsTop}
  />
);
