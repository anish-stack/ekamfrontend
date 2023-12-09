import React from 'react'
import './certificate.css'
import img from './certificate (2).png'
const CertificatePage = () => {
  return (
    <div className='CertificatePage'>
        <div className='ceryificate-left'>
                <div className='head hea'>
                Get certified
                </div>
              <h3>Certification</h3>  
              <p>ILA Certification adds tremendous value for teachers and Educators at large. As Ekam innocations Forum is a national brand valued and validated by schools across South Asia.</p>
        </div>
        <div className='certificate-right'>
            <div className='certificate-img'>
                <img src={img} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default CertificatePage