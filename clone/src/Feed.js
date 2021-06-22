import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feed() {
    return (
        <div className='feed'>
            {/* storyreel*/}
            <StoryReel />
           {/* message sender */}
           <MessageSender />

        </div>
    )
}

export default Feed;