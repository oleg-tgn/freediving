import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TrainingForm({ onSubmit, editingTraining, readonly }) {
  const [form, setForm] = useState({
      title: { value: '', type: 'text', label: 'Title' },
      time: { value: '', type: 'time', label: 'Start Time' },
      exercise: { value: '', type: 'text', label: 'Exercise Name' },
      distance: { value: '', type: 'number', label: 'Distance (meters)' },
      rest: { value: '', type: 'time', label: 'Rest (min)' },
      numberApproaches: { value: '', type: 'number', label: 'Number Approaches' }
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({
          ...prevForm,
          [name]: { ...prevForm[name], value },
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  useEffect(() => {
    if (editingTraining) {
      setForm(editingTraining);
    }
  }, [editingTraining]);

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(form).map(([name, field]) => (
            <div key={name}>                
                <label className="form-label">
                    {field.label}:
                </label>
                <input
                    type={field.type}
                    name={name}
                    value={field.value}
                    onChange={handleChange}
                    className="form-control"
                    disabled={!!readonly}
                />
            </div>
        ))}
      {!readonly ?
        <Button variant="primary" type="submit" className='mt-3'>
          {editingTraining ? 'Update' : 'Add'} Train
        </Button>
        : ''
      }
    </form>
  );
}
