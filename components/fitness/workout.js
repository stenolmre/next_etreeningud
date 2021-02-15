import React, { Fragment } from 'react'

import Intro from './intro'
import Exercises from './exercises'
import Completed from './completed'

const Workout = ({ fit }) => {
  return <Fragment>
    <Intro workout={fit}/>
    <Exercises workout={fit}/>
    <Completed workout={fit}/>
  </Fragment>
}

export default Workout
