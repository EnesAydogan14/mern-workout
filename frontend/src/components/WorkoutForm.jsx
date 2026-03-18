import { useState } from 'react';

function WorkoutForm({ fetchWorkouts }) {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };

    const response = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    });

    const json = await response.json();

    if (response.ok) {
      setTitle('');
      setReps('');
      setLoad('');
      fetchWorkouts();
    } else {
      console.log(json.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nieuwe workout</h2>

      <label>Titel</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Reps</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <label>Load</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <button type="submit">Toevoegen</button>
    </form>
  );
}

export default WorkoutForm;