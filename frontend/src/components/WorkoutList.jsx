import WorkoutItem from './WorkoutItem';

function WorkoutList({ workouts, fetchWorkouts }) {
  return (
    <div>
      <h2>Alle workouts</h2>

      {workouts.map((workout) => (
        <WorkoutItem
          key={workout._id}
          workout={workout}
          fetchWorkouts={fetchWorkouts}
        />
      ))}
    </div>
  );
}

export default WorkoutList;