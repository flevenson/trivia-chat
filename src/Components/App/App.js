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

const chatClient = new StreamChat(process.env.API_KEY || Info.apiKey);
const userToken = Info.sampleUserToken

chatClient.setUser(
  {
    id:'jlahey',
    name:'Jim Lahey',
    image: '../../assets/freddiePic.png'
  },
  userToken
)

const channel = chatClient.channel('messaging', 'testChannel', {
  name: 'Test Channel'
})

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      userLoggedIn: false
    }
  }

  render(){
    return (
      <div>
        <Route 
          exact path='/'
          render={()=> {
            return(
              <Stream client={ chatClient } channel={ channel }/>
            )
          }}
        />
        <Route 
          path='/login'
            component={ LoginForm }
        />
      </div>

    );
  }
}

export default withRouter(App);
