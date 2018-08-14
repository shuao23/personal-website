import React, { Component } from 'react';
import './MainPage.css';
import MainHeader from './MainHeader';

class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">
        <MainHeader title="Shuhei Aoki" />
      </div>
    );
  }
}

export default MainPage;
