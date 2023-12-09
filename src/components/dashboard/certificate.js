import React from 'react';
import {useLocation} from 'react-router-dom'
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';
import './certificate.css';
import verified from './360_F_56905173_Um5556fk3dzSb2szUupQoEBauiWxcBTx-removebg-preview.png'
const CertificatePreview = ({ data }) => {
    const location = useLocation();
    const userJsonString = localStorage.getItem('user');
    const userObject = JSON.parse(userJsonString);

    // Log the entire URL including query parameters
    console.log('Current URL:', location.pathname + location.search);

  // Access parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const workShopTitle = queryParams.get('workShopTitle') || 'N/A';
  const trainerName = queryParams.get('trainerName') || 'N/A';
  const WorkShopDate = queryParams.get('WorkShopDate') || 'N/A';
  const Duration = queryParams.get('Duration') || 'N/A';
  // Log individual query parameters
  console.log('Workshop Title:', workShopTitle);
  console.log('Trainer Name:', trainerName);
  console.log('Workshop Date:', WorkShopDate);
  console.log('Duration:', Duration);
  console.log("username",userObject.username)
    return (
      <div id="certificate-preview" className="certificate-container">
        <div className="container pm-certificate-container">
          <div className="outer-border"></div>
          <div className="inner-border"></div>
  
          <div className="pm-certificate-border col-xs-12">
            <div className="row pm-certificate-header">
              <div className="pm-certificate-title cursive col-xs-12 text-center">
                <h2 className='center'>Ekam innocations</h2>
              </div>
            </div>
  
            <div className="row pm-certificate-body">
              <div className="pm-certificate-block">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                      <span className="pm-name-text center bold">{userObject.username}</span>
                    </div>
                    <div className="col-xs-2"></div>
                  </div>
                </div>
  
                <div className="col-xs-12">
                  <div className="row">
                    <div className="pm-earned col-xs-8 text-center">
                      <span className="pm-earned-text padding-0 block cursive">has earned</span>
                      <span className="pm-credits-text block bold sans">Ekam Innocation {workShopTitle} </span>
                      <span className="pm-credits-text block bold sans">This Is {Duration} Hour Seminar </span>

                    </div>
                   
                    <div className="col-xs-12"></div>
                  </div>
                </div>
  
                <div className="col-xs-12">
                  <div className="row">
                  
                    <div className="pm-course-title  center">
                      <span className="pm-earned-text block cursive">while completing the training course entitled</span>
                    </div>
                  </div>
                </div>
  
                <div className="col-xs-12">
                  <div className="row">
                    <div className="pm-course-title underline col-xs-8 text-center">
                    </div>
                   
                  </div>
                </div>
              </div>
  
              <div className="col-xs-12">
                <div className="row">
                  <div className="pm-certificate-footer">
                    <div className="col-xs-4 pm-certified col-xs-4 text-center">
                      <span className="pm-empty-space block underline"></span>
                      <span className="bold block">Trainer Name : {trainerName}</span>
                    </div>
                   
                    <div className="col-xs-4 pm-certified col-xs-4 text-center">
                      <span className="pm-credits-text block sans">Date Completed {WorkShopDate}</span>
                      <span className="pm-empty-space block underline"></span>
                      <span className="pm-credits-text block sans">
                        <img src={verified} className='verified' alt=""/>
                      </span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
const Certificate = ({ data }) => {



  const handlePrint = useReactToPrint({
    content: () => document.getElementById('certificate-preview'),
  });

  const handleDownloadImage = () => {
    html2canvas(document.getElementById('certificate-preview')).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'certificate.png';
      link.click();
    });
  };

  return (
    <div className="main-container-certificate">
      <div className="app-container">
      <button className='certificate-btn' onClick={handlePrint}>Print Certificate</button>
          <button className='certificate-btn' onClick={handleDownloadImage}>Download as Image</button>
        <CertificatePreview />
      </div>
      <div className='headss'>
        For Certificate Use Desktop And Laptop
      </div>
    </div>
  );
};

export default Certificate;
