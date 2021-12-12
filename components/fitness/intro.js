import React from 'react'
import Link from 'next/link'

export default function Intro({ workout }) {
  return <div className="workout_intro">
    <div className="workout_intro_image">
      <img src={workout.image} alt={workout.name}/>
    </div>
    <div className="workout_details">
      <h2>{workout.name}</h2>
      {
        elements.map((element, index) => <div key={index} className={element.className}>
          <div>{element.name}</div>
          {element.exercises && <span>{workout.workout.length} harjutust | {workout.workout[0].reps}</span>}
        </div>)
      }
      <Link href={`/fitness/${workout._id}#start`}>
        <a>Alusta treeningut</a>
      </Link>
    </div>
  </div>
}

const elements = [
  { name: 'Soojendus', className: 'left', exercises: false },
  { name: 'Ring 1', className: 'right first', exercises: true },
  { name: 'Puhkus', className: 'right', exercises: false },
  { name: 'Ring 2', className: 'left second', exercises: true },
  { name: 'Puhkus', className: 'left', exercises: false },
  { name: 'Ring 3', className: 'right third', exercises: true },
  { name: 'Cooldown', className: 'right', exercises: false },
]
