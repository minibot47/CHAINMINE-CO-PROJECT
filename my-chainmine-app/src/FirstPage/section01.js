import React from 'react'
import './Section01.css';

const Section01 = () => {
  return (
    <>
    <div className='section01Container'>
        <div className='section01Content'>

            <div className='section01Pic'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
            </div>

            {/* TEXT */}
            <div className='section01Text'>
                <p>Mining experience without limits</p>
                <h2>Up to<span>12%</span> daily earnings</h2>
                <p>Mine bitcoins without <span>fees</span> or <span>term limits</span></p>
            </div>

            <div className='section01Checkbox'>
                <input type='checkbox'/>
                <input type='checkbox'/>
                <input type='checkbox'/>
            </div>
        </div>

    </div>
    </>
  )
}

export default Section01