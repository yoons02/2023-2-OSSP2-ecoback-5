import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner';
import '../css/Event.css';
import API from "api/axios";
const EventCopy = () => {
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);


  const fetchData=async()=>{
    const endpoint="events/";
    const access_token=localStorage.getItem('access');
    try{
      const response=await API.get(endpoint,{
        headers:{
          Authorization: `Bearer ${access_token}`
        }
      });
      setEvents(response.data);
    }catch(e){
      console.error("API 오류: ",e);
    }
  }

  return (

    <div className="full_container">     
        <TitleBanner />     
        <hr></hr>
        <BackbuttonBar title="이벤트"/> 
        <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
          {events.map((event, index) => (
          <Link key={index} to={{ pathname: `/event/${event.id}`, state: { eventName: event.name } }}>

            <img className="events_image" src={event.image} alt={event.writer}  />
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default EventCopy;