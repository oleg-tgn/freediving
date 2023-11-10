import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainingForm.css';

export default function TrainingForm({ onSubmit, editingTraining, readonly }) {
  const emptyExercise = {
      time: { value: '', type: 'time', label: 'Start Time' },
      exercise: { value: '', type: 'text', label: 'Exercise Name' },
      distance: { value: '', type: 'number', label: 'Distance (meters)' },
      rest: { value: '', type: 'time', label: 'Rest (min)' },
      numberApproaches: { value: '', type: 'number', label: 'Number Approaches' }
  };

  const emptyTrainingForm = {
    name: '',
    exercises: [emptyExercise]
  };

  const [exercisesForm, setExercisesForm] = useState(editingTraining || emptyTrainingForm);

  const handleExerciseChange = (exerciseIndex, field, value) => {
    const updatedExercises = [...exercisesForm.exercises];
    updatedExercises[exerciseIndex][field].value = value;
    setExercisesForm({...exercisesForm, exercises: updatedExercises});
  };

  const handleNameChange = (value) => {
    setExercisesForm({...exercisesForm, name: value});
  };

  const addExercise = () => {
    setExercisesForm({...exercisesForm, exercises: [...exercisesForm.exercises, emptyExercise]});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(exercisesForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">Train Title:</label>
      <input
        type='text'
        name='name'
        value={exercisesForm.name}
        onChange={(e) => handleNameChange(e.target.value)}
        className="form-control"
      />
      {exercisesForm.exercises.map((exercise, index) => (
        <div key={index}>
          <h3 className='exercise-title'>Exercise {index + 1}</h3>
          {Object.entries(exercise).map(([name, field]) => (
            <div key={name}>
              <label className="form-label">{field.label}:</label>
              <input
                type={field.type}
                name={name}
                value={field.value}
                onChange={(e) => handleExerciseChange(index, name, e.target.value)}
                className="form-control"
              />
            </div>
          ))}
        </div>
      ))}
      {!readonly &&
        <>
          <Button variant="primary" type="submit" className='mt-3' style={{'marginRight': '15px'}}>
            {editingTraining ? 'Update' : 'Submit'} Training
          </Button>

          <Button variant="secondary" onClick={addExercise} className='mt-3' disabled={exercisesForm.exercises.length >= 10}>
            <i className="fa-solid fa-plus"></i> Add Exercise
          </Button>          
        </>
      }
    </form>
  );
}