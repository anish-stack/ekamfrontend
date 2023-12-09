import React from 'react'
import './about.css'
import img from './personal.png'
import img1 from './creative.png'
import ContactForm from '../dashboard/Conatct'
import Faq from './Faq'

const Aboutus = () => {
  return (
<>


    <div className='conatiner-about'>
        <h3 className='head'>About Ekam Innocation</h3>
      <div className='About-Conatiner_Top'>
    <div className='Start-About'>
        <h3 className='headsss'>Ekam Innocations– Where Transformative Learning Begins!</h3>
        <p className='para-abouts'>At Ekam Innocations, we believe in the power of Innovating education and educating
innovations to shape lives and nurture future leaders.
We operate in three fundamental directions, each dedicated to fostering growth, innovation, and
excellence in education.</p>
    </div>

    <div className="threeboxs">
      <div className='boxes'>
        <h3 className='heading-about'>Personality Development</h3>

        <p className='para-abouts'>Embark on a journey of self-discovery and personal growth with our specialized Personality
Development programs. We understand that true success extends beyond academic
achievements. Our expertly crafted courses empower individuals to enhance their
self-confidence, communication skills, leadership abilities, and emotional intelligence. Through
interactive workshops and insightful sessions, we guide you towards unlocking your full
potential, ensuring you thrive in every aspect of life.</p>
<img src={img} alt=""/>
      </div>  
      <div className=' boxes-left'>
      <h3 className='heading-about'>Innovation and Education</h3>


<p>In the dynamic world of education, innovation is key. At Innocations, we are at the forefront of
educational advancements. Our Innovation and Education initiatives focus on incorporating
cutting-edge teaching methodologies, educational technologies, and creative learning
approaches into the curriculum. By embracing innovation, we create engaging and interactive
learning experiences that captivate minds, inspire creativity, and prepare students for the
challenges of the future.</p>
<img src={img1} alt=""/>

      </div>
      <div className="box-right">
        

        <h3 className='heading-about'>Continuous Professional Development for Teachers</h3>


        <p className='para-abouts'>Teachers are the backbone of our education system, and their continuous growth is paramount.
Ekam Innocations is dedicated to the continuous professional development of educators.
Through our tailored teacher training programs, workshops, and resources, we equip teachers
with the latest teaching techniques, classroom management strategies, and subject-specific
expertise. By investing in the development of our educators, we ensure a high standard of
teaching, fostering an environment where students thrive academically and personally.
Join us at Ekam Innocations and experience education that transcends traditional boundaries.
Whether you are a student aiming for holistic growth, an educator seeking professional</p>

<p>enhancement, or an institution aspiring for innovative educational solutions, we are here to
support your journey.
Together, let's pave the way for a brighter, more enlightened future. Empower Minds. Ignite
Passion. Transform Lives.
Ekam Innocations welcomes you to be a part of this transformational journey of innovating
education and educating innovations to create future ready learners, teachers, and trainers.</p>
      </div>
    </div>
    
      </div>
    </div>
<Faq/>
<ContactForm/>

    </>

  )
}

export default Aboutus
