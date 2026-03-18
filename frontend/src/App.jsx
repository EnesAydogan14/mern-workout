import { useEffect, useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const response = await fetch('http://localhost:4000/api/workouts');
    const json = await response.json();

    if (response.ok) {
      setWorkouts(json);
    }
  };

  return (
    <div>
      <h1>MERN Workout App</h1>
      <WorkoutForm fetchWorkouts={fetchWorkouts} />
      <WorkoutList workouts={workouts} fetchWorkouts={fetchWorkouts} />
    </div>
  );
}

export default App;