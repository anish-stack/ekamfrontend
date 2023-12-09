import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/Home';
import Login from './components/Auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import Header from './components/Headers/Header'
import LearnComplete from './components/LearnMaterial/LearnComplete';
import AudioBooks from './components/audioBooks/AudioBooks';
import PdfBooks from './components/pdfEbooks/PdfBooks';
import PaidContent from './components/PaidContent/PaidContent';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import Dashboard from './components/dashboard/Dashboard';
import Certificate from './components/dashboard/certificate';
import Error404 from './components/ErrorPage/Error404';
import ContactForm from './components/dashboard/Conatct';
import Error from './components/ErrorPage/Error';
import Footer from './components/Footer/Footer';
import RecordWorkshops from './components/LearnMaterial/RecordWorkshops';
import Loader from './components/Loader/Loader';
import LearnMeterial from './components/LearnMaterial/LearnMeterial';
import Aboutus from './components/home/Aboutus';
function App() {
  const [shouldRenderCertificate, setShouldRenderCertificate] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const updateWindowWidth = () => {
    setShouldRenderCertificate(window.innerWidth !== 768);
  };

  useEffect(() => {
    // Initial setup
    updateWindowWidth();

    // Event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <>
     {showLoader && <Loader />}
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User/login" element={<Login />} />
        <Route path="/User/Register" element={<Register />} />
        <Route path="/workshop/:id" element={<LearnComplete />} />
        <Route path="/AudioBooks" element={<AudioBooks />} />
        <Route path="/E-Books" element={<PdfBooks />} />
        <Route path="/Paid/:audioBookId" element={<PaidContent />} />
        <Route path="/Enroll/:id" element={<PaymentSuccess />} />
        <Route path="/User/dashboard" element={<Dashboard />} />
        {shouldRenderCertificate && (
        <Route path="/User/certificates" element={<Certificate />} />
      )}
              <Route path="/User/N/A" element={<Error404 />} />
        <Route path="/User/Contact" element={<ContactForm />} />
        <Route path="/*" element={<Error />} />
        <Route path="/recorded-workshop" element={<RecordWorkshops />} />
        <Route path="/Seminars" element={<LearnMeterial/>} />
        <Route path="/About" element={<Aboutus/>}/>

        {/* <Route path="/Paid" element={<PaidContent />} /> */}

      </Routes>       

 
    </Router>
    <Footer/>
    <ToastContainer />
    </>
   

  );
}

export default App;
