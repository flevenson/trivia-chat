import React, { Component } from 'react';
import './App.css';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import  Info  from '../../assets/info.js'
import { Link, Route, withRouter } from 'react-router-dom';
import 'stream-chat-react/dist/css/index.css';
import Stream from '../Stream'
import LoginForm from '../LoginForm'
import { faSmile } from '@fortawesome/free-regular-svg-icons';

const chatClient = new StreamChat(process.env.API_KEY || Info.apiKey);
// const userToken = Info.sampleUserToken

// chatClient.setUser(
//   {
//     id:'jlahey',
//     name:'Jim Lahey',
//     image: '../../assets/freddiePic.png'
//   },
//   userToken
// )

let channel;

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      userLoggedIn: false
    }
  }

  toggleLoggedIn = () => {
    this.setState({
      userLoggedIn: !this.state.userLoggedIn
    })
  }

  setChannel = () => {
    channel = chatClient.channel('messaging', 'testChannel', {
      name: 'Test Channel'
    })
  }

  render(){
    return (
      <div>
        <Route 
          exact path='/'
          render={()=> {
            if(!this.state.userLoggedIn){
              this.props.history.push('/login')
            } else {
              return(
                <Stream client={ chatClient } channel={ channel }/>
              )
            }
          }}
        />
        <Route 
          exact path='/login'
            render={() => {
              return(
                <LoginForm 
                  client={ chatClient } 
                  toggleLoggedIn={ this.toggleLoggedIn }
                  setChannel={ this.setChannel }
                  history={ this.props.history } />
              )
            }}
        />
      </div>

    );
  }
}

export default withRouter(App);
