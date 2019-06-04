import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LoginForm.css'
import * as API from '../../utils'
import md5 from 'md5'
import Info from '../../assets/info'
import { StreamChat } from 'stream-chat';
import { dataTransferItemsHaveFiles } from 'react-file-utils';


class LoginForm extends Component{
  constructor(props){
    super(props)
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
    const { name , value } = event.target
    this.setState({
      [name]: value
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

  toggleSignUp = (event) => {
    event.preventDefault();
    const { isSigningUp } = this.state

    this.setState({
      isSigningUp: !isSigningUp
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { isSigningUp, username, password } = this.state;
    let credentials;
    let token;
    if( isSigningUp ) {
      // const serverSideClient = new StreamChat(Info.apiKey, Info.serverSideToken)
      // const token = serverSideClient.createToken(username)
      const url = 'https://stream-chat-boilerplate.herokuapp.com/v1/token'
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: username,
            name: username
          }),
          headers: {'Content-Type':'application/json'}
        })
        if(!response.ok) {
          throw new Error(response.statusText);
        }
        token = await response.json();
        token = token.token
      } catch (error) {
        console.log(error);
      }

      credentials = {
        username: username,
        password: password,
        user_token: token
      }
      console.log(credentials)
      let thing = await API.signUpUser(credentials)
      console.log('thing', thing)
    }
    credentials= {
      username,
      password,
    }
    console.log('credentials', credentials)
    let login = await API.logInUser(credentials)
    if(login === null){
      document.querySelector('.login-page').append('Username And Password Do Not Match')
    }
    if(username === 'Jim Lahey'){
    await this.props.client.setUser({id: 'jlahey', name: username}, login.user_token)
    } else {
    await this.props.client.setUser({id: md5(username), name: username}, login.user_token)
    } 
    this.props.setChannel()
    this.props.toggleLoggedIn()
    this.props.history.push('/')
  }

  render(){
    const { username, password, isSigningUp, isDisabled } = this.state

    return(
      <div className='login-page'>
        <h1>Welcome to Trivia Chat</h1>
        <h3>{isSigningUp ? 'Sign Up' : 'Sign In'}</h3>
        <form className='login-form' onSubmit={ this.handleSubmit }>
          <section className='login-section'>
            <p>Username:</p>
            <input 
              className='username'
              name='username' 
              value={ username } 
              onChange={ this.handleInputChange } 
            />
          </section>
          <section className='login-section'>
            <p>Password:</p>
            <input 
              className='password'
              name='password' 
              type='password'
              value={ password } 
              onChange={ this.handleInputChange } 
            />
          </section>
          <button className='login-btn' onClick={ this.toggleSignUp }>
            { isSigningUp ? 'Already Have an Account?' : 'First Time Here?' }
          </button>
          <button 
            className='submit-btn' 
            onClick={ this.handleSubmit } 
            disabled={ isDisabled } 
          >
            { isSigningUp ? 'Sign Up' : 'Login' }
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)