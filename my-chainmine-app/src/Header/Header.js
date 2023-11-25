import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='headerContainer'>

            <div className='headertopLayer'>

                {/* LOGO */}

                <div className='headerlogo'>
                    <img src='/images/logo.png' alt='logo'/>
                </div>

                {/* STATISTICS */}

                <div className='headerstatistics'>
                    <p>1 BTC = <span style={{ fontWeight: 780}}>36215.38 USD</span></p>
                    <p><span style={{ fontWeight: 780}}>993868</span> Customers</p>
                    <p><span style={{ fontWeight: 780}}>114.2117 BTC</span> Minings</p>
                    <p><span style={{ fontWeight: 780}}>2.3 EH/s</span> Power</p>
                    <p><span style={{ fontWeight: 780}}>93.3224 BTC</span> Payouts</p>
                </div>

                {/* REVIEW ON TRUST PILOT */}

                {/* <div className='headerreview'>
                    <p>See our <span style={{ fontWeight: 780}}>13,762</span> reviews on  
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                        Trustpilot</p>
                </div> */}

                {/* SELECT CURRENCY */}

                <div className='headerselect'>
                    <select className='headerselectcontent'>
                        <option>BTC</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>INR</option>
                        <option>RUB</option>
                    </select>
                </div>
            </div>

            <div className='headersecondLayer'>

                {/* LOGO */}

                <div className='headerlogo2'>
                <Link to='/'><img src='/images/chainminelogo.svg' alt='logo'/></Link>
                </div>

                {/* NAVIGATION BAR */}

                <div className='headernavigate'>
                <Link to='/'><p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Home</p></Link>
                    <Link to='/'><p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Pricing</p></Link>
                    <Link to='/Affiliate'><p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Affiliate <span id='freebtc'>Free BTC</span></p></Link>
                    <Link to='/Insights'><p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Insights</p></Link>
                    <Link to=''><p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>FAQs</p></Link>
                   <Link to='/About'><p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>About</p></Link>

                </div>

                {/* SIGNUP && SIGN IN */}

                <div className='headersignUpIn'>

                    <Link to='/Login'><button id='headersignin'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign in </button></Link>

                   <Link to='/Signup'> <button id='headersignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign up</button> </Link>
                </div>


            </div>
        </div>
    </header>
  )
}

export default Header