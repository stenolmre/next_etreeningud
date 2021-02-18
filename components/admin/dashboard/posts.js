import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { usePostState, usePostDispatch } from './../../../context/post'
import { getPosts } from './../../../actions/post'

import Loader from './../../utils/loader'

export default function Posts() {
  const dispatchPost = usePostDispatch()
  const { posts, loading } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  return <div className="admin_dashboard_list">
    <h3>Viimased Postitused</h3>
    {
      loading
        ? <div className="admin_loader"><Loader /></div>
        : posts && posts.map(el => <Link key={el._id} href={`/posts/${el._id}`}><a className="admin_row admin_dashboard_row admin_dashboard_posts_row">
            <img src={el.image} alt={el.name}/>
            <p>{el.name}</p>
          </a></Link>).slice(0, 2)
    }
  </div>
}
