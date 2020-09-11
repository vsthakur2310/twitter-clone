import React, { useState } from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'

function Tweetbox() {
    const[tweetMessage, setTweetMessage] = useState(''); 
    const[tweetImage, setTweetImage] = useState('');  
    
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "V.S. Thakur",
            username: "vsthakur",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://pbs.twimg.com/profile_images/1281136782268981248/M0r_wAZZ_400x400.jpg"

        });

        setTweetImage("");
        setTweetMessage("");
    };
    
    return (
        <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src="https://pbs.twimg.com/profile_images/1281136782268981248/M0r_wAZZ_400x400.jpg"></Avatar>
            <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening?" 
            type="text"/>
            </div>
            
            <input className="tweetBox_imageInput"
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            placeholder="Optional: Enter Image URL" 
            type="text"/>
            
            
            <Button onClick={sendTweet} type="submit" >Tweet</Button>
        </form>
        </div>
    )
}

export default Tweetbox
