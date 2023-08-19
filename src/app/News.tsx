import React from 'react'
import "../styles/news.css"

const News = () => {
  return (
    <div className='News'>
      <h1>IIIT - L in the News</h1>
      <div className="newCont">
        <div className="leftBox"></div>
        <div className="rightBoxCont">
          <div className="newsBoxes"></div>
          <div className="newsBoxes"></div>
          <div className="newsBoxes"></div>
        </div>
      </div>
      <h1>Public Announcements</h1>
    </div>
  )
}

export default News
