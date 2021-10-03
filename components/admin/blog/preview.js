import React from 'react'

const Preview = ({ post, close }) => {
  return <div className="preview_container" onClick={close}>
    <div className="preview">
      {post}
    </div>
  </div>
}

export default Preview
