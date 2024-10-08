import React from 'react'

import {
  FaEnvelopeOpen,FaPhoneSquareAlt,FaFacebookF,FaTwitter,FaYoutube,FaDribbble,FaGithub, FaLinkedinIn
} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi';
import './contact.css'

const Contact = () => {
  return (
   <section className="contact section">
    <h2 className="section__title">
      Get In <span>
        Touch
      </span>
    </h2>

     <div className="contact__container container grid">
      <div className="contact__data">
        <h3 className="contact__title">Don't be shy</h3>
        <p className="contact__description">
        JavaScript web developer with a passion for building dynamic, responsive, and user-friendly web applications. Seeking to leverage my skills in ReactJS, Redux, and modern frontend technologies to contribute to innovative projects and deliver exceptional digital experiences for users.        </p>

        <div className="contact__info">

          <div className="info__item">
            <FaEnvelopeOpen className='info__icon' />

            <div>
              <span className="info__title">Mail me</span>
              <h4 className="info__desc">mohan123@gmail.com</h4>
            </div>
          </div>

          <div className="info__item">
            <FaPhoneSquareAlt className='info__icon' />

            <div>
              <span className="info__title">Call me</span>
              <h4 className="info__desc">7081018755</h4>
            </div>
          </div>

        </div>

        <div className="contact__socials">
          <a href="https://github.com/mohan708" className='contact__social-link'>
          <FaGithub />

          </a>
          <a href="https://www.linkedin.com/in/mohan-rijal-aa904a217/" className='contact__social-link'>
          <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" className='contact__social-link'>
           <FaYoutube />
          </a>
          <a href="https://dribbble.com" className='contact__social-link'>
           <FaDribbble />
          </a>
        </div>
      </div>

      <form action="" className='contact__form'>
        <div className="form__input-group">
          <div className="form__input-div">
            <input 
            type="text"
            placeholder='Your Name'
            className='form__control'
            />
          </div> <div className="form__input-div">
            <input 
            type="email"
            placeholder='Your Email'
            className='form__control'
            />
          </div>
          <div className="form__input-div">
            <input 
            type="text"
            placeholder='Your Subject'
            className='form__control'
            />
          </div>



        </div>

        <div className="form__input-div">
            <textarea 
           
            id=""
            placeholder='Your Message'
            className='form__control textarea'
            >

            </textarea>
          </div>
          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>

      </form>
     </div>

    </section>
  )
}

export default Contact