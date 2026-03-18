function DeleteWorkout({ id, fetchWorkouts }) {
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:4000/api/workouts/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      fetchWorkouts();
    }
  };

  return <button onClick={handleDelete}>Verwijderen</button>;
}

export default DeleteWorkout;