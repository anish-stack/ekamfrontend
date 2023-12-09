import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './ekam-innocations-high-resolution-logo-black-removebg-preview.png'
import axios from 'axios'
import {toast} from 'react-toastify'
import Loader from '../Loader/Loader'
const Login = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
          // Send a POST request to the sign-in endpoint with form data
          const response = await axios.post(`${apiUrl}/api/v1/SignIn`, formData);
      
          // console.log(response.data.user);
      
          if (response.data.token) {
            // Store token and user data in local storage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
      
            // Display success message
            toast.success(response.data.message);
      
            // Handle redirection or other logic based on the response
            const downloadId = localStorage.getItem('downloadId');
            if (downloadId) {
              window.location.href = `https://ekambackend.onrender.com/api/v2/download/${downloadId}`;
              // Clear the stored downloadId from sessionStorage if needed
              localStorage.removeItem('downloadId');
            } else {
              // Perform other actions or redirection
              window.location.href = "/";
            }
          } else {
            // Display an error message for invalid credentials
            if (response.data.success === 'false') {
              toast.error('Invalid credentials. Please check your credentials and try again.');
            }
          }
        } catch (error) {
          console.error('Error:', error);
          if (error.response) {
            if (error.response.status === 401) {
              // Display an error message for password mismatch
              toast.error('Password is Mismatch');
            } else if (error.response.status === 404) {
              // Display an error message for user not existing
              toast.error('User with this Email does not exist');
            } else {
              // Handle other errors or display a generic error message
              toast.error('An error occurred. Please try again later.');
            }
          } else {
            // Handle other types of errors or display a generic error message
            toast.error('An error occurred. Please try again later.');
          }
        }
      };
      
      
    



  return (
    <div className='Login_container'>
      <div className='login_conatiner_box'>
        <div className='Login_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='Login_text'>
          <h4 className='Login_head'>Sign in to Ekam Innovation</h4>
        </div>
        <div className='login-form-box'>
          <form className='Login_form' onSubmit={handleSubmit}>
            <div className='Login_For_group'>
              <input
                type="text"
                name="email"
                placeholder='Enter Your Email Address'
                value={formData.email}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className='Login_For_group'>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder='Enter Your Password'
                value={formData.password}
                required={true}

                onChange={handleChange}
              />
              <div className='toggle-switch' onClick={handleTogglePassword}>
                {showPassword ? (
                  <ion-icon name="eye-outline" className="open-eye"></ion-icon>
                ) : (
                  <ion-icon name="eye-off-outline" className="close-eye"></ion-icon>
                )}
              </div>
            </div>

            <div className='Login_btn'>
            <button className='login_cta' type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'Login'}
      </button>  

              <div className='Not_registerd'>
                <Link to="/User/Register">Don't have an account? Register for free with Ekam innocations</Link>
              </div>
              <button className='login_cta backToHome' type="submit"> <Link to="/">Back To Home</Link></button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login