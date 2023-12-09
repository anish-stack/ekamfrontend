import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PdfBooksCard from './PdfBooksCard';

const PdfBooks = () => {
  const [pdfMaterial, setPdfMaterial] = useState(); // Corrected variable name

  const fetchPdf = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.get(`${apiUrl}/api/v2/getpdfFiles`);
      setPdfMaterial(res.data.PdfBooks); // Corrected variable name
      console.log(res.data.PdfBooks        );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPdf();
  }, []);

  return (
    <>
      <h2 className="head">E-Books</h2>

      <div className='felx'>
        {pdfMaterial && pdfMaterial.map((pdfItem) => ( // Corrected variable name
          <PdfBooksCard key={pdfItem._id} PdfMaterial={pdfItem} />
        ))}
      </div>
    </>
  );
};

export default PdfBooks;
