import React from 'react'
import"./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
               src="https://www.linkedin.com/embed/feed/update/urn:li:share:6813153176074665985"
               width="340px"
               height="943px"
               style={{ border: "none", overflow: 'hidden'}}
               scrolling="no"
               frameBorder="0"
               allowTransparency="true"
               allow="encrypted-media">

            </iframe>
        </div>
    )
}

export default Widgets;
