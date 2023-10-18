import './calendar.css'
import React, { useState } from 'react';


function Calendar() {
    const [week, setWeek] = useState({
        "Monday": [{name: 'Train', time: '19:00 - 21:00'}],
        "Tuesday": [],
        "Wednesday": [{name: 'Train', time: '19:00 - 21:00'}],
        "Thursday": [],
        "Friday": [{name: 'Train', time: '19:00 - 21:00'}],
        "Saturday": [],
        "Sunday": [],
    });

    function addTrain(day) {
        const updatedWeek = { ...week };
        
        if (updatedWeek[day].length > 5) {
            alert('Max 5 train in day');
            return;
        }

        updatedWeek[day].push({name: 'New train'});

        setWeek(updatedWeek);
        console.log("add");
    }

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
                                        <div key={event.name + event.time} className='week-day__event btn btn-outline-primary'>
                                            <div className='week-day__event-name'>{event.name}</div>
                                            <div className='week-day__event-time'>{event.time}</div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="week-day__add btn btn-light" onClick={() => addTrain(day)}>
                                <i className='fa-solid fa-plus'></i> Add Train
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;