import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay : true,
    autoplaySpeed : 5000, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
         <img
            src={require('../image/adv1.png')} // Make sure to provide the correct image path
            alt="adver"
            style={{ width: '97%', height: '50vw' }}
        />
      </div>
      <div>
      <img
            src={require('../image/adv2.png')} // Make sure to provide the correct image path
            alt="adver"
            style={{ width: '97%', height: '50vw' }}
        />
      </div>
      <div>
      <img
            src={require('../image/adv3.png')} // Make sure to provide the correct image path
            alt="adver"
            style={{ width: '97%', height: '50vw' }}
        />
      </div>
    </Slider>
  );
};
export default ImageSlider;
