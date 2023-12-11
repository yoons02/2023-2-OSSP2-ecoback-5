import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import API from "api/axios";

const ImageSlider = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {events.map((event, index) => (
        <Link key={index} to={`/event/${event.id}`}>
          {/* Assuming event.imagePath contains the correct path to the image */}
          <img className="events_image"  src={event.image} alt={event.title} 
          
          />
        
        </Link>
      ))}
    </Slider>
  );
};

export default ImageSlider;
