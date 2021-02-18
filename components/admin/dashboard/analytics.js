// import React, { Fragment, useEffect } from 'react'
// import Link from 'next/link'
//
// import { usePostState, usePostDispatch } from './../../../context/post'
// import { getPosts } from './../../../actions/post'
// import { useFitState, useFitDispatch } from './../../../context/fitness'
// import { getWorkouts } from './../../../actions/fitness'
// import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
// import { getAnalytics } from './../../../actions/analytic'
//
// import Loader from './../../utils/loader'
//
// export default function Analytics() {
//   const dispatchPost = usePostDispatch()
//   const { posts, loading: load_posts } = usePostState()
//   const dispatchFit = useFitDispatch()
//   const { fitness, loading: load_fitness } = useFitState()
//   const dispatchAnalytic = useAnalyticDispatch()
//   const { analytics, loading: load_analytics } = useAnalyticState()
//
//   useEffect(() => {
//     getPosts(dispatchPost)
//     getFitness(dispatchFit)
//     getAnalytics(dispatchAnalytic)
//   }, [dispatchPost, dispatchFit, dispatchAnalytic])
//
//   return <div className="admin_dashboard_analytics">
//     <div>
//       {
//         load_analytics
//           ? <Loader />
//           : analytics && <h1>{analytics.length}</h1>
//       }
//       <p>Tehtud Treeningud<br/>Kokku</p>
//       <h4>Viimane Tehtud Treening
//         <br/>
//         <span style={{ textTransform: 'capitalize' }}>{analytics && !analytics.length < 1 && `${analytics[0].name} - ${new Date(analytics[0].createdAt).toLocaleDateString()}`}</span>
//       </h4>
//       <i className="fas fa-thumbs-up"/>
//     </div>
//     <div>
//       {
//         load_fitness
//           ? <Loader />
//           : fitness && <h1>{fitness.length}</h1>
//       }
//       <p>Jagatud Treeningud<br/>Kokku</p>
//       <i className="fas fa-heartbeat"/>
//     </div>
//     <div>
//       {
//         load_posts
//           ? <Loader />
//           : posts && <h1>{posts.length}</h1>
//       }
//       <p>Jagatud Postitused<br/>Kokku</p>
//       <i className="fas fa-pen"/>
//     </div>
//   </div>
// }
