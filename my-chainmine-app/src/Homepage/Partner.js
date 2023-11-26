import React from 'react'
import './Partner.css'

const Partner = () => {
  return (
    <div className='Partner'>
        <div className='partner-top-promotion'>
            <span>FREE EXTRA</span>hardware power.share your link! <input type='text' value={'https://chainmine.org/?ref=aXCyHo23}'}></input> <button>Learn More</button>
        </div>
        <h1 id='partner-top'>Partnering</h1>
        <hr/>
        <div className='partner-transfer'>
        <div className='partner-lefttransfer'>
            <h1>Affiliate ad banners & overview</h1>
            <div className='partner-totalpayout'>
                <img src='' alt='⚡'/>
                <div className='partner-over'>
                    <p>Ref Commission</p>
                    <p>0.000 KH/s</p>
                </div>

            </div>
            <div className='partner-totalpayout1'>
                <img src='' alt='⚡'/>
                <div className='partner-over1'>
                    <p>Referrals</p>
                    <p>0</p>
                </div>

            </div>
            <hr/>
            <div className='partner-bitcoin1'>
                <img src='' alt='⚡'/>
                <div id='partner-referral'>
                <h3>Referral link</h3>
                <input type="text" id="partner-reflink" name="Address"  Value='https://chainmine.org/?ref=aXCyHo23][img]https://chainmine.org/assets/images/banner/b1.gif'/>
                </div>
            </div>

        </div>
        <div className='partner-righttransfer'>
            

            <div className='partner-amount'>
            <h3>Choose your banner size</h3>
                <select id='partner-option'>
                    <option>Wide Medium(468x60)</option>
                    <option>Wide Large(728x90)</option>
                    <option>Square Medium(300x250)</option>
                    <option>Square Medium(200x200)</option>
                </select>
            </div>
            <div className='partner-image'>
                <img src='' alt='⚡'/>  
            </div>
            <div className='partner-bitcoin'>
                <h3>Banner link</h3>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="partner-Address1" name="Address"  Value='https://chainmine.org/assets/images/banner/b1.gif'/>
                </div>
            </div>
            <div className='partner-bitcoin'>
                <h3>Website code</h3>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="partner-Address2" name="Address"  Value='<a href="https://chainmine.org/?ref=aXCyHo23"><img src="https://chainmine.org/assets/images/banner/b1.gif"></a>'/>
                </div>
            </div>
            <div className='partner-bitcoin'>
                <h3>Forum code</h3>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="partner-Address2" name="Address"  Value='url=https://chainmine.org/?ref=aXCyHo23][img]https://chainmine.org/assets/images/banner/b1.gif[/img][/url]'/>
                </div>
            </div>
            


        </div>
        </div>
        <div className='partner-allyourreferrals'>
            <h1>All your referred users</h1>
            <h3>Your commission share is calculated based on the hardware power <br/>
             that an invited user purchases.</h3>
            <div className='partner-table'>
                <h3>Transaction</h3>
                <h3>Method</h3>
                <h3>Status</h3>
                <h3>Power</h3>
                <h3>Costs</h3>
                <h3>Date & Time</h3>
            </div>
            <div className='partner-none'>
                <h3>(none)</h3>
            </div>
        </div>

    </div>
  )
}

export default Partner