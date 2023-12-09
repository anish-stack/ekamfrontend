import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './ekam-innocations-high-resolution-logo-black-removebg-preview.png'
import axios from 'axios'
import {toast} from 'react-toastify'
import Loader from '../Loader/Loader'
const Register = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        Designiation:'',
        username:''
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
          const response = await axios.post(`${apiUrl}/api/v1/SignUp`, formData);
          
            console.log(response.data)

                           toast.success(response.data.message)

           
      
      
        } catch (error) {
            if (error.response && error.response.data && error.response.data === "400") {
                // If there are validation errors, update the state with the error message
                toast.error(error.response.data.errors[0]);
              } 
              if (error.response && error.response.status === 400) {
                // If there are validation errors, update the state with the error message
                toast.error('User Already Exist With This Email');
              } 
              
              
              else {
                // Handle other types of errors (network, server, etc.)
                console.error('Error:', error);
                // setError('An error occurred. Please try again later.');
              }
            
        }finally {
          // Set loading state to false after the request is completed
          setIsLoading(false);
        }
      };
      
    



  return (
    <div className='Login_container'>
<div className='login_conatiner_box' style={{ padding: '40px' }}>

        <div className='Login_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='Login_text'>
          <h4 className='Login_head'>Sign Up to Ekam Innovation</h4>
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
                type="text"
                name="username"
                placeholder='Enter Your Good Name'
                value={formData.username}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className='Login_For_group'>
              <input
                type="text"
                name="Designiation"
                placeholder='Enter Your Designiation '
                value={formData.Designiation}
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
        {isLoading ? <Loader /> : 'Sign Up'}
      </button>                    <br/>
              <div className='Not_registerd'>
                <Link to="/User/Login">I have an account? Sign In To Ekam innocations</Link>
              </div>
              <button className='login_cta backToHome' type="submit"> <Link to="/">Back To Home</Link></button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register