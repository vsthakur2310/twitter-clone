import React from 'react'
import './Widgets.css'
import { TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed  tweetId ={"1298858283852234752"} 
                options={{theme: 'dark'}}
                />

                {/* <TwitterTimelineEmbed 
                   sourceType="profile"
                  screenName="elonmusk"
                 options={{ height: 330 , theme: 'dark' }}
                /> */}
            </div>

            <div className="widgets_widgetContainer">
             <p>"Hey yo! You can actually make a tweet, so just go ahead and post whatever tf u want, also paste an image URL if you feel like attaching an image along with your tweet"</p>
             <br></br>
             <p>PS: Feed is scrollable </p>
            </div>

            <div className="widgets_widgetContainer">
             <p>-V.S.Thakur</p>
            </div>
        </div>
    )
}

export default Widgets
