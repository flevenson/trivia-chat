import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import  Info  from '../../assets/info.js'
import 'stream-chat-react/dist/css/index.css';
import { withRouter } from 'react-router-dom';
import './Stream.css'

const Stream = ({ client, channel }) => {

  return (    
    <div className="Stream">
      <Chat client={ client } theme={ 'messaging light' }>
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
  )
}

export default withRouter(Stream)