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
    </>
  )
}

export default Affiliate