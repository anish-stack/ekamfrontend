import React from 'react';
import img from './database.png'
import img2 from './experince.png'
import img3 from './technical-support.png'

const WhySections = () => {
  const data = [
    {
      img: img,
      textparah4: "Lifetime access to all session and seminar recordings with profile security ensured.",
    },
    {
      img: img2,
      textparah4: "We boast a team of highly educated and professional teacher instructors.",
    },
    {
      img: img3,
      textparah4: "We offer 24/7 support throughout all batches and seminars, ensuring quality responses.",
    },
  ];

  return (
    <div className='WhySections'>
        <h2>Why Choose Ekam Innocations</h2>
      <div className='WhySections_body'>
        {data.map((item, index) => (
          <div key={index} className='WhySections_card'>
            <div className="WhySections_img">
              <img src={item.img} alt={`Section ${index + 1}`} />
            </div>
            <div className='WhySections_text'>
              <h4 className='WhySections_text_para'>
                {item.textparah4}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySections;
