import './Сalendar.css'
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import TrainingForm from '../TrainingForm/TrainingForm'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, getDay } from 'date-fns';

import { useTrainingsContext } from "../../providers/TrainingsProvider";

function Calendar() {
    const { trainings, addTraining, updateTraining } = useTrainingsContext();

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [editingTraining, setEditingTraining] = useState(null);

    const startDay = startOfMonth(currentMonth);
    const endDay = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: startDay, end: endDay });
    const firstDayOfWeek = getDay(startDay);
    const lastDayOfWeek = getDay(endDay);
    const emptyDaysAtEnd = (7 - (lastDayOfWeek + 1)) % 7;

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTitleDay, setSelectedTitleDay] = useState("");

    function handleShowModal(day) {
        setSelectedDay(day);
        setSelectedTitleDay(format(day, 'dd/MM/yyyy'));
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
        setEditingTraining(null);
    }
    
    const handleEditTraining = (day, training) => {
        setSelectedDay(day);
        setEditingTraining(training);
        setShowModal(true);
    };

    const handleSubmit = (training) => {
        if (editingTraining) {
            updateTraining(selectedDay, training);
        } else {
            addTraining(selectedDay, training);
        }
        setEditingTraining(null);
        setShowModal(false);
    };

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const handleMonthChange = (event) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(event.target.value);
        setCurrentMonth(newMonth);
    };

    return (
        <div className="row">
            <div className="col-12">
                <h1 className="title mb-3 calendar-title">
                    <span>Calendar</span>
                </h1>
                <div>
                    <div className="calendar-actions">
                        <button className="btn btn-secondary calendar-actions__btn" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}><i className="fa-solid fa-backward"></i></button>
                        <button className="btn btn-secondary calendar-actions__btn calendar-actions__current" onClick={() => setCurrentMonth(new Date())}>{format(currentMonth, 'MMMM yyyy')}</button>
                        <button className="btn btn-secondary calendar-actions__btn" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}><i className="fa-solid fa-forward"></i></button>
                        
                        <select onChange={handleMonthChange} value={currentMonth.getMonth()} className='calendar-select'>
                            {months.map((month, index) => (
                            <option key={month} value={index}>
                                {month}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>
            
       
            <div className='calendar'>
                {Array.from({ length: firstDayOfWeek }, (_, index) => (
                    <div key={`empty-${index}`} className='week-day empty'></div>
                ))}
                {daysInMonth.map(day => (
                <div key={day} className='week-day'>
                    <div className='week-day__title'>
                        {format(day, 'EEEE')}<br />                    
                        {format(day, 'dd')}
                    </div>
                    <div className='week-day__trainings'>
                        {trainings[format(day, 'yyyy-MM-dd')] && trainings[format(day, 'yyyy-MM-dd')].length > 0 ? (
                        trainings[format(day, 'yyyy-MM-dd')].map(training => (                           
                            <div key={training.name + training.time} className='btn btn-outline-primary week-day__training'
                                 onClick={() => handleEditTraining(day, training)}>
                                <div className='week-day__training-name'>{training.name}</div>
                                <div className='week-day__training-time'>{training.time}</div>
                            </div>
                        ))
                        ) : (
                        <div className='week-day__training-name'><i>Rest</i></div>
                        )} 
                    </div>
                    <div className="week-day__add btn btn-light" onClick={() => handleShowModal(day)}>
                        <i className='fa-solid fa-plus'></i> Add Train
                    </div>
                </div>
                ))}
                {Array.from({ length: emptyDaysAtEnd }, (_, index) => (
                    <div key={`empty-end-${index}`} className='week-day empty'></div>
                ))}
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>{editingTraining ? 'Edit' : 'Add'} Train {selectedTitleDay}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <TrainingForm onSubmit={handleSubmit} editingTraining={editingTraining} />
                </Modal.Body>
            </Modal>
            </div>
        </div>
    );
};
    
export default Calendar;