import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { usePostDispatch, usePostState } from './../../context/post'
import { commentPost, getPost } from './../../actions/post'

const Comment = () => {
  const { query } = useRouter()

  const dispatchPost = usePostDispatch()
  const { post } = usePostState()

  useEffect(() => { getPost(dispatchPost, query.id) }, [dispatchPost, query.id])

  const [showComments, setShowComments] = useState(false)
  const [commentData, setCommentData] = useState('')
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const addComment = async () => {
    setProcessing(true)
    if (commentData !== '') {
      await commentPost(dispatchPost, post._id, { comment: commentData }, () => setSuccess(true), () => setError(true))
    } else {
      setSuccess(false)
      setError(true)
    }
    setProcessing(false)
  }

  return <div className="blog_feedback_comments">
    <label>Tagasiside <span className="form_required">*</span></label>
    <textarea onChange={e => setCommentData(e.target.value)}/>
    <button onClick={addComment} disabled={processing}>{processing ? 'Saadan..' : 'Saada'}</button>
    { success && <p className="form_success">Tagasiside edukalt saadetud.</p> }
    { error && <p className="form_error">Palun täitke tagasiside väli ja proovige uuesti.</p> }
    <div className="blog_post_comments">
      <h5 onClick={() => setShowComments(!showComments)}>{showComments ? 'Sulge tagasisided': 'Loe tagasisidesid'}{`(${post && post.comments.length})`} <i className={showComments ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}/></h5>
      {
        post && post.comments.length < 1
          ? showComments && <p>Tagasisided puuduvad.</p>
          : showComments && post && post.comments.map((el, i) => <Fragment key={el._id}>
              {i > 0 && <hr />}
              <p>{el.comment}</p>
            </Fragment>)
      }
    </div>
  </div>
}

export default Comment
