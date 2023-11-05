import React from "react";

const TrainsContext = React.createContext();

const TrainsProvider = ({ children }) => {
    const [events, setEvents] = React.useState({});

    const addTraining = (day, training) => {
        const formattedDay = day.toISOString().split('T')[0];
        setEvents(prevEvents => {
            const existingTrainings = prevEvents[formattedDay] || [];
            const updatedTrainings = [...existingTrainings, training];
            return { ...prevEvents, [formattedDay]: updatedTrainings };
        });
    };

    const updateTraining = (day, updatedTraining) => {
        const formattedDay = day.toISOString().split('T')[0];
        setEvents(prevEvents => {
            const updatedDay = prevEvents[formattedDay].map(training =>
                training.id === updatedTraining.id ? updatedTraining : training
            );
            return { ...prevEvents, [formattedDay]: updatedDay };
        });
    };

    return (
        <TrainsContext.Provider value={{ events, addTraining, updateTraining }}>
            {children}
        </TrainsContext.Provider>
    );
};

export const useTrainsListContext = () => React.useContext(TrainsContext);

export default TrainsProvider;