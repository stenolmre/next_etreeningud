import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { usePostState, usePostDispatch } from './../../../context/post'
import { getPosts } from './../../../actions/post'

import Layout from './../utils/layout'
import Header from './../utils/listheader'
import Loader from './../../utils/loader'

export default function Posts() {
  const dispatchPost = usePostDispatch()
  const { posts, loading } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  const [search, setSearch] = useState('')

  return <Layout name="Postitused" searchbox placeholder="Otsi postitust" onChange={e => setSearch(e.target.value)}>
    <div className="admin_page">
      <Header posts/>
      {
        loading
          ? <div className="admin_loader"><Loader /></div>
          : posts && posts.filter(el => el.name.toLowerCase().includes(search.toLowerCase())).map(el => <div key={el._id} className="admin_row admin_list admin_posts_list">
              <img src={el.image} alt={el.name}/>
              <Anchor id={el._id} name={el.name} style={{ width: '90%' }}/>
              <Anchor id={el._id} name={el.category}/>
              <Anchor id={el._id} name={el.author}/>
              <Anchor id={el._id} name={new Date(el.createdAt).toLocaleDateString()}/>
              <div>
                <i className="fas fa-pen"/>
                <i className="fas fa-times"/>
              </div>
            </div>)
      }
    </div>
  </Layout>
}

const Anchor = ({ id, name, style }) => {
  return <Link href={`/posts/${id}?name=${post.name.replaceAll(' ', '-')}`}><a style={style}>
    {name}
  </a></Link>
}
