import React from "react";
import { format } from 'date-fns';

const TrainingContext = React.createContext();

const TrainsProvider = ({ children }) => {
    const [trainings, setTrainings] = React.useState({});

    const addTraining = (day, training) => {
        const formattedDay = format(day, 'yyyy-MM-dd');
        training.created = new Date();
        setTrainings(prevTrainings => {
            const existingTrainings = prevTrainings[formattedDay] || [];
            const updatedTrainings = [...existingTrainings, training];
            return { ...prevTrainings, [formattedDay]: updatedTrainings };
        });
    };

    const updateTraining = (day, updatedTraining) => {
        const formattedDay = format(day, 'yyyy-MM-dd');
        setTrainings(prevTrainings => {
            const updatedDay = prevTrainings[formattedDay].map(training =>
                training.id === updatedTraining.id ? updatedTraining : training
            );
            return { ...prevTrainings, [formattedDay]: updatedDay };
        });
    };

    return (
        <TrainingContext.Provider value={{ trainings, addTraining, updateTraining }}>
            {children}
        </TrainingContext.Provider>
    );
};

export const useTrainingsContext = () => React.useContext(TrainingContext);

export default TrainsProvider;