import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import { useTrainingsContext } from "../../providers/TrainingsProvider";

function TrainingsList() {
    const { trainings } = useTrainingsContext();

    const trainingsArray = Object.keys(trainings).sort((a, b) => new Date(a) - new Date(b)).map(date => ({
        date,
        trainings: trainings[date]
    }));

    return (
        <div className="row">
          <div className="col-12">
            <h1 className="title mb-3 calendar-title">
                <span>Trainings List</span>
            </h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Title</th>
                        <th scope="col">Time</th>
                        <th scope="col">Exercise</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Rest</th>
                        <th scope="col">Number Approaches</th>
                    </tr>
                </thead>
                <tbody>
                    {trainingsArray.map(({ date, trainings }) => (
                        trainings.map((training, index) => (
                            <tr key={`${date}-${index}`}>
                                <td>{format(new Date(date), 'dd/MM/yyyy')}</td>
                                <td>{training.title.value}</td>
                                <td>{training.exercise.value}</td>
                                <td>{training.time.value}</td>
                                <td>{training.distance.value}</td>
                                <td>{training.rest.value}</td>
                                <td>{training.numberApproaches.value}</td>
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