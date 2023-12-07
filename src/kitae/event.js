import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner';
import eventsData from './json/eventlist.json';
import '../css/Event.css';
import API from 'api/axios'
const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (

    <div className="full_container" >     
        <TitleBanner />     
        <hr></hr>
        <BackbuttonBar title="이벤트"/> 
        <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
          {events.map((event, index) => (
          <Link key={index} to={`/event/${event.id}`}>
            <img className="events_image" src={API.defaults.baseURL + event.image} alt={event.title}  />
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default Event;