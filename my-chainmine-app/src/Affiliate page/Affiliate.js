import React from 'react'
import './Affiliate.css'
import {Link} from 'react-router-dom'

const Affiliate = () => {
  return (
    <>
        {/* AFFILIATE BG IMAGE */}

        <div className='affiliatebg'>
            <div className='affiliatebgText'>
                <h3>Affiliate</h3>
            </div>
     </div>

     
            {/* COMMISSION */}
            <div className='affiliatecommissionContainer'>
              <div className='affiliatecommissionContent'>
                <div className='affiliatecommissionBox'>
                  <div className='affiliatecommissionLeft'>
                    <h3 id='affiliatecommissionlimited'>Additional hash power for every customer</h3>
                    <h1 id='affiliatecommissionPower'>Get up to <span style={{color: 'rgb(25, 202, 158)'}}>7+2+1% </span> commission</h1>
                    <p id='affiliatecommissionmessage'> Sign up now and invite new customers with your personal referral link. Receive up to 10% 
                    commission in the form of additional hashpower.
                      </p>

                  </div>

                  <div className='affiliatecommissionRight'>
                  <Link to='/Signup'><button id='affiliatecommissionsignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign Up Now</button></Link>

                  </div>
                </div>
              </div>
            </div>

            {/* REFFERAL SYSTEM */}

        <div className='affiliaterefferalSystem'>
            <div className='affiliaterefferalSystemLeft'>
                <h3>Expand your earnings</h3>
                <h1>Our <span style={{color: 'rgb(25, 202, 158)'}}>3-level</span> referral system</h1>
                <div className='affiliaterefferalUl'>
                    <ul>
                        <li> Level 1 – 7%</li>
                        <li> Level 2 – 2%</li>
                        <li> Level 3 – 1%</li>
                        <li>1 No limits or requirements</li>
                    </ul>
                </div>

                <Link to='/Signup'><button>Get Your Link Today</button></Link>

            </div>
            <div className='affiliaterefferalSystemRight'>
                    <h3>Simple for everyone</h3>
                        <h1>The ChainMine Partner Program</h1>
                        <div className='affiliaterefferalContainerRight'>
                            <p>Our affiliate program is available to every customer without 
                            obligation and can be used directly after registration. Send
                            your personal referral link to friends, acquaintances, in 
                            forums or on social media platforms. For every new customer
                            who signs up through your link and purchases hardware power,
                            you will receive a 7% commission (level 1) on all of his/her
                            total hash power.
                            </p>

                            <p>Now, if your recruited user follows the same pattern and 
                            also recruits more customers, you will get 2% (level 2) and
                            1% (level 3) on their newly recruited customer's hashpower.
                            </p>
                        </div>

                        

            </div>

        </div>
    </>
  )
}

export default Affiliate