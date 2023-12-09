import React from 'react'
import Slider from '../Slider/Slider';
import WhySections from '../whysections/WhySections';
import LearnMeterial from '../LearnMaterial/LearnMeterial';
import RecordWorkshops from '../LearnMaterial/RecordWorkshops';
import AudioBooks from '../audioBooks/AudioBooks';
import PdfBooks from '../pdfEbooks/PdfBooks';
import CertificatePage from './CertificatePage';
import Work from './Work';
import Faq from './Faq';
import Testimonial from './Testinomial';
const Home = () => {
  return (
    <>
    <Slider/>
    <WhySections/>
    <LearnMeterial/>
    <RecordWorkshops/>
    <AudioBooks/>
    {/* <PdfBooks/> */}
    <Work/>
    <CertificatePage/>
    <Testimonial/>
    <Faq/>
    
    </>
  )
}

export default Home