import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
/*import Logo from './components/Logo/Logo';*/
import Drugs from './components/Cards/Drugs';
import Profile from './components/Cards/Profile';
import UpdateProfile from './components/Cards/UpdateProfile';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const initialState = {
  input: '',
  /*imageUrl: '',*/
  route: 'Signin',
  isSignedin: false,
  user: {
    id: '',
    name: '',
    email: '',
    update: 0,
    joined: ''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    }


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      update: 0,
      joined: data.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    } else if (route === 'home' || route === 'UpdateProfile') {
      this.setState({isSignedOut: true})
    }
    this.setState({route: route});
  }

  render() {
    /*const {isSignedIn, imageUrl, route} = this.state;*/
    return (
      <div className="App">

        { this.state.route === 'home'
        ? <div>
            <Navigation onRouteChange={this.onRouteChange}/>
            <Profile id={this.state.user.id} name={this.state.user.name} onRouteChange={this.onRouteChange}/>
            <Drugs onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          </div>
        : this.state.route === 'UpdateProfile'
        ? <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <UpdateProfile id={this.state.user.id} name={this.state.user.name} />
          </div>
        :
          ( this.state.route === 'Signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
