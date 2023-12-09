import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Videomodel from './Videomodel';
import Loader from '../Loader/Loader';

const LearnCard = ({ LearnMeterial }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModel, setShowModel] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleToggleModel = (video) => {
    setSelectedVideo(video);
    setShowModel(true);
  };

  const handleCloseModel = () => {
    setSelectedVideo(null);
    setShowModel(false);
  };

  if (!LearnMeterial || LearnMeterial.length === 0) {
    return <Loader/>;
  }

  const totalPages = Math.ceil(LearnMeterial.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => (prevPage - 2 + totalPages) % totalPages + 1);
  };

  const paginatedData = LearnMeterial.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {paginatedData.map((material, index) => (
        <div key={index}>
          <div className='workshop_card'>
            <div className='workshop_card_body'>
              <div className='workshop_card_img'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_kVc3yd2fxuj3UQq4CzETbULtYWPraW7CHe3X4NnGi6biyErIS4sZT3ikaRuv9iyWwA&usqp=CAU" alt=""/>
              </div>
              <div className='workshop_card_information'>
                <h4><ion-icon name="person-circle-outline"></ion-icon>{material.TrainerName}</h4>
                <h3>{material.workshopName}</h3>
                <p><ion-icon name="calendar-outline"></ion-icon>{material.WorkShopDate}</p>
              </div>
              <Link to={`/workshop/${material._id}`} className="workshop_card_cta" type="">
                Enroll Now
              </Link>
              <button className='demo-btn' onClick={() => handleToggleModel(material.DemoVideo)}>
                <ion-icon name="play-circle-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="pagination-container">
        <button className="pagination-btn" onClick={handleClickPrev}>&lt;</button>
        <span className="pagination-current">{currentPage}</span>
        <button className="pagination-btn" onClick={handleClickNext}>&gt;</button>
      </div>
      
      {showModel && <Videomodel video={selectedVideo} onClose={handleCloseModel} />}
    </>
  );
};

export default LearnCard;
