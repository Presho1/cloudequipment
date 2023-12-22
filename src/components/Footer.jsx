import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer_left">
          <img src='./assets/logo2.png' alt="CloudEquipment" className='footer_logo' />
          <p className='footer_description'> We are always open to discuss your project and <br/> improve your online presence. </p>

          <div className='contact'>
            <div className='contact_container'>
              <div className='footer_contact'>
                <h6 className='contact_title'>Email me at</h6>
                <a className='contact_para' href="mailto:contact@website.com">contact@website.com </a>
              </div>
              <div className='footer_contact'>
                <h6 className='contact_title'>Call us</h6>
                <a className='contact_para' href="tel:0927 6277 28525">0927 6277 28525</a>
              </div>
              <div className='footer_contact'>
                <h6 className='contact_title'>Social Media</h6>
                <BsLinkedin className='contact_social' />
                <BsGithub className='contact_social' />
                <BsYoutube className='contact_social' />
                <BsInstagram className='contact_social'/>
              </div>
            </div>
          </div>
        </div>

        <footer className='footer_right'>
          <div>
            <h5 className='footer_title'>COMPANY</h5>
            <p className='footer_para'>Our Story</p>
            <p className='footer_para'>Careers</p>
            <p className='footer_para'>Community</p>
            <p className='footer_para'>About us</p>
            <p className='footer_para'>Press</p>
          </div>
          <div>
            <h5 className='footer_title'>LEGAL</h5>
            <p className='footer_para'>Legal</p>
            <p className='footer_para'>Terms and Conditions</p>
            <p className='footer_para'>Privacy Policy</p>
            <p className='footer_para'>Disclaimer</p>
          </div>
          <div>
            <h5 className='footer_title'>RESOURCES</h5>
            <p className='footer_para'>For Investors</p>
            <p className='footer_para'>For OEMs & Suppliers</p>
            <p className='footer_para'>For Healthcare Providers</p>
            <p className='footer_para'>Others</p>
          </div>
        </footer>
      </footer>
    </>
  )
}

export default Footer