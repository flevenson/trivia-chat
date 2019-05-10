import React from 'react';
import './App.css';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import  Info  from '../../assets/info.js'

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat(Info.apiKey);
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

function App() {
  return (
    <div className="App">
      <Chat client={ chatClient } theme={ 'messaging light' }>
        <Channel channel={ channel }>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}

export default App;
