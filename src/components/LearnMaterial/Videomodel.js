import React, { useState } from 'react';
import './Videomodel.css'; // Import your CSS file for styling

const Videomodel = ({ video, onClose }) => {
  const [showModel, setShowModel] = useState(true);
  console.log("videomodel",video)
  const handleClose = () => {
    setShowModel(true);
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <div>
      {showModel && (
        <div className='video_model_container'>
          <div className='video_model'>
            <video width='100%' height='100%' loop autoPlay controls>
              <source src={video} type='video/mp4' />
            </video>
            <div className='close_video_model_btn' onClick={handleClose}>
              <ion-icon name='close-outline'></ion-icon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videomodel;
