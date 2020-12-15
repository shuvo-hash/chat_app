import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import db from '../firebase';
import './SidebarChat.css'

function SidebarChat({addNewChat, id, name}) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = ()=>{
        const roomName = prompt("please enter name for chat");

        if(roomName){
            // do some clever database stuff
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar className="sidebarChat__avatar" src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
            
        </div>
    ) : 
    <div onClick={createChat} className="sidebarChat">
        <h2>Add New Chat</h2>
    </div>
}

export default SidebarChat
