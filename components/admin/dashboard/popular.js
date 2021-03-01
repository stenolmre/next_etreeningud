import React, { useEffect, Fragment } from 'react'

import mostPopular from './../../../utils/findmostpopular'
import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'
import { usePostState, usePostDispatch } from './../../../context/post'
import { getPosts } from './../../../actions/post'

export default function Popular() {
  const { analytics } = useAnalyticState()
  const dispatchAnalytic = useAnalyticDispatch()
  const { posts } = usePostState()
  const dispatchPost = usePostDispatch()

  useEffect(() => {
    getAnalytics(dispatchAnalytic)
    getPosts(dispatchPost)
  }, [dispatchAnalytic, dispatchPost])

  const arrays = analytics && analytics.filter(el => el.category === 'blog').map(el => el.id)
  const mostRead = mostPopular([].concat.apply([], arrays))

  return <div className="most_ordered_item">
    {
      posts && analytics && mostRead && posts.filter(el => el._id === mostRead).map((el, i) => <Fragment key={i}>
        <div>
          <h3>Enim Loetud Postitus ({ analytics.filter(_el => _el.id === el._id).length })</h3>
          <h2>{el.name}</h2>
          <small>{el.category}</small>
          <br/><br/>
          <p>{el.excerpt}</p>
        </div>
        <div className="semi-circle">
          <img src={el.image} alt={el.name}/>
        </div>
      </Fragment>)
    }
  </div>
}
