import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import img from './facebook.png'
import img2 from './instagram.png'
import img3 from './thanks.png'
import img4 from './twitter.png'
import img5 from './whatsapp.png'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './paid.css'

const PaidContent = () => {
    const { audioBookId } = useParams();
    const [audioBookData, setAudioBookData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/api/v2/get-single-audiobook/${audioBookId}`);
                setAudioBookData(response.data.AudioBooks
                    );
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [audioBookId]);

    return (
        <div className='paid_conatiner'>
            <div className='paid_values'>
                {audioBookData && (
                    <>
                        <div className='paid-object-img'>
                            <img src={audioBookData.audioBookThumbnail} alt="" />
                        </div>
                        <div className='text-paid'>
                            <h1 className='uppercase'>{audioBookData.title}</h1>
                            {audioBookData.isPaid && (
                                <>
                                    <h3 className='prices'>Price: <del>{audioBookData.Price}</del></h3>
                                    <h3 className='Dprices'>Discount Price : {audioBookData.DiscountPrice}</h3>
                                </>
                            )}
                            <h2>This Is A Paid E-books From @Ekam Innovations</h2>
                            <h3>
                                For Reading this Book, you will need to wait for some time. Our developers are currently working on
                                integrating payment methods. Please be patient, and feel free to contact us for more information about this book at <i>admin@ekaminnovations.com</i>.
                            </h3>
                        </div>
                        <div className='contact-cta'>
                            <Link className='conatct-cta-main'>Contact Us</Link>
                            <br />
                            <br />
                            <Link to="/" className='conatct-cta-main'>Home</Link>
                        </div>
                        <div className='social-icons'>
                            <ul>
                                <li><Link><img src={img} alt="" /></Link></li>
                                <li><Link><img src={img2} alt="" /></Link></li>
                                <li><Link><img src={img4} alt="" /></Link></li>
                                <li><Link><img src={img5} alt="" /></Link></li>
                            </ul>
                        </div>
                        <div className='thanks-msg'>
                            Thanks For Your Patience
                            <img src={img3} alt="" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaidContent;