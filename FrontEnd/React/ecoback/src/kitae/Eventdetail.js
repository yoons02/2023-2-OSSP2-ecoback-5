import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner';
import API from "api/axios";

const EventDetail = () => {
  const location = useLocation();
  const eventId = location.pathname.split('/').pop(); // Assuming the event id is present in the URL
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

  return (
    <div className="full_container">
      <TitleBanner />
      <hr></hr>
      {eventDetail && (
        <React.Fragment>
          <BackbuttonBar title={eventDetail.writer} />
          <div>
            <h2>{eventDetail.writer}</h2>
            <p>{eventDetail.content}</p>
            <p>작성 날짜: {eventDetail.created_at}</p>
            <p>수정 날짜: {eventDetail.updated_at}</p>
            <img src={eventDetail.image} alt={eventDetail.writer} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default EventDetail;
