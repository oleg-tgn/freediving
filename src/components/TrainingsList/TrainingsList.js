import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useTrainingsContext } from "../../providers/TrainingsProvider";

function TrainingsList() {
    const { trainings, addTraining, updateTraining } = useTrainingsContext();

    return (
        <div className="row">
          <div className="col-12">
            <h1 className="title mb-3 calendar-title">
                <span>Trainings List</span>
            </h1>
            </div>
        </div>
    );
}

    
export default TrainingsList;