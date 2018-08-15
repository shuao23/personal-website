import React, { Component } from 'react';
import './MainPage.css';
import { MainHeaderTop } from './MainHeader';
import Landing from './Landing';
import StaticImageLanding from './StaticImageLanding';
import SALogo from './SALogo';
import tokyoStation from './tokyo-station.jpg';

class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">
        <StaticImageLanding src={tokyoStation}>
          <MainHeaderTop
            title="Shuhei Aoki"
            logo={<SALogo />} 
          />
          <Landing />
        </StaticImageLanding>
      </div>
    );
  }
}

export default MainPage;