import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'
const About = () => {
  return (
   <div className='aboutBigContainer'>
    {/* LOGIN BG IMAGE */}

    <div className='aboutbg'>
      <div className='aboutbgText'>
        <h3>About</h3>
      </div>
    </div>


     {/* ABOUT CEO */}
    <div className='aboutCeo'>
        <div className='aboutCeoContainer'>
            <div className='aboutCeocontent'>
                <img id='topceo' src='/images/chainminelogo.svg' alt='logo'/>
                <div className='aboutCeohead'>
                    <p>“Bitcoin is not only a currency of the future, but the
                    revolution of traditional currencies and banking systems.”</p>
                    <img src='/images/logo.png' alt='logo'/>
                    <h5>— Travis Casey, CEO of ChainMine</h5>
                </div>
            </div>

        </div>
    </div>

    {/* FOUR SYMBOL */}

        <div className='aboutsymbolContainer'>
              <div className='aboutsymbolContent'>
                <div className='aboutsymbol01'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>SSL Certified Platform</p>

                </div>
                <div className='aboutsymbol02'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>UK Approved Company</p>

                </div>
                <div className='aboutsymbol03'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>Member of the Blockchain Association</p>

                </div>
                <div className='aboutsymbol04'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>Associated with the Financial Commission</p>

                </div>
              </div>

        </div> 

    {/* VISION OF TRUE */}
    <div className='aboutVision'>
        <h5>Be part of the revolution</h5>
        <h1>Our vision of true computing power</h1>
        <div className='aboutVisionpara'>
            <p>Unlike paper money, Bitcoin and other cryptocurrencies are generated mathematically.
                Our cloud miners provide the computing power needed to generate new Bitcoins and
                secure the Bitcoin network. Bitcoins are not managed by any central government
                or banks that decide the future of the system. The Bitcoin system offers freedom.
                Freedom that we want to make available and easily accessible to everyone. 
                Today, Bitcoin is the most secure computer network on the planet, almost 
                impenetrable! The reason for this is hash power.</p>
            <p>
            Hash power is used as the computing power that miners offer to the Bitcoin network,
             which requires specialized high-performance computers that would be an expensive 
             purchase for individuals. To solve this problem, ChainMine offers the required 
             hardware as a service. For anyone around the world. Our miners work in huge clusters
            and are already actively mining Bitcoins before you even sign up. This gives us an
            efficient way to use needed power and provide you with real hardware power at no 
            additional cost.
            </p>
        </div>
    </div>

    {/* MAP */}

    <div className='mapContainer'>
        <div className='mapContent'>
            <div className='mapLeft'>
            <img src='/images/logo.png' alt='logo'/>
            </div>

            <div className='mapRight'>
                <h4>Need help or have questions?</h4>
                <h1>Get in touch with us</h1>
                <p>Support email address:</p>   
                <p>support@chainmine.org</p>
                <p>Mailing address:</p>
                <p>ChainMine, 185 Gloucester Place, London England, NW1 6BU</p>

                <div className='mapButton'>
                    <button id='mapfaqs'><img src='/images/logo.png' alt='logo'/>FAQs</button>
                    <Link target='_blank' to='https://chainmine.pro/uk_gov_102904820.pdf' style={{ textDecoration: 'none' }}><button id='maplicense'><img src='/images/logo.png' alt='logo'/>Download License</button></Link>
                </div>
            </div>
        </div>
    </div>
    <div className='aboutSmallContainer'>

    </div>
   </div>
  )
}

export default About