import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner';
import API from "api/axios";

import '../css/Eventdetail.css';

const EventDetail = () => {
  const location = useLocation();
  const eventId = location.pathname.split('/').pop(); // URL에서 이벤트 ID가 있다고 가정합니다.
  const [eventDetail, setEventDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `/events/${eventId}/`;
      const access_token = localStorage.getItem('access');
      try {
        const response = await API.get(endpoint, {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        });
        setEventDetail(response.data);
      } catch (e) {
        console.error("API 오류: ", e);
      }
    };

    fetchData();
  }, [eventId]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <div className="full_container">
      <TitleBanner />
      <hr></hr>
      {eventDetail && (
        <React.Fragment>
          <BackbuttonBar title={eventDetail.writer} />
          <div>
            {/* <h2>{eventDetail.writer}</h2> */}
            <br></br>
            <div className='datebox'>
            작성일: {formatDate(eventDetail.created_at)}<br></br>
            수정일: {formatDate(eventDetail.updated_at)}
            </div>
            <br></br>
            <img className="events_image" src={eventDetail.image} alt={eventDetail.writer} />
            <p>{eventDetail.content}</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default EventDetail;

	