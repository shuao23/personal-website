import React from 'react';

const StaticImageLanding = ({ src, children }) => {
  return (
    <div className="StaticImageLanding" style={{ backgroundImage: "url(${ src });" }}>
      {children}
    </div >
  );
}

export default StaticImageLanding;