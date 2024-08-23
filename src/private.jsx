import React from 'react'
import Nav from './nav'
import "./private.css";
import Footer from './footer';
const Private = () => {
  return (
    <div>
     
      <div className="priv-centre">
        <div className="leftt">
        <h1 className='contactus'>CONTACT US</h1>
        <p className='parag'>Get in touch with Ajantha Cinemas!</p>
        </div>
        <div className="rightt">
        <div className="first-row">
        <input type='text' className='first-box' placeholder='Name'></input>
        <input type='text'className='second-box' placeholder='Mobile Number'></input>
        </div>
        <div className="second-row">
        <input type='text' className='third-box' placeholder='Email'></input>
        </div>
        <div className="third-row">
        <textarea
              placeholder="Message"
                className='fourth-box'
              required
            />
        </div>
        <div className="check">
            <input type='checkbox'></input>
            <p className='reg'>Regarding Advertisment</p>
        </div>
        <button className='button-click'>Submit</button>
        </div>
      </div>
 
    </div>
  )
}

export default Private