import React from 'react'

const Video = ({ heading, subheading }) => {
  return <div className="landing_video_container">
    <div>
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </div>
    <div className="landing_video">
      <video autoPlay muted controls loop>
        <source src="https://res.cloudinary.com/etreeningud/video/upload/v1613459118/utils/videoplayback_fhiyvv.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
}

export default Video
