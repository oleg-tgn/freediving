import './calendar.css'
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import TrainingForm from '../TrainingForm/TrainingForm'; // Импортируйте компонент TrainingForm

import 'bootstrap/dist/css/bootstrap.min.css';
import './calendar.css';

function Calendar() {
    const [week, setWeek] = useState({
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": [],
    });

    const [showModal, setShowModal] = useState(false);
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

    return (
        <div className="row">
            <div className="col-12">
                <h1 className="title mb-3">Calendar</h1>
                <div className='week mb-5'>
                    {Object.entries(week).map(([day, events]) => (
                        <div key={day} className="week-day">
                            <div className='week-day__title'>{day}</div>
                            <div className='week-day__events'>
                                {events.length === 0 ? (
                                    <div className='week-day__event-name'><i>Rest</i></div>
                                ) : (
                                    events.map(event => (
                                        <div key={event.name + event.time} className='btn btn-outline-primary week-day__event'>
                                            <div className='week-day__event-name'>{event.title.value}</div>
                                            <div className='week-day__event-time'>{event.time.value}</div>
                                        </div>
                                    ))
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
                <Modal.Title>Add Train</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <TrainingForm onSubmit={(training) => addTraining(selectedDay, training)} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Calendar;