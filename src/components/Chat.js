import { Avatar, IconButton } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import './Chat.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(input)
        setInput("");
    }

   

    

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                
            </div>

            <div className="chat__body">
                
                <p className={`chat__message ${true && "chat__reciever"}`}><span className="chat__name">Shuvo rahaman</span> Hey Guys <span className="chat__timestamp">12.30 pm</span></p> 
                
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>

                <form action="" onSubmit={sendMessage}  >
                    <input value={input} onChange= {(e)=>{
                        setInput(e.target.value)
                    }} type="text" placeholder="Write a message"/>

                    <IconButton type="submit" >
                    <SendIcon  />
                    </IconButton>

                    {/* <button onClick={sendMessage} type="submit"></button> */}

                </form>

                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default Chat

