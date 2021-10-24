import React, { Fragment } from 'react'

import Author from '@c/apps/blog/author'
import Card from '@c/global/card/blog'
import Footer from '@c/global/footer'

const Post = ({ post, posts }) => {
  const filteredPosts = posts.filter(_post => _post._id !== post._id)

  return <Fragment>
    <div className="page_container">
      <div className="post_container">
        <h1 className="post_title">{post.title}</h1>
        <Author post={post} />
        <div dangerouslySetInnerHTML={{ __html: `${post.content.data}` }} className="post"/>
        <div className="post_reaction">
          <span>
            <i className="far fa-heart"/>
            <span>{post.likes.length}</span>
          </span>
          <span>
            <i className="far fa-comment"/>
            <span>{post.comments.length}</span>
          </span>
        </div>
        <Author post={post} bio/>
        <h2>Loe veel postitusi</h2>
        {
          posts.length && filteredPosts.map(_post => <Card key={_post._id} post={_post} />).slice(0, 3)
        }
      </div>
    </div>
    <Footer />
  </Fragment>
}

export default Post
