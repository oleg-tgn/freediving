import React from 'react';

import TrainingForm from '../TrainingForm/TrainingForm'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import { format, isBefore, isEqual, isAfter } from 'date-fns';

import { useTrainingsContext } from "../../providers/TrainingsProvider";
import { Link } from 'react-router-dom';
import { commentSlash } from 'fontawesome';

function findLastTrain(trainings) {
    if (!trainings) return null;
    const currentDate = new Date();
    let closestLessOrEqual;

    Object.keys(trainings).forEach(dateStr => {
        const date = new Date(dateStr);
        if (isBefore(date, currentDate) || isEqual(date, currentDate)) {
            if (!closestLessOrEqual || isAfter(date, closestLessOrEqual)) {
                closestLessOrEqual = date;
            }
        }
    });
    if (!closestLessOrEqual) return null;

    const formattedDay = format(closestLessOrEqual, 'yyyy-MM-dd');
    return trainings[formattedDay][0];
}

function findNextTrain(trainings) {
    if (!trainings) return null;
    const currentDate = new Date();
    let closestGreater = null;

    Object.keys(trainings).forEach(dateStr => {
        const date = new Date(dateStr);
        if (isAfter(date, currentDate)) {
            if (!closestGreater || isBefore(date, closestGreater)) {
                closestGreater = date;
            }
        }
    });

    if (!closestGreater) return null;

    const formattedDay = format(closestGreater, 'yyyy-MM-dd');
    return trainings[formattedDay][0];
}

function Training(props) {
    const { trainings } = useTrainingsContext();
    
    let selectedTrain = null;
    let pageTitle = '';
    if (!!trainings) {
        switch (props.type) {
            case 'last': 
                selectedTrain = findLastTrain(trainings);
                pageTitle = 'Last';
                break;
            case 'next': 
                pageTitle = 'Next';
                selectedTrain = findNextTrain(trainings);
                break;
            default:
                throw new Error('Incorrect day Trainig props');
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1 className="title mb-3 calendar-title">
                    <span>{pageTitle} Training</span>
                </h1>
                {selectedTrain 
                    ? <TrainingForm editingTraining={selectedTrain} readonly={true}/>
                    : <p>Training has not been added yet. You can go to the <Link to="/calendar">Calendar</Link> to add  
                     your {props.type === 'last'? 'first' : 'next'} training session.</p>
                }
                
            </div>
        </div>
    );
};
    
export default Training;