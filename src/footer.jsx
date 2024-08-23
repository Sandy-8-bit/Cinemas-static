import React from 'react'
import sitelogo from './SiteLogos.svg';
import social from './Social.svg';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div className="top-nav">
       <div className="stelogo">
        <img src={sitelogo} alt='logo' ></img>
       </div>
       <div className="media">
        <img src={social} alt='media' ></img>
       </div>
      </div>
      <hr className='line'></hr>
      <div className="flexing">
        <div className="first-one">
            <h1>About Us</h1>
            <p> Welcome to our theatre, where storytelling meets spectacle! Our passion lies in bringing dynamic performances to life, offering unforgettable experiences that captivate and inspire audiences. From timeless classics to cutting-edge productions, we are dedicated to fostering a vibrant cultural hub that celebrates the magic of live theatre. Join us for an evening of exceptional artistry and let your imagination soar..</p>
            <div className="para">
            <p className='para'>Copyrights @2024 Ajantha Cinemas. All Rights Reserved.</p>
            </div>
        </div>
        <div className="second-one">
            <p>Home</p>
            <p>Movie</p>
            <p>Gallery</p>
            <p>Private Screnning</p>
            <p>Contact us</p>
        </div>
        <div className="third-one">
            <h3>Adress</h3>
            <p>Ajantha Ellora Cinemas,</p>
            <p>Sengunthapuram, Karur, Tamil Nadu 639002</p>
            <div className="third-one-second">
                <h3>Developed by</h3>
                <p>Eight Bit Technology</p>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Footer