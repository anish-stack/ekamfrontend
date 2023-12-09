import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
    <div className="contain">
    <div className="col">
      <h1>Company</h1>
      <ul>
        <li><a href="/">Ekam innovacation</a></li>
        <li><a href="/About">About Ekam</a></li>
        <li>Timing: 9:00Am To 7:00 Pm</li>
        
        <li><a href="/User/contact">Get In Touch</a></li>
      </ul>
    </div>
    <div className="col">
      <h1>Products</h1>
      <ul>
        <li><a href="/E-Books">E-books</a></li>
        <li><a href="/AudioBooks">Audio-Books</a></li>
        <li><a href="/recorded-workshop">Recorded Seminar</a></li>
        <li><a href="/*">Offline Batch</a></li>
        
      </ul>
    </div>
    <div className="col">
      <h1>Conatct us</h1>
      <ul>
        <li>Director: Karm Singh</li>
        <li>Contact Number: +91 147852369</li>
        <li>Email: hello@ekamInnocations.com</li>
       
      </ul>
    </div>
    <div className="col">
      <h1>Resources</h1>
      <ul>
      <ul>
  <li><a href="/E-Books">Free Books</a></li>
  <li><a href="/AudioBooks">Free Audios</a></li>
  <li><a href="/*">Free Seminars</a></li>
</ul>
      
      </ul>
    </div>
    <div className="col">
      <h1>Support</h1>
      <ul>
      <li><a href="/User/contact">Contact us</a></li>
  <li><a href="https://api.whatsapp.com/send?phone=9899907787" target="_blank" rel="noopener noreferrer">Whatsapp Chat</a></li>
      </ul>
    </div>
    <div className="col social">
      <h1>Social</h1>
      <ul className='top-header-social-list'>
                       <li> <a href="/home"><ion-icon name="logo-facebook"></ion-icon></a></li>
                       <li> <a href="/home"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
                       <li> <a href="/home"><ion-icon name="logo-twitter"></ion-icon></a></li>
                       <li> <a href="/home"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
    </div>
  <div className="clearfix"></div>
  </div>
  </div>
  )
}

export default Footer