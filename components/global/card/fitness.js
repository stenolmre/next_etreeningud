import React from 'react'
import { useRouter } from 'next/router'

import Tooltip from '@ui/ui/tooltip'

const Card = ({ id, image, category, equipment, title, time }) => {
  const router = useRouter()
  const openWorkout = () => router.push(`/fitness/${id}`)

  return <div className="fit_card" onClick={openWorkout}>
    <div className="fit_card_top">
      <div className="fit_card_image" style={{ backgroundImage: `url(${ image })` }}/>
      <div className="fit_card_time">
        <Tooltip tooltip={<div>Treening kestab <br/> {time} minutit.</div>} position="left">
          <span>{time}</span>
        </Tooltip>
      </div>
    </div>
    <div className="fit_card_title">{title}</div>
    <div className="fit_card_details">
      <span>{category}</span>
      <span>{equipment}</span>
    </div>
  </div>
}

export default Card
