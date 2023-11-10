import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import Backbutton from './backbutton';
import TitleBanner from '../components/TitleBanner';
const Event = ({ events }) => {
  return (
    <div style={{backgroundColor:"#F9F9F9"}}>     
        {/* <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
            <div className="title"><Link to="/home">Eco$Back</Link></div>
            <Sidebar/>
        </div> */}
        <TitleBanner />
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
        {events.map((event, index) => (
            <Link key={index} to={`/event/${event.id}`}>
            <img src={event.bannerUrl} alt={event.title} style={{ width: '100%', height: 'auto' }} />
            </Link>
        ))}
        </div> */}
        <hr></hr>
        <Backbutton/>
    </div>
  );
};

export default Event;