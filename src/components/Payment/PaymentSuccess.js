import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const PaymentSuccess = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null); // Initialize with a default value
  const token = localStorage.getItem('token');

  const fetchDataByUrl = async (id) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.get(`${apiUrl}/api/v1/payment/do-for-paid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPayment(res.data);
      console.log(res.data);


      // Trigger the toast on successful payment
      toast.success('Payment Successful!');

      setTimeout(()=>{
        window.location.href="/User/dashboard"

      },4000)
    } catch (error) {
      console.error(error.response.data.message);
      // Trigger the toast on payment failure
      toast.success('You Are Already Purchase This Product!');
      window.location.href="/User/dashboard"
    }
  };

  return (
    <div className='demo_payments' style={styles.container}>
    <p style={styles.heading}>Make A Demo Payment Success</p>

    {/* Button to trigger the toast */}
    <button onClick={() => fetchDataByUrl(id)} style={styles.button}>
      Make Payment
    </button>

    {/* Display payment details */}
    {payment && (
      <div style={styles.paymentDetails}>
        Your Payment Was Successful And This Is Demo Payment
      </div>
    )}
  </div>
);
};

// Styles
const styles = {
container: {
  textAlign: 'center',
  margin: '20px',
},
heading: {
  fontSize: '20px',
  fontWeight: 'bold',
},
button: {
  padding: '10px',
  fontSize: '16px',
  cursor: 'pointer',
},
paymentDetails: {
  marginTop: '20px',
  padding: '10px',
  backgroundColor: '#dff0d8', // Green background color as an example
  borderRadius: '5px',
},
};

export default PaymentSuccess;