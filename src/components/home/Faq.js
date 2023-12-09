import React, { useState } from 'react';
import './Faq.css'; // Make sure to create a CSS file for styling
import img from './Questions-pana.png'
const Faq = () => {
  const faqData = [
    { question: 'Who is Ekam innocation?', answer: 'Ekam Innovations is an organization that strongly advocates for the transformative impact of innovating education and educating innovations. Our core belief is in shaping lives and nurturing future leaders through progressive educational approaches. We are committed to fostering growth, encouraging innovation, and promoting excellence in education. Our initiatives span across three fundamental directions, each geared towards creating an environment that nurtures growth, fosters innovation, and upholds a commitment to educational excellence' },
    { question: 'How can I contact support?', answer: 'You can contact our support team through the contact page.' },
    { question: 'Is there a refund policy?', answer: 'Yes, we have a refund policy. Please check our terms for details.' },
    { question: 'Can I change my account password?', answer: 'Yes, you can change your password in the account settings.' },
    { question: 'Are there any discounts available?', answer: 'We occasionally offer discounts. Keep an eye on our promotions page.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <div className="image-container">
        {/* You can add your image here */}
        <img src={img} alt="FAQ" />
      </div>
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => handleToggle(index)}>
            <div className="question">{item.question}</div>
            <div className="answer">{openIndex === index && item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
