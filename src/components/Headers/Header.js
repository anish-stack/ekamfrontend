import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader'
import { motion, AnimatePresence } from 'framer-motion';
import logo from './ekam-innocations-favicon-color (1).png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const token = localStorage.getItem('token')
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
const handleLogout = ()=>{

  localStorage.removeItem('token')

  window.location.reload()
}
const redirect = () => {
  window.location.href = "/";
};

  const WorkshopsDropdown = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        <ul className="dropdown-list">
          <li>
            <Link to="/AudioBooks">AudioBooks</Link>
          </li>
          <li>
            <Link to="/E-Books">E-Books</Link>
          </li>
          <li>
            <Link to="/Seminars">Seminars</Link>
          </li>
          {/* Add more workshop categories as needed */}
        </ul>
      </motion.div>
    );
  };


  return (
<>

    <div>
        <TopHeader/>

 <nav className={`nav-container ${menuOpen ? 'nav-open' : ''}`}>
      <div onClick={redirect} className="logo-container">
      <img src={logo}  alt="Logo" className="logo" />
        <span>Ekam Innocations 
          <span className='slogen'>Innovating Education Educating innovation</span>
        </span>
      </div>
      <motion.div >
      <ul className={`nav-list ${menuOpen ? 'nav-open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <motion.div whileHover={{ scale: 1.1 }} className="dropdown-container">
              <span>Workshops</span>
              <AnimatePresence>
                {true && <WorkshopsDropdown />}
              </AnimatePresence>
            </motion.div>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/User/Contact">Contact</Link>
        </li>
        {token ? (
        <>
          <li className='display-content'>
            <Link to="/User/dashboard" className='bg-gradinat-one auth-buttons' style={{ color: '#fff' }}>Dashboard</Link>
          </li>
          <li className='display-content'>
            <Link to="/" onClick={handleLogout} className='bg-gradinat-one auth-buttons' style={{ color: '#fff' }}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li className='display-content'>
            <Link to="/User/Login" className='bg-gradinat-one auth-buttons' style={{ color: '#fff' }}>Login</Link>
          </li>
          <li className='display-content'>
            <Link to="/User/Register" className='bg-gradinat-one auth-buttons' style={{ color: '#fff' }}>SignUp for Free</Link>
          </li>
        </>
      )}
       
      </ul>
      </motion.div>
     
 
      <div className="mobile-icons" onClick={handleMenuToggle}>
        {menuOpen ? (
          <ion-icon name="close-circle-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </div>
      
    </nav>
    </div>


    </>

  )
}

export default Header