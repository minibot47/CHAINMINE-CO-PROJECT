import React from 'react'
import './Affiliate.css'

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
            <div className='commissionContainer'>
              <div className='commissionContent'>
                <div className='commissionBox'>
                  <div className='commissionLeft'>
                    <h3 id='commissionlimited'>Additional hash power for every customer</h3>
                    <h1 id='commissionPower'>Get up to <span style={{color: 'rgb(144, 238, 144)'}}>7+2+1% </span> commission</h1>
                    <p id='commissionmessage'> Sign up now and invite new customers with your personal referral link. Receive up to 10% 
                    commission in the form of additional hashpower.
                      </p>

                  </div>

                  <div className='commissionRight'>
                  <button id='commissionsignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign Up Now</button>

                  </div>
                </div>
              </div>
            </div>

            {/* REFFERAL SYSTEM */}

        <div className='refferalSystem'>
            <div className='refferalSystemLeft'>
                <h3>Expand your earnings</h3>
                <h1>Our <span style={{color: 'red'}}>3-level</span> referral system</h1>
                <div className='refferalUl'>
                    <ul>
                        <li> Level 1 – 7%</li>
                        <li> Level 2 – 2%</li>
                        <li> Level 3 – 1%</li>
                        <li>1 No limits or requirements</li>
                    </ul>
                </div>

                <button>Get Your Link Today</button>

            </div>
            <div className='refferalSystemRight'>
                    <h3>Simple for everyone</h3>
                        <h1>The ChainMine Partner Program</h1>
                        <div className='refferalContainerRight'>
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