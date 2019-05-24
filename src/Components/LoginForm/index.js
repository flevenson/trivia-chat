import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.css'

class LoginForm extends Component{
  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      user_token: "",
      id: "",
      isDisabled: true,
      isSigningUp: false
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      name: value
    });
    this.toggleDisabled();
  }

  toggleDisabled = (event) => {
    const { username, password } = this.state
    if( username, password ){
      this.setState({
        isDisabled: false
      });
    } else {
      this.setState({
        isDisabled: true
      });
    }
  }

  render(){
    const { username, password } = this.state

    return(
      <div>
        <form>
          <input 
            className='username'
            name='username' 
            value={ username } 
            onChange={ this.handleInputChange } 
          />
          <input 
            className='password'
            name='password' 
            value={ password } 
            onChange={ this.handleInputChange } 
          />
        </form>
      </div>
    )
  }
}

export default LoginForm