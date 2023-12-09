import React from 'react'
import img from './finish.png'
import img1 from './roll-call.png'
import './works.css'
const Work = () => {
  return (
    <div className='how-works-conatiner'>
      <h2 className='head'>Process</h2>
      <div className='center white'>
      How our platform works
      </div>
      <div className='cards-works'>
        <div className='cards'>
            <div className='icons'>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            </div>
            <div className='step'>
                <h4>Step 01</h4>
            </div>
            <div className='other-card-info'>
                <p>Find Workshop</p>
                <span>Find a perfect workshop for your career.</span>
            </div>
        </div>
        <div className='cards'>
            <div className='icons'>
            <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className='step'>
                <h4>Step 02</h4>
            </div>
            <div className='other-card-info'>
                <p>Book Workshop</p>
                <span>Book a workshop by completing payment.</span>
            </div>
        </div>
        <div className='cards'>
            <div className='icons'>
            <img src={img1} alt=""/>
            </div>
            <div className='step'>
                <h4>Step 03</h4>
            </div>
            <div className='other-card-info'>
                <p>Attend Workshop</p>
                <span>Attend our workshop using link, that we sent on your email</span>
            </div>
        </div>
        <div className='cards'>
            <div className='icons'>
            <img src={img} alt=""/>
            </div>
            <div className='step'>
                <h4>Step 04</h4>
            </div>
            <div className='other-card-info'>
                <p>Certificate</p>
                <span>You'll get a certificate from Ekam Innocation.</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
