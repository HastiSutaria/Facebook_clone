import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotolibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {
    // const { user } = useStateValue()[0]
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();


        setInput("")
        setImageUrl("")

    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={`What's on your mind?`}
                    />
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder={`Image URL (Optional)`}/>
                    <button onClick={handleSubmit} type ="submit">Hidden Submit</button>
                </form>

            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color:"red"}}/>
                    <h3>Live Video</h3>

                </div>
                <div className="messageSender__option">
                    <PhotolibraryIcon style={{ color:"green"}}/>
                    <h3>Photo/Video</h3>
                    
                </div>
                <div className="messageSender__option">
                    <InsertEmotionIcon style={{ color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                    
                </div>



            </div>


            
        </div>
    )
}

export default MessageSender
