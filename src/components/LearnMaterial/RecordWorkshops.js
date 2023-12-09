import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import RecordCard from './RecordCard';

const RecordWorkshops = () => {
  const [LearnMeterial, setLearnMetails] = useState([]);

  const fetchLearn = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
  
    try {
      const res = await Axios.post(`${apiUrl}/api/v2/get-workshop`);
      console.log(res.data); 
      const recordedWorkshops = res.data.workshops.filter(
        (workshop) => workshop.workShopType === "Recorded"
      );
        console.log("recordedWorkshops",recordedWorkshops)
      setLearnMetails(recordedWorkshops);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchLearn();
  }, []);

  return (
    <div className='margin-top'>
      <h2 className="head">Recorded Workshops</h2>
   
<div className='felx'>
<RecordCard LearnMeterial={LearnMeterial} />

</div>
    </div>
  );
};

export default RecordWorkshops;
