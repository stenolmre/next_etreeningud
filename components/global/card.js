import React from 'react'
import { useRouter } from 'next/router'

import parseDate from '@utils/parseDate'

import Tooltip from '@c/global/tooltip'

const Card = ({ id, image, category, equipment, title, time }) => {
  const router = useRouter()
  const openWorkout = () => router.push(`/fitness/${id}`)

  const setCategory = () => {
    if (category === 'jooga') return 'fas fa-yin-yang'
    if (category === 'jõud') return 'fas fa-heartbeat'
    if (category === 'HIIT') return 'fas fa-running'
    return 'fas fa-heartbeat'
  }

  return <div className="card" onClick={openWorkout}>
    <div className="card_top">
      <img src={image} alt={title}/>
      <div className="card_details">
        <Tooltip tooltip={category}>
          <i className={setCategory()}/>
        </Tooltip>
        <Tooltip tooltip={<div>Vahendid: <br/> {equipment}</div>}>
          <i className="fas fa-dumbbell"/>
        </Tooltip>
        <Tooltip tooltip={<div>Aeg: <br/> {time}min</div>}>
          <span>{time}</span>
        </Tooltip>
      </div>
    </div>
    <h4>{title}</h4>
  </div>
}

export default Card
