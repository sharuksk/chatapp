import React, {useState} from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import Users_Groups from './Users_Groups'

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
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      {/* <ChatArea props={conversations[0]}/> */}
      <Users_Groups/>
    </div>
  )
}

export default MainContainer

