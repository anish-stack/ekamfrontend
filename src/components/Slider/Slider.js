import React, { Component } from "react";
import Slider from "react-slick";
import slideone from './online Personality development.png'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider_conatiner">
        <Slider className="sliders" {...settings}>
      
            <img src={slideone} alt="" />
      
 
               <img src="https://api.ipnacademy.in/storage/app/public/img/slider/jL4OwK1lboBalyIqcY7nYB7ueRl812zT7NQ9zenG.png" alt="" />
          
        </Slider>
      </div>
    );
  }
}