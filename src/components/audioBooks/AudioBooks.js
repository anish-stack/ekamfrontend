import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AudioBooksCard from './AudioBooksCard';

const AudioBooks = () => {
  const [audioMaterial, setAudioMaterial] = useState();

  const fetchAudio = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.get(`${apiUrl}/api/v2/getAudioFiles`);
      setAudioMaterial(res.data.audioBooks);
      console.log(res.data.audioBooks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAudio();
  }, []);

  return (
    <>
      <h2 className="head heads"> #free Audio Books</h2>

      <div className='felx'>
      {audioMaterial && Array.isArray(audioMaterial) && audioMaterial.map((audioItem) => (
          <AudioBooksCard key={audioItem._id} audioMaterial={audioItem} />
        ))}
      </div>
    </>
  );
};

export default AudioBooks;
