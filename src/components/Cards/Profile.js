import React from 'react';
import 'tachyons';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModeEnabled: false,
    }
  }

  handleEditClick() {
  this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }

  render() {
    const {id, name, onRouteChange} = this.props;
    return (
      <div className='pa2 shadow-1 drugbg ma3'>
          <p style={{display: 'flex', justifyContent: 'flex-start'}}>
          {'Account Holder particulars:'}
          </p>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
              {'User ID:'} {id}
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
              {'Name:'} <input type="text" value={id} disabled={!this.state.editModeEnabled}/>
              <button onClick={this.handleEditClick.bind(this)}>Edit</button>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {'Age:'}
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {'Birthdate: ---- DD/MM/YY ----'}
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {'Address: ---- Address ----'}
          </div>
          <div className='pa3' style={{display: 'flex', justifyContent: 'flex-start'}}>
            <button onClick={()=> onRouteChange('UpdateProfile')} className='mr3 f6 link br-pill ba bw1 ph3 pv2 mb2 dib navy grow'>Update</button>
          </div>
        </div>
    );
  }
}

export default Profile;
