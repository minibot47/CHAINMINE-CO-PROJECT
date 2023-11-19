import React from 'react'
import './Section02.css'

const Section02 = () => {
  return (
    <>
    <div className='section02Container'>
        <div className='section02Content'>

           {/* LOGIN && START NOW */}
            <div className='section01Button'>
                <button id='login' className=''> <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Log in</button>
                <button id='startnow' className=''> <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Start now</button>
            </div>

            {/* REVIEW */}
            <div className='section02Review'>
            <p>See our <span>13,762</span> reviews on  
             <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
            Trustpilot</p>

            </div>


            
        </div>
    </div>
    </>
  )
}

export default Section02