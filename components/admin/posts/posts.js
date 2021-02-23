import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { usePostState, usePostDispatch } from './../../../context/post'
import { getPosts, removePost } from './../../../actions/post'
import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'

import Layout from './../utils/layout'
import Header from './../utils/listheader'
import Loader from './../../utils/loader'

export default function Posts() {
  const router = useRouter()

  const dispatchAnalytic = useAnalyticDispatch()
  const { analytics } = useAnalyticState()
  const dispatchPost = usePostDispatch()
  const { posts, loading } = usePostState()

  useEffect(() => {
    getPosts(dispatchPost)
    getAnalytics(dispatchAnalytic)
  }, [dispatchPost, dispatchAnalytic])

  const [search, setSearch] = useState('')

  const numOfLoadedPosts = router.query.num ? parseInt(router.query.num) : 10
  const numOfPosts = posts && posts.length

  return <Layout name="Postitused" searchbox placeholder="Otsi postitust" onChange={e => setSearch(e.target.value)}>
    <div className="admin_page">
      <Header posts/>
      {
        loading
          ? <div className="admin_loader"><Loader /></div>
          : <Fragment>
              {
                posts && posts.filter(el => el.name.toLowerCase().includes(search.toLowerCase())).map(el => <div key={el._id} className="admin_row admin_list admin_posts_list">
                  <img src={el.image} alt={el.name}/>
                  <Anchor id={el._id} name={el.name} style={{ width: '90%' }}/>
                  <Anchor id={el._id} name={el.category}/>
                  <Anchor id={el._id} name={el.author}/>
                  <Anchor id={el._id} name={new Date(el.createdAt).toLocaleDateString()}/>
                  <p>{analytics && analytics.filter(_el => _el.id === el._id).length}</p>
                  <div>
                    <Link href={`/private/admin/editpost?id=${el._id}`}><a>
                      <i className="fas fa-pen"/>
                    </a></Link>
                    <i className="fas fa-times" onClick={async () => {
                      if (confirm('Kas sa oled kindel, et soovid postituse kustutada?')) {
                        await removePost(dispatchPost, el._id)
                      }
                    }}/>
                  </div>
                </div>).slice(0, numOfLoadedPosts)
              }
              {
                numOfLoadedPosts < 10 || numOfLoadedPosts >= numOfPosts ? null : <p onClick={() => router.push(`/private/admin/posts?num=${numOfLoadedPosts + 10}`, undefined, { shallow: true })} className="admin_list_load_more_btn">Näita rohkem..</p>
              }
            </Fragment>
      }
    </div>
  </Layout>
}

const Anchor = ({ id, name, style }) => {
  return <Link href={`/posts/${id}?name=${name.replaceAll(' ', '-')}`}><a style={style}>
    {name}
  </a></Link>
}
