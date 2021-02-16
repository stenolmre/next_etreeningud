import React from 'react'

const Video = () => {
  return <div className="landing_video_container">
    <div>
      <h2>Treeni jõusaalis. Treeni kodus.</h2>
    </div>
    <div className="landing_video">
      <video autoPlay muted controls loop>
        <source src="https://res.cloudinary.com/etreeningud/video/upload/v1613459118/utils/videoplayback_fhiyvv.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
}

export default Video
