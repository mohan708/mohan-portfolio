import React from 'react'
import Profile from '../../assets/home3.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return(
  <section className='home section grid'>
   <img src={Profile} alt='' className='home__img'></img>
   <div className="home__content">
    <div className="home__data">
      <h1 className='home__title'> <span>I'm Mohan Rijal.</span> <br />
      Web Developer </h1>

 <p className='home__description' >
 JavaScript web developer with a passion for building dynamic, responsive, and user-friendly web applications. Seeking to leverage my skills in ReactJS, Redux, and modern frontend technologies to contribute to innovative projects and deliver exceptional digital experiences for users.
 </p>
 
 <Link to='/about' className='button'>
 More About Me{' '}
 <span className='button__icon'>
  <FaArrowRight />
 </span>
 </Link>

    </div>
   </div>

   <div className="color__block"></div>
  </section>
  )
}

export default Home