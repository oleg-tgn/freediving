import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import { useTrainingsContext } from "../../providers/TrainingsProvider";

function TrainingsList() {
    const { trainings } = useTrainingsContext();

    const trainingsArray = Object.keys(trainings).sort((a, b) => new Date(a) - new Date(b)).map(date => ({
        date,
        trainings: trainings[date]
    }));

    function exercisesTable(exercises) {
        if (!exercises || exercises.length === 0) return 'No exercises';
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='col-3'>Exercise Name</th>
                        <th scope="col" className='col-3'>Distance (meters)</th>
                        <th scope="col" className='col-3'>Rest (min)</th>
                        <th scope="col" className='col-3'>Number Approaches</th>                      
                    </tr>
                </thead>
                <tbody>
                     {exercises.map((ex, index) => (                                                
                        <tr key={ex.exercise.value + index}>                           
                            <td>{ex.exercise.value}</td>
                            <td>{ex.distance.value}</td> 
                            <td>{ex.rest.value}</td> 
                            <td>{ex.numberApproaches.value}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        );
    };

    return (
        <div className="row">
          <div className="col-12">
            <h1 className="title mb-3 calendar-title">
                <span>Trainings List</span>
            </h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='col-2'>Date</th>
                        <th scope="col" className='col-2'>Title</th>
                        <th scope="col" className='col-2'>Time</th>
                        <th scope="col" className='col-6'>Exercises</th>                      
                    </tr>
                </thead>
                <tbody>
                    {trainingsArray.map(({ date, trainings }) => (
                        trainings.map((training, index) => (
                            <tr key={`${training.name}-${index}`}>
                                <td>{format(new Date(date), 'dd/MM/yyyy')}</td>
                                <td>{training.name}</td>
                                <td>{training.time}</td>
                                <td>
                                    {exercisesTable(training.exercises)}
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

    
export default TrainingsList;