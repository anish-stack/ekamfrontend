import React from 'react'
const TopHeader = () => {
  return (
    <div className="top-header-conatiner">
        <div className='top-header'>
            <div className='top-header-left'>
                <h3>Reach us at +91 98999 07787</h3>
            </div>
            <div className='top-header-right'>
                <div className='top-header-social'>
                    <ul className='top-header-social-list'>
                       <li> <a href="/home"><ion-icon name="logo-facebook"></ion-icon></a></li>
                       <li> <a href="/home"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
                       <li> <a href="/home"><ion-icon name="logo-twitter"></ion-icon></a></li>
                       <li> <a href="/home"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                </div>
                <div className='top-header-search-bar'>
                    <div className='seacrhbar'>
                        <input type="text" className='serach-input' name="text" value=""/>
                        <button><ion-icon 
                       
                        name="search-outline"></ion-icon></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader