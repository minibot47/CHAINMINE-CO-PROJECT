import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
  // const [Showfooter , setshowfooter] = useState(false);
  // const HandleClick = () => {
  //     setshowfooter(!Showfooter);
  //     console.log('it works');
  // }
  return (
    <>
        {/* FOOTER */}
        
        <div className='footer'>
        <div className='footerContent'>

          <div className='footerImage'>
            <img src='/images/chainminelogo.svg'/>

          </div>
          <div className='footer1'>
          <Link to='/' style={{ textDecoration: 'none' }}><p>Home</p></Link>
           <Link to='/Pricing' style={{ textDecoration: 'none' }}> <p>Pricing</p></Link>
            <Link to='/Affiliate' style={{ textDecoration: 'none' }}> <p>Affiliate</p></Link>
            <Link to='/Insights' style={{ textDecoration: 'none' }}><p>Insights</p></Link>
            <p>FAQs</p>
            <Link to='/About' style={{ textDecoration: 'none' }}><p>About</p></Link>
            <Link to='' style={{ textDecoration: 'none' }}><p>Terms of Service</p></Link>
          </div>
  
          <div className='footer2'>
          <Link to='/Insights' style={{ textDecoration: 'none' }}><p>Insight</p></Link>
            <Link to='/Login' style={{ textDecoration: 'none' }}><p>Sign in</p></Link>
            <Link to='/Forgot' style={{ textDecoration: 'none' }}><p>Forgot password</p></Link>
            <Link to='/Signup' style={{ textDecoration: 'none' }}><p>Sign up</p></Link>
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