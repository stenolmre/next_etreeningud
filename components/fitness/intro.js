import React from "react";
import Link from "next/link";

export default function Intro({ workout }) {
  return (
    <div className="workout_intro">
      <div className="workout_intro_image">
        <img src={workout.image} alt={workout.name} />
      </div>
      <div className="workout_details">
        <h2>{workout.name}</h2>
        <hr />
        <div className="workout_detail_left">
          <small>Soojendus</small>
        </div>
        <div className="workout_detail_right first_round">
          <h4>Ring 1</h4>
          <p>
            {workout.workout.length} harjutust | {workout.workout[0].reps}
          </p>
        </div>
        <div className="workout_detail_right">
          <small>Puhkus</small>
        </div>
        <div className="workout_detail_left second_round">
          <h4>Ring 2</h4>
          <p>
            {workout.workout.length} harjutust | {workout.workout[0].reps}
          </p>
        </div>
        <div className="workout_detail_left">
          <small>Puhkus</small>
        </div>
        <div className="workout_detail_right third_round">
          <h4>Ring 3</h4>
          <p>
            {workout.workout.length} harjutust | {workout.workout[0].reps}
          </p>
        </div>
        <div className="workout_detail_right">
          <small>Cooldown</small>
        </div>
        <Link href={`/fitness/${workout._id}#start`}>Alusta treeningut</Link>
      </div>
    </div>
  );
}
