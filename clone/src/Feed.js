import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
    return (
        <div className='feed'>
            {/* storyreel*/}
            <StoryReel />
           {/* message sender */}
           <MessageSender />

           <Post
        //    key={id}
           profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU"
           message="it works"
           timestamp="now"
           username="hastisutaria"
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dko0EtJ5i47Kn34fUn-UJtb5kXfCFQBJsg&usqp=CAU"
           />
           <Post />


        </div>
    )
}

export default Feed;
