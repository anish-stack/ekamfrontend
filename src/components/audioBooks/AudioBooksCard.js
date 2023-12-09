import React from 'react';
import { Link } from 'react-router-dom';
import './audio.css'
const AudioBooksCard = ({ audioMaterial }) => {
  const { _id, title, downloads, bookDescription,audioBookThumbnail,isPaid,Price,DiscountPrice } = audioMaterial;
  const token = localStorage.getItem('token');

  const handleDownload = () => {
    if (token) {
      window.location.href = `https://ekambackend.onrender.com/api/v2/download/${_id}`;
    } else {
        localStorage.setItem('downloadId', _id);
    
    }
  };

  return (
    <div className='Audio_book_container'>
      <div className='AudioBook_thumb'>
        <div className='thumb-img'>
        <img src={audioBookThumbnail} alt=""/>

        </div>
        <div className='Audio_book_details'>
          <h3 className="Audio_book_name">{title}</h3>
          <h4 className='total-downloads'>{`Total Downloads: ${downloads}`}</h4>
          <p className='audio_description'>{bookDescription}</p>
          {isPaid ? (
  <div>
    <p className='prices'>Price: <del>{Price}</del></p>
    <p className='Dprices'>Discount Price: {DiscountPrice}</p>
  </div>
) : (
  <p className='Fprices'>Free</p>
)}
          {token ? (
            <Link to={`/Enroll/${_id}`} >
                 <button className='download-button'>
              Download <ion-icon name="download"></ion-icon>
            </button>
            </Link>
       
          ) : (
            <Link to="/User/login">
              <button className='signin-button' onClick={handleDownload} >Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};



export default AudioBooksCard;
