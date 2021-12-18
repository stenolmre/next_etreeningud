import React, { useState } from 'react'

const Exercises = ({ workout }) => {
  const [wu_ids, setWuIds] = useState([])
  const [wo1_ids, setWo1Ids] = useState([])
  const [wo2_ids, setWo2Ids] = useState([])
  const [wo3_ids, setWo3Ids] = useState([])
  const [c_ids, setCIds] = useState([])

  const close = (arr, action, x) => {
    const array = [...arr]
    const index = array.indexOf(x)

    if (index !== -1) {
      array.splice(index, 1)
      action(array)
    }
  }

  const open = (arr, action, x) => action([...arr, x])

  return <div className="workout">
    <Exercise color="gray" heading="soojendus" state={wu_ids} setState={setWuIds} type={workout.warmup} open={open} close={close} id="start"/>
    <Exercise color="color-primary-blue" heading="ring 1" state={wo1_ids} setState={setWo1Ids} type={workout.workout} open={open} close={close}/>
    <Exercise color="color-secondary-yellow" heading="ring 2" state={wo2_ids} setState={setWo2Ids} type={workout.workout} open={open} close={close}/>
    <Exercise color="color-secondary-orange" heading="ring 3" state={wo3_ids} setState={setWo3Ids} type={workout.workout} open={open} close={close}/>
    <Exercise color="gray" heading="cooldown" state={c_ids} setState={setCIds} type={workout.cooldown} open={open} close={close}/>
  </div>
}

const Exercise = ({ heading, type, state, setState, color, open, close, id }) => {
  return <div className="exercise" id={id}>
    <div className="header" onClick={state.length < type.length ? () => setState(Array.from(Object.values(type), x => x._id)) : () => setState([])}>
      <h3 className={color}>{heading}</h3>
      <span>{state.length < type.length ? 'ava' : 'sulge'} videod</span>
      <i className="fas fa-tv"/>
    </div>
    {
      type.map(x => <div key={x._id} className={`video ${!state.includes(x._id) ? 'closed' : ''}`} onClick={state.includes(x._id) ? () => close(state, setState, x._id) : () => open(state, setState, x._id)}>
        <div className="info">
          <div>{x.name}</div>
          <span>{x.reps}</span>
        </div>
        <img src={`https://res.cloudinary.com/etreeningud/image/upload/v1613132726/Harjutuste_Videod/${x.gif}`} alt={x.name}/>
      </div>)
    }
  </div>
}

export default Exercises
