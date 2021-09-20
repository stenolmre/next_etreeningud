import React, { Fragment } from 'react'
import Head from 'next/head'

import useTimer from '@hooks/useTimer'

import Layout from '@c/global/layout'

const Index = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  if (timer % 13 === 0) console.log(timer)

  const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)

    return `${getMinutes} : ${getSeconds}`
  }

  return <Fragment>
    <Head>
        <title>eTreeningud</title>
    </Head>
    <Layout>
      <h1 style={{ padding: '10rem 0 0 5rem' }}>stopwatch</h1>
      <div style={{ padding: '0 0 0 5rem' }} className='stopwatch-card'>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </Layout>
  </Fragment>
}

export default Index
