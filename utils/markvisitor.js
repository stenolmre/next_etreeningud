import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'

import { useAnalyticDispatch, useAnalyticState } from './../context/analytic'
import { addAnalytic } from './../actions/analytic'

const MarkVisitor = ({ children }) => {
  const dispatchAnalytic = useAnalyticDispatch()
  const { error } = useAnalyticState()

  const isVisited = Cookies.get('is_visited') ? Cookies.get('is_visited') : false

  const userVisited = async () => {
    await addAnalytic(dispatchAnalytic, { id: 'as_9dk', category: 'landing' }, () => Cookies.set('is_visited', 'true', { expires: 1/24 }))
  }

  useEffect(() => {
    if (!isVisited && process.env.NODE_ENV !== 'development') {
      userVisited()
    }
  }, [isVisited])

  return <Fragment>
    { children }
  </Fragment>
}

export default MarkVisitor
