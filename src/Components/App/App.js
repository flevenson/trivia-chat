import React from 'react';
import './App.css';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const client = new StreamChat('hvup4mvjsmc2');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiamxhaGV5In0.yGezD5VjSrYHM9foL3qrH8GwYx9Alq96oENpXJkMVgw'

chatClient.setUser(
  {
    id:'fLevenson',
    name:'Freddie Levenson',
    image: '../../assets/freddiePic.png'
  },
  userToken
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
