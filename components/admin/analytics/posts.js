import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { usePostState, usePostDispatch } from './../../../context/post'
import { getPosts } from './../../../actions/post'

import Loader from './../../utils/loader'
import Header from './header'

const Fitness = ({ analytics }) => {
  const router = useRouter()

  const dispatchPost = usePostDispatch()
  const { posts, loading } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  const findPost = (id) => posts && posts.filter(_el => _el._id === id)[0]

  const numOfLoadedPosts = router.query.num ? parseInt(router.query.num) : 10
  const numOfPosts = analytics && analytics.filter(el => el.category === 'blog').length

  return <Fragment>
    <Header />
    {
      loading ? <div className="admin_loader"><Loader /></div> : <Fragment>
        {
          analytics && posts && analytics.filter(el => el.category === 'blog').map(el => <Link key={el._id} href={`/posts/${el.id}?name=${findPost(el.id).name.toLowerCase().replaceAll(' ', '-')}`}><a className="admin_row admin_list admin_row_analytics">
            <img src={findPost(el.id).image} alt={el.id}/>
            <p>{findPost(el.id).name}</p>
            <p>{new Date(el.createdAt).toLocaleDateString()}</p>
            <p>{`${new Date(el.createdAt).getHours()}.${new Date(el.createdAt).getMinutes()}`}</p>
          </a></Link>).slice(0, numOfLoadedPosts)
        }
        {
          numOfLoadedPosts < 10 || numOfLoadedPosts >= numOfPosts ? null : <p onClick={() => router.push(`/private/admin/analytics?page=posts&num=${numOfLoadedPosts + 10}`, undefined, { shallow: true })} className="admin_list_load_more_btn">Näita rohkem..</p>
        }
      </Fragment>
    }
  </Fragment>
}

export default Fitness
