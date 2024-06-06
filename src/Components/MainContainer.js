import React, {useState} from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'

function MainContainer() {
const [conversations, setConversations]=useState([
        {
            name: "Name1",
            lastMessage: "MessageLast",
            timeStamp: "06-07-2024",
        },
        {
            name: "name2",
            lastMessage: "MessageLast2",
            timeStamp: "06-07-2024",
        },
        {
            name: "name3",
            lastMessage: "MessageLast3",
            timeStamp: "06-07-2024",
        }
    ]);
  return (
    <div className='main-container'>
      <Sidebar/>
      <ChatArea props={conversations[0]}/>
    </div>
  )
}

export default MainContainer

