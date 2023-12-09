import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecordWorkshops from './RecordWorkshops'
import LeranCard from './LeranCard'
const LearnMeterial = () => {
const [LearnMeterial,setLearnMetails] = useState()

const fetchLearn = async()=>{
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
        const res =await axios.post(`${apiUrl}/api/v2/get-workshop`)
        setLearnMetails(res.data.workshops)
        console.log(res.data.workshops)
        
    } catch (error) {
        console.error(error)
    }
}

useEffect(()=>{
    fetchLearn();
},[])
  return (
<>
<h2 className="head">Workshops</h2>

    <div className='felx'>
           <LeranCard LearnMeterial={LearnMeterial} />
           
    </div>

    </>
  )
}

export default LearnMeterial