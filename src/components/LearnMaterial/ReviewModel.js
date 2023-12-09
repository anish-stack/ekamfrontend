// ReviewModal.js
import React, { useState } from 'react';
import axios from 'axios';
import './reviewmodel.css'
import {toast} from 'react-toastify'

const ReviewModal = ({ workshopId, onClose }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');

      // Make a POST request to submit the review with the token in the headers
      const apiUrl = process.env.REACT_APP_API_URL;
  const res= await axios.post(
        `${apiUrl}/api/v2/workshops/${workshopId}`,
        {
          workshopId,
          Rating:rating,
          Review: reviewText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Thanks For Review")
      console.log(res)

      // Close the modal after submitting the review
      onClose();
    } catch (error) {
     // Handle error based on the response status code
     if (error.response && error.response.status === 401) {
        // Save entered data in modal
        const reviewData = { workshopId, rating, reviewText };
        localStorage.setItem('pendingReview', JSON.stringify(reviewData));
  
        // Save the current route in local storage
        const currentRoute = window.location.pathname + window.location.search;
        localStorage.setItem('redirectAfterLogin', currentRoute);
  
        // Display a message to the user
        alert('Please login first.');
  
        // Redirect to the login page
        // You can use your preferred method for redirecting to the login page
       window.location.href="/User/login"
      } else {
        // Handle other errors if needed
      }
    
    }
  };

  return (
    <div className="review-modal">
      <h2>Write a Review</h2>
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <label htmlFor="reviewText">Review:</label>
      <textarea
        id="reviewText"
        value={reviewText}
       rows={6}
       cols={70}
        placeholder='Write A Good Review 😊'
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button onClick={handleSubmitReview}>Submit Review</button>

      <button className='close' onClick={onClose}>Close</button>

    </div>
  );
};

export default ReviewModal;