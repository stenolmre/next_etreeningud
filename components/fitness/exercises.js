import React, { Fragment, useState, useRef } from 'react'

const Exercises = ({ workout }) => {
  const [wu_ids, setWuIds] = useState([])
  const [wo1_ids, setWo1Ids] = useState([])
  const [wo2_ids, setWo2Ids] = useState([])
  const [wo3_ids, setWo3Ids] = useState([])
  const [c_ids, setCIds] = useState([])

  function close(arr, action, x) {
    const array = [...arr]
    const index = array.indexOf(x)

    if (index !== -1) {
      array.splice(index, 1)
      action(array)
    }
  }

  function open(arr, action, x) {
    action([...arr, x])
  }

  const cooldownSection = useRef()

  return (
    <div className="workout">
      <Exercise
        color="rgba(33, 33, 33, .4)"
        heading="soojendus"
        state={wu_ids}
        setState={setWuIds}
        type={workout.warmup}
        open={open}
        close={close}
        id="start"
      />
      <Exercise
        color="rgba(0, 112, 243)"
        heading="ring 1"
        state={wo1_ids}
        setState={setWo1Ids}
        type={workout.workout}
        open={open}
        close={close}
      />
      <Exercise
        color="rgb(247, 168, 12)"
        heading="ring 2"
        state={wo2_ids}
        setState={setWo2Ids}
        type={workout.workout}
        open={open}
        close={close}
      />
      <Exercise
        color="#ff4500"
        heading="ring 3"
        state={wo3_ids}
        setState={setWo3Ids}
        type={workout.workout}
        open={open}
        close={close}
      />
      <div ref={cooldownSection} />
      <Exercise
        color="rgba(33, 33, 33, .4)"
        heading="cooldown"
        state={c_ids}
        setState={setCIds}
        type={workout.cooldown}
        open={open}
        close={close}
      />
    </div>
  )
}

const Exercise = ({
  color,
  heading,
  state,
  setState,
  type,
  open,
  close,
  id,
}) => {
  return (
    <Fragment>
      <div className="workout_section_heading" id={id}>
        <h3 style={{ color: color }}>{heading}</h3>
        <div
          onClick={
            state.length < type.length
              ? () => setState(Array.from(Object.values(type), x => x._id))
              : () => setState([])
          }
        >
          <p>{state.length < type.length ? 'ava' : 'sulge'} videod</p>
          <i
            className={
              state.length < type.length
                ? 'fas fa-tv'
                : 'fas fa-tv inset_box_shadow'
            }
          />
        </div>
      </div>
      {type.map(x => (
        <div
          key={x._id}
          className={
            !state.includes(x._id)
              ? 'workout_exercise_closed'
              : 'workout_exercise'
          }
        >
          <div
            className="workout_exercise_details"
            onClick={
              state.includes(x._id)
                ? () => close(state, setState, x._id)
                : () => open(state, setState, x._id)
            }
          >
            <h4>{x.name}</h4>
            <p>{x.reps}</p>
          </div>
          <img
            src={`https://res.cloudinary.com/etreeningud/image/upload/v1613132726/Harjutuste_Videod/${x.gif}`}
            alt={x.name}
          />
        </div>
      ))}
    </Fragment>
  )
}

export default Exercises
