import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header>
        <div className='headerContainer'>

            <div className='headertopLayer'>

                {/* LOGO */}

                <div className='headerlogo'>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
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

                <div className='headerreview'>
                    <p>See our <span>13,762</span> reviews on  
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                        Trustpilot</p>
                </div>

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

                <div className='headerlogo'>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                </div>

                {/* NAVIGATION BAR */}

                <div className='headernavigate'>
                    <p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Home</p>
                    <p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Pricing</p>
                    <p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Affiliate</p>

                    <button>Free BTC</button>

                    <p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Insights</p>
                    <p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>FAQs</p>
                    <p><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>About</p>

                </div>

                {/* SIGNUP && SIGN IN */}

                <div className='headersignUpIn'>

                    <button id='headersignin'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign in </button>

                    <button id='headersignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign up</button>
                </div>


            </div>
        </div>
    </header>
  )
}

export default Header