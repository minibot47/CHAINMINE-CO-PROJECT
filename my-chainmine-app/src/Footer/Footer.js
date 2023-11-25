import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
        {/* FOOTER */}
        
        <div className='footer'>
        <div className='footerContent'>

          <div className='footerImage'>
            <img src='/images/logo.png'/>

          </div>
          <div className='footer1'>
          <Link to='/'><p>Home</p></Link>
            <p>Pricing</p>
            <Link to='/Affiliate'> <p>Affiliate</p></Link>
            <Link to='/Insights'><p>Insights</p></Link>
            <p>FAQs</p>
            <Link to='/About'><p>About</p></Link>
            <Link to=''><p>Terms of Service</p></Link>
          </div>
  
          <div className='footer2'>
          <Link to='/Insights'><p>Insight</p></Link>
            <Link to='/Login'><p>Sign in</p></Link>
            <Link to=''><p>Forgot password</p></Link>
            <Link to='/Signup'><p>Sign up</p></Link>
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