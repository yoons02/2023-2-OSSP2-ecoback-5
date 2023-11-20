import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const ImageSlider = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/eventlist.json');
      // Use response.data directly, no need for response.json()
      const data = response.data;
      setEvents(data);
    } catch (error) {
      console.error("API 오류", error);
    }
  };

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
          <img className="events_image"  src={require(`../image/events/${event.imagePath}`)} alt={event.title} />
        </Link>
      ))}
    </Slider>
  );
};

export default ImageSlider;
