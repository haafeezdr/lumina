import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>

        <div className='gpt3__footer-heading'>
            <h1 className='gradient__text'>Join our exclusive membership to get the latest products</h1>
        </div>

        <div className='gpt3__footer-btn'>
            <p>Request Early Access</p>
        </div>

        <div className='gpt3__footer-links'>
            <div className='gpt3__footer-links_logo'>
                <h1>LUMINA</h1>
                <p>Nedus Plaza No6/7 Lugard Road, All Rights Reserved</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Links</h4>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Get in touch</h4>
                <p>Nedus Plaza No6/7 Lugard Road UTC junction plateau State</p>
                <p>+234 706 516 5630</p>
                <p>luminacreations@gmail.com</p>
            </div>
           </div> 

        <div className='gpt3__footer-copyright'>
            <p>@2021 LUMINA. All rights reserved.</p>
        </div>    
    </div>
  )
}

export default Footer