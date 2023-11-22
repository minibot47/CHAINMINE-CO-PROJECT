import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
        {/* FOOTER */}
        
        <div className='footer'>
        <div className='footerContent'>
          <div className='footer1'>
            <p>Home</p>
            <p>Pricing</p>
            <p>Affiliate</p>
            <p>Insights</p>
            <p>FAQs</p>
            <p>About</p>
            <p>Terms of Service</p>
          </div>
  
          <div className='footer2'>
            <p>Insight</p>
            <p>Sign in</p>
            <p>Forgot password</p>
            <p>Sign up</p>
          </div>
  
          <div className='footer3'>
            <p>Copyright © 2023 ChainMine</p>
          </div>
        </div>
      </div>
      </>
  )
}

export default Footer