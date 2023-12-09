// Testimonial.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';
import img from './student.png';

const TestimonialCard = ({ username, review }) => (
  <div className="test-testimonial-card">
    <div className="test-circle-image">
      <img src={img} alt="" />
    </div>
    <h3>{username}</h3>
    <p>{review}</p>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      username: 'Aarav Sharma',
      review: 'Ekam Innovations has transformed the way I approach learning. The innovative teaching methods and focus on practical applications have been a game-changer for me.',
    },
    {
      id: 2,
      username: 'Aditi Patel',
      review: 'I have experienced immense personal and academic growth at Ekam Innovations. The commitment to excellence and nurturing creativity make it an outstanding educational institution.',
    },
    {
      id: 3,
      username: 'Vikram Singh',
      review: 'Ekam Innovations is where I discovered my passion for technology. The supportive environment and hands-on projects have prepared me for a successful career in the tech industry.',
    },
    {
      id: 4,
      username: 'Kriti Verma',
      review: 'As a student at Ekam Innovations, I appreciate the emphasis on holistic development. The combination of theoretical knowledge and practical skills has given me a well-rounded education.',
    },
    // Add more testimonials as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </Slider>
  );
};

export default Testimonial;
