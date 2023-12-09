import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './learn.css'
import Loader from '../Loader/Loader';
import ReviewModal from './ReviewModel';
import ReviewCard from './ReviewCard';
import noImg from './i-dont-know.png'
const LearnComplete = () => {
  const { id } = useParams();
  const [learnDetails, setLearnDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  useEffect(() => {
    const fetchDataByUrl = async (workshopId) => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const res = await axios.get(`${apiUrl}/api/v2/workshops/${workshopId}`);
        setLearnDetails(res.data.workshop);
        console.log(res.data.workshop);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataByUrl(id);
  }, [id]);

const fetchReview =  async(id)=>{
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
  const res = await axios.get(`${apiUrl}/api/v2/workshop/${id}`);
  if (res.status === 200) {
    setReviews(res.data.workshopReviews);
    console.log(res.data.workshopReviews)
    setLoadingReviews(false);
  } else {
    setReviews([]); // No reviews or error
  }

  } catch (error) {
    console.error(error);

    if (error.response && error.response.status === 404) {
      setReviews([]); // No reviews
    } else {
      // Handle other errors if needed
    }
    setLoadingReviews(false);
  }
}

useEffect(()=>{
  fetchReview(id)
},[id])

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };


  
  return (
<>


    <div className='workshop_complete_container'>
      {learnDetails ? (
        <div className='workshop_container'>
          <div className='workshop_details'>
          <div className='thumbnail'>
              <img src="https://codehelp.s3.ap-south-1.amazonaws.com/Web_Dev_670f900667.jpg" alt=""/>
            </div>
          <h4>Welcome to <span>@Ekam Innocations</span></h4>
          <h2 className='title'>{learnDetails.WorkShopTitle}</h2>
          <h2 className='titl'>Certificate Provided After Completion <ion-icon name="book-outline"></ion-icon></h2>
    
         
            <h3>{learnDetails.workshopName || 'Workshop Name'}</h3>
            
        

            <h3 className='rating'>Ratings : 4.5 </h3>
            <h3 className='Enrolled'>Enrolled : 400 +</h3>
            <h3 className='trainer'>Trainer : {learnDetails.TrainerName || 'Trainer Name'}</h3>
          </div>

          <div className='workshop_demo_videos_and_details'>
            <div className='demo_container'>
              <div className='video-container'>
                <video loop controls>
                  <source src={learnDetails.DemoVideo} type="video/mp4"/>
                </video>
              </div>

              <div className='price-container'>
                <h3 className='price'>
                  Price: <span><del>{learnDetails.Price}</del></span> {learnDetails.DiscountPrice} Rs
                </h3>

               

                <div className="key-list">
                  <ul>
                    <li>{learnDetails.WorkShopTitle}<ion-icon name="headset-outline"></ion-icon></li>
                

                    <li> WorkShop Type : {learnDetails.workShopType} <ion-icon name="videocam-outline"></ion-icon></li>
                    <li>Duration :{learnDetails.Duration}Hours <ion-icon name="hourglass-outline"></ion-icon></li>
                    <li>Date :{learnDetails.WorkShopDate} <ion-icon name="calendar-outline"></ion-icon></li>
                    <li>Certificate Provided After Completion <ion-icon name="book-outline"></ion-icon> </li>
                  </ul>
                </div>
                <div className='enroll-cta-container'>
                  <Link to={`/Enroll/${learnDetails._id}`} className='enroll-cta'>Enroll Now</Link>
                  <button className='btnreview' onClick={handleOpenReviewModal}>Write a Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader/>
      )}

{isReviewModalOpen && (
        <ReviewModal
          workshopId={learnDetails?._id}
          onClose={handleCloseReviewModal}
        />
      )}



    </div>
    <h3 className='head'>Reviews</h3>

    {loadingReviews ? (
        <p>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        <div className="reviews-container">
          {reviews.map((review) => (
            <ReviewCard key={review.reviewId} review={review} />
          ))}
        </div>
      ) : (
        <div className='no-rview-conatiner'>
          <img className='reviewimg' src={noImg} alt=""/>
          <h2 className='reviewtext'>No Reviews Available</h2>
          <button className='btnreview' onClick={handleOpenReviewModal}>Write a Review</button>

        </div>  
      )}  
    </>

  );
};

export default LearnComplete;