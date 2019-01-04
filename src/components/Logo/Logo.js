import React from 'react';
import Tilt from 'react-tilt'
import 'tachyons';
import './Logo.css';
import Logoheart from './Logoheart.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner"><img alt='Logo' src={Logoheart}/></div>
      </Tilt>
    </div>
  );
}

export default Logo;
