import './calendar.css'
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import TrainingForm from '../TrainingForm/TrainingForm'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './calendar.css';

import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, getDay } from 'date-fns';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [events, setEvents] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [editingTraining, setEditingTraining] = useState(null);

    const startDay = startOfMonth(currentMonth);
    const endDay = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: startDay, end: endDay });
    const firstDayOfWeek = getDay(startDay);

    const [week, setWeek] = useState({
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": [],
    });


    const [selectedDay, setSelectedDay] = useState(null);

    function handleShowModal(day) {
        setSelectedDay(day);
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    const addTraining = (day, training) => {
        setWeek((prevWeek) => {
          const updatedDay = [...prevWeek[day], training];
          return { ...prevWeek, [day]: updatedDay };
        });
        handleCloseModal();
    };
    
    const handleEditTraining = (day, training) => {
        setSelectedDay(day);
        setEditingTraining(training);
        setShowModal(true);
    };

    const updateTraining = (day, newTraining) => {
        setWeek((prevWeek) => {
          const updatedDay = prevWeek[day].map(training => training === editingTraining ? newTraining : training);
          return { ...prevWeek, [day]: updatedDay };
        });
        handleCloseModal();
        setEditingTraining(null);
    };

    const handleSubmit = (training) => {
        if (editingTraining) {
            updateTraining(selectedDay, training);
        } else {
            addTraining(selectedDay, training);
        }
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
            <h1 className="title mb-3">Calendar</h1>
            
            <h2 className='calendar-title'>
                {format(currentMonth, 'MMMM yyyy')}

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
            </h2>
            <div className='calendar'>
                {Array.from({ length: firstDayOfWeek }, (_, index) => (
                    <div key={`empty-${index}`} className='week-day empty'></div>
                ))}
                {daysInMonth.map(day => (
                <div key={day} className='week-day'>
                    <div className='week-day__title'>{format(day, 'EEEE')}</div>
                    <div className='week-day__title'>{format(day, 'dd')}</div>
                    <div className='week-day__events'>
                        {events[format(day, 'yyyy-MM-dd')] && events[format(day, 'yyyy-MM-dd')].length > 0 ? (
                        events[format(day, 'yyyy-MM-dd')].map(event => (
                            <div key={event.name + event.time} className='btn btn-outline-primary week-day__event'
                                onClick={() => handleEditTraining(day, event)}>
                            <div className='week-day__event-name'>{event.title.value}</div>
                            <div className='week-day__event-time'>{event.time.value}</div>
                            </div>
                        ))
                        ) : (
                        <div className='week-day__event-name'><i>Rest</i></div>
                        )}
                    </div>
                    <div className="week-day__add btn btn-light" onClick={() => handleShowModal(day)}>
                        <i className='fa-solid fa-plus'></i> Add Train
                    </div>
                </div>
                ))}
            </div>
          </div>
    
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{editingTraining ? 'Edit' : 'Add'} Train</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TrainingForm onSubmit={handleSubmit} editingTraining={editingTraining} />
            </Modal.Body>
          </Modal>
        </div>
      );
    }
    
export default Calendar;