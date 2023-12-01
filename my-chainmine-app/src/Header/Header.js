import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';

const Header = ({handleFooterVisibility1}) => {

    const[openMenu, setopenMenu] = useState(false);
    const toggleBtn = () =>{
        setopenMenu(!openMenu)
    }
    const Handleheader = () => {
        handleFooterVisibility1();
      };
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
                <Link to='/' ><img src='/images/chainminelogo.svg' alt='logo'/></Link>
                </div>

                {/* NAVIGATION BAR */}

                <div className='headernavigate'>
                <Link to='/' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Home</p></Link>
                    <Link to='/Pricing' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Pricing</p></Link>
                    <Link to='/Affiliate' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Affiliate <span id='freebtc'>Free BTC</span></p></Link>
                    <Link to='/Insights' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Insights</p></Link>
                    <Link to='/FAQs' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>FAQs</p></Link>
                   <Link to='/About' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>About</p></Link>

                </div>

                {/* SIGNUP && SIGN IN */}

                <div className='headersignUpIn'>

                    <Link to='/Login' style={{ textDecoration: 'none' }}><button id='headersignin'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign in </button></Link>

                   <Link to='/Signup' style={{ textDecoration: 'none' }}> <button id='headersignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign up</button> </Link>
                </div>
                <div className='headerburgermenu'>
                    <img onClick={toggleBtn} src='/images/menu.png' alt='menu' />
                </div>
            </div>


            { openMenu && <div className='headerThirdLayer'>
                <div className='headerthirdContainer'>
                    <div className='headerthirdsignupin'>
                    <Link to='/Login' style={{ textDecoration: 'none' }}><button id='headerthirdsignin'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign in </button></Link>
                    <Link to='/Signup' style={{ textDecoration: 'none' }}> <button id='headerthirdsignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign up</button> </Link>
                    </div>

                    <div className='headerthirdnavigate'>
                    <Link to='/' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Home</p></Link>
                    <Link to='/Pricing' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Pricing</p></Link>
                    <Link to='/Affiliate' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Affiliate </p></Link>
                    <Link to='/Insights' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Insights</p></Link>
                    <Link to='/FAQs' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>FAQs</p></Link>
                   <Link to='/About' style={{ textDecoration: 'none' }}><p onClick={Handleheader}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>About</p></Link>

                    </div>
                </div>

            </div>}

        </div>
    </header>   
  )
}

export default Header