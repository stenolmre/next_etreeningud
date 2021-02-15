import React, { Fragment, useEffect, useState, useRef } from 'react'
import Link from 'next/link'

// import { useAnalyticDispatch } from './../../context/analytic'
// import { completeWorkout } from './../../actions/analytic'

// const useOnScreen = (ref) => {
//   const [isIntersecting, setIntersecting] = useState(false)
//
//   const observer = new IntersectionObserver(
//     ([entry]) => setIntersecting(entry.isIntersecting)
//   )
//
//   useEffect(() => {
//     observer.observe(ref.current)
//     return () => { observer.disconnect() }
//   }, [])
//
//   return isIntersecting
// }

const Completed = ({ workout }) => {
  // const dispatchAnalytic = useAnalyticDispatch()

  const [workoutDone, setWorkoutDone] = useState(false)

  const finish = useRef()
  // const isVisible = useOnScreen(finish)

  // const workoutIsCompleted = async () => {
  //   await completeWorkout(dispatchAnalytic, {
  //     workout_id: workout._id,
  //     image: workout.image,
  //     name: workout.name,
  //     category: workout.category,
  //     length: workout.length,
  //     equipment: workout.equipment
  //   })
  // }

  // useEffect(() => {
  //   if (isVisible && !workoutDone) {
  //     setWorkoutDone(true)
  //   }
  // }, [isVisible, workoutDone])

  return <Fragment>
    {
      workout && <div className="workout_completed_container" ref={finish}>
            <h1>tehtud!<br/>sa oled awesome!</h1>
            <hr/>
            <div className="workout_footer">
              <Link href="/"><a>Esileht</a></Link>
              <Link href="/fitness"><a>Treeningud</a></Link>
              <Link href="/posts"><a>Blogi</a></Link>
              <Link href="/"><a>Contact</a></Link>
            </div>
          </div>
    }
  </Fragment>
}

export default Completed
