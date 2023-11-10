import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainingForm.css';

export default function TrainingForm({ onSubmit, editingTraining, readonly }) {
  const emptyExercise = {
      title: { value: '', type: 'text', label: 'Title' },
      time: { value: '', type: 'time', label: 'Start Time' },
      exercise: { value: '', type: 'text', label: 'Exercise Name' },
      distance: { value: '', type: 'number', label: 'Distance (meters)' },
      rest: { value: '', type: 'time', label: 'Rest (min)' },
      numberApproaches: { value: '', type: 'number', label: 'Number Approaches' }
  };

  const [exercises, setExercises] = useState(editingTraining || [emptyExercise]);

  const handleExerciseChange = (index, e) => {
    const newExercises = [...exercises];
    newExercises[index][e.target.name] = e.target.value;
    setExercises(newExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, emptyExercise]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(exercises);
  };

  return (
    <form onSubmit={handleSubmit}>
      {exercises.map((exercise, index) => (
        <div key={index}>        
          <h3 className='exercise-title'>Exercise {index + 1}:</h3>
          {Object.entries(exercise).map(([name, field]) => (
            <div key={name}>                
              <label className="form-label">
                  {field.label}:
              </label>
              <input
                  type={field.type}
                  name={name}
                  value={field.value}
                  onChange={(e) => handleExerciseChange(index, e)}
                  className="form-control"
                  disabled={!!readonly}
              />
            </div>
          ))}
        </div>
      ))}
      {!readonly &&
        <>
          <Button variant="secondary" onClick={addExercise} className='mt-3 button-add-train'>
            Add Exercise
          </Button>
          <Button variant="primary" type="submit" className='mt-3'>
            {editingTraining ? 'Update' : 'Submit'} Training
          </Button>
        </>
      }
    </form>
  );
}