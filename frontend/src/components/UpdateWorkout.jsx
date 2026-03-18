import { useState } from 'react';

function UpdateWorkout({ workout, fetchWorkouts }) {
  const [title, setTitle] = useState(workout.title);
  const [reps, setReps] = useState(workout.reps);
  const [load, setLoad] = useState(workout.load);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedWorkout = { title, reps, load };

    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWorkout)
    });

    if (response.ok) {
      fetchWorkouts();
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h4>Workout aanpassen</h4>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <button type="submit">Opslaan</button>
    </form>
  );
}

export default UpdateWorkout;