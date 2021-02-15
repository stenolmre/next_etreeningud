import React from 'react'

import { usePostState, usePostDispatch } from './../../context/post'
import { getPosts, ratePost } from './../../actions/post'

import { AddRating } from './rating'
import AddComment from './comment'

const Feedback = ({ post }) => {
  const dispatchPost = usePostDispatch()

  return <div className="blog_feedback">
    <h4>Jaga sõpradega</h4>
    <SocialLink href={`https://www.facebook.com/sharer/sharer.php?u=https://etreeningud.ee/posts/${post._id}?name=${post.name}`} icon="fab fa-facebook"/>
    <SocialLink href={`https://twitter.com/intent/tweet?text=${post.name}-${post.excerpt}`} icon="fab fa-twitter"/>
    <h4>Kuidas sulle postitus meeldis?</h4>
    <AddRating action={ratePost} id={post._id} dispatch={dispatchPost}/>
    <h4>Kirjuta meile tagasiside</h4>
    <AddComment post={post}/>
  </div>
}

export default Feedback

const SocialLink = ({ icon, href }) => <a className="blog_feeback_social_icon" rel="nofollow noopener" target="_blank" href={href}>
  <i className={icon}/>
</a>
