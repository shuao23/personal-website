import React, { Component } from 'react';
import './MainPage.css';
import MainHeader from './MainHeader';
import Logo from './Logo';
import Landing from './Landing';
import StaticImageLanding from './StaticImageLanding';

class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">
        <MainHeader title="Shuhei Aoki" logo={<Logo />} />
        <StaticImageLanding src="./tokyo-station.jpg">
          <Landing />
        </StaticImageLanding>
      </div>
    );
  }
}

export default MainPage;
