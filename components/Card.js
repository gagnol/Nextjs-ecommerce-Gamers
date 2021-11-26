import React from "react";
import Slider from "react-slick";

 import Image from 'next/image'

export default function Card({title,data}) {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <i className="fas fa-chevron-left" {...props}></i> 
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <i className="fas fa-chevron-right" {...props}></i> 
  );
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    return (
     <div className="card__container">
   <h1>{title}</h1>
 <Slider {...settings} className="card__container--inner">
          {data.map((item, index) => {
            return (
              <div
              className="card__container--inner--card"
              key={index}>
                

                <Image src={item.url} alt="hero_img" width={500} height={500}/>
              
                <div className="card__container--inner--card--date_time">
                <i className="far fa-clock"></i>
                  <p>4D-5D</p>
                  <i className="fas fa-globe-europe" ></i>
                 
                  <p>Delhi</p>
                </div>


                <h2>Meghalaya Backpacking</h2>
                <p>starts at <span>₹15,999/-</span></p>
              </div>
            );
          })}
        </Slider>
     </div>
       
    );
  }
