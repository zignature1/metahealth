import React from 'react';
import 'tachyons';

const Navigation = ({onRouteChange}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <button onClick={()=> onRouteChange('home')} className='f6 link br-pill ba bw1 ph3 pv2 mb2 dib navy pointer ma3'>Home Page</button>
      <button onClick={()=> onRouteChange('Signin')} className='f6 link br-pill ba bw1 ph3 pv2 mb2 dib navy pointer ma3'>Sign out</button>
    </nav>
  );
}

export default Navigation;
