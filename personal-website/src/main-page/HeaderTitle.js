import React from 'react';
import './HeaderTitle.css';

const HeaderTitle = ({ title, logo }) => (
  <div className="HeaderTitle">
    <div className="title">{title}</div>
    <div className="logo">{logo}</div>
  </div>
);

export default HeaderTitle;