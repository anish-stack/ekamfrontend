import React from 'react';
import { Link } from 'react-router-dom';
const PdfBooksCard = ({ PdfMaterial }) => {
  const { _id, title, downloads, bookDescription,PdfBookThumbnail } = PdfMaterial;
  const token = localStorage.getItem('token');

  const handleDownload =async () => {
    if (token) {
    try {
      window.location.href = `https://ekambackend.onrender.com/api/v2/download-pdf/${_id}`
    } catch (error) {
        console.log(error)
    }
    } else {
        localStorage.setItem('downloadId', _id);
    
    }
  };

  return (
    <div className='Audio_book_container'>
      <div className='AudioBook_thumb'>
        <div className='thumb-img'>
        <img src={PdfBookThumbnail} alt=""/>

        </div>
        <div className='Audio_book_details'>
          <h3 className="Audio_book_name">{title}</h3>
          <h4 className='total-downloads'>{`Total Downloads: ${downloads}`}</h4>
          <p className='audio_description'>{bookDescription}</p>
          {token ? (
            <button className='download-button' onClick={handleDownload}>
              Download <ion-icon name="download"></ion-icon>
            </button>
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



export default PdfBooksCard;
