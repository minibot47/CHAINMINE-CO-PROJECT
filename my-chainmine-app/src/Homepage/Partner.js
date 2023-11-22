import React from 'react'
import './Partner.css'

const Partner = () => {
  return (
    <div className='Partner'>
        <div className='top-promotion'>
            <span>FREE EXTRA</span>hardware power.share your link! <input type='text' value={'https://chainmine.org/?ref=aXCyHo23}'}></input> <button>Learn More</button>
        </div>
        <h1 id='top'>Partnering</h1>
        <hr/>
        <div className='transfer'>
        <div className='lefttransfer'>
            <h1>Affiliate ad banners & overview</h1>
            <div className='totalpayout'>
                <img src='' alt='⚡'/>
                <div className='over'>
                    <p>Ref Commission</p>
                    <p>0.000 KH/s</p>
                </div>

            </div>
            <div className='totalpayout1'>
                <img src='' alt='⚡'/>
                <div className='over1'>
                    <p>Referrals</p>
                    <p>0</p>
                </div>

            </div>
            <hr/>
            <div className='bitcoin1'>
                <img src='' alt='⚡'/>
                <div id='referral'>
                <h3>Referral link</h3>
                <input type="text" id="reflink" name="Address"  Value='https://chainmine.org/?ref=aXCyHo23][img]https://chainmine.org/assets/images/banner/b1.gif'/>
                </div>
            </div>

        </div>
        <div className='righttransfer'>
            

            <div className='amount'>
            <h3>Choose your banner size</h3>
                <select id='option'>
                    <option>Wide Medium(468x60)</option>
                    <option>Wide Large(728x90)</option>
                    <option>Square Medium(300x250)</option>
                    <option>Square Medium(200x200)</option>
                </select>
            </div>
            <div className='image'>
                <img src='' alt='⚡'/>  
            </div>
            <div className='bitcoin'>
                <h3>Banner link</h3>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="Address1" name="Address"  Value='https://chainmine.org/assets/images/banner/b1.gif'/>
                </div>
            </div>
            <div className='bitcoin'>
                <h3>Website code</h3>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="Address2" name="Address"  Value='<a href="https://chainmine.org/?ref=aXCyHo23"><img src="https://chainmine.org/assets/images/banner/b1.gif"></a>'/>
                </div>
            </div>
            <div className='bitcoin'>
                <h3>Forum code</h3>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="Address2" name="Address"  Value='url=https://chainmine.org/?ref=aXCyHo23][img]https://chainmine.org/assets/images/banner/b1.gif[/img][/url]'/>
                </div>
            </div>
            


        </div>
        </div>
        <div className='allyourreferrals'>
            <h1>All your referred users</h1>
            <h3>Your commission share is calculated based on the hardware power <br/>
             that an invited user purchases.</h3>
            <div className='table'>
                <h3>Transaction</h3>
                <h3>Method</h3>
                <h3>Status</h3>
                <h3>Power</h3>
                <h3>Costs</h3>
                <h3>Date & Time</h3>
            </div>
            <div className='none'>
                <h3>(none)</h3>
            </div>
        </div>

    </div>
  )
}

export default Partner