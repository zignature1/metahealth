import React from 'react';
import 'tachyons';
import './Drugs.css';

const Drugs = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className='pa2 shadow-1 drugbg ma3 fontroboto'>
        <p style={{display: 'flex', justifyContent: 'flex-start'}}>
        {'Medication information:'}
        </p>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            Current Medication Name: Name
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          Past Medication Name: Name
        </div>
        <div className='' style={{display: 'flex', justifyContent: 'flex-start'}}>
          <input className='mt3 pa0 h2 hover-bg-black hover-white' type='text' placeholder=' Type in drug name.' onChange={onInputChange}/>
        </div>
        <div className='pa3' style={{display: 'flex', justifyContent: 'flex-start'}}>
          <button className='mr3 f6 link br-pill ba bw1 ph3 pv2 mb2 dib navy grow' onClick={onButtonSubmit}>Add Drug</button>
        </div>
      </div>
  );
}

export default Drugs;
