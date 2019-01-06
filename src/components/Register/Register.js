import React, { Component } from 'react';
import 'tachyons';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {formatDate,parseDate} from 'react-day-picker/moment';

class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Email: '',
        Password: '',
        Name: '',
        Address: '',
        Dob: new Date(),
        selectedDay: undefined
      };
      this.handleDayChange = this.handleDayChange.bind(this);
    }

    handleDayChange(day) {
    this.setState({ selectedDay: day });
    }

    onNameChange = (event) => {
      this.setState({Name: event.target.value})
    }

    onEmailChange = (event) => {
      this.setState({Email: event.target.value})
    }

    onPasswordChange = (event) => {
      this.setState({Password: event.target.value})
    }

    onAddressChange = (event) => {
      this.setState({Address: event.target.value})
    }

    onSubmitSignIn = () => {
      if (this.state.Name === "" || this.state.Email === "" || this.state.Password === "") {
        alert('Field(s) cannot be empty!')
      } else if (this.state.Email.includes("@") && this.state.Email.includes(".")) {
          fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: this.state.Email,
              password: this.state.Password,
              name: this.state.Name,
              address: this.state.Address,
              dob: this.state.selectedDay
            })
          })
          .then(response => response.json())
          .then(user => {
            if (user) {
              this.props.loadUser(user)
              this.props.onRouteChange('home')
            }
          })
        } else {
            alert('Please enter valid email.')
          }
      }



  render() {
    const {onRouteChange} = this.props;
    const { selectedDay } = this.state;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center bg">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                  />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Address</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="address"
                  id="address"
                  onChange={this.onAddressChange}
                  />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
                />
              </div>
              <div>
                {selectedDay && <p>Your birthdate:</p>}
                {!selectedDay && <p>Enter your birthdate</p>}
                <DayPickerInput formatDate={formatDate} parseDate={parseDate} placeholder={`${formatDate(new Date())}`} format="DD-MM-YYYY" onDayChange={this.handleDayChange} value={selectedDay}/>
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2 mt3"
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Register" />
            </div>
            <div className="">
              <p>Already registered? Please sign in.</p>
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2"
                onClick={()=> onRouteChange('Signin')}
                type="submit"
                value="Sign In" />
            </div>
          </div>
        </main>
      </article>
      );
  }
}

export default Register;
