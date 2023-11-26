import React from 'react'
import './Settings.css'

export const Settings = () => {
  return (
    <div className='Settings'>
        <div className='setttings-top-promotion'>
            <span>FREE EXTRA</span>hardware power.share your link! <input type='text' value={'https://chainmine.org/?ref=aXCyHo23}'}></input> <button>Learn More</button>
        </div>
        <h1 id='setttings-top'>Settings</h1>
        <hr/>
        <h2>Password settings</h2>
        <div className='setttings-Password'>
            <div className='setttings-current'>
                <div id='setttings-current'>
                    <img src='' alt='⚡'/>
                    <h3>Current password</h3>
                </div>
                <input type='password' id='setttings-password' placeholder='Enter Current Password'></input>

            </div>
            <div className='setttings-new'>
                <div id='setttings-new'>
                    <img src='' alt='⚡'/>
                    <h3>New password</h3>
                </div>
                <input type='password' id='setttings-password' placeholder='Enter Current Password'></input>

            </div>
        </div>
        <h2>Email settings</h2>
        <div className='setttings-Password'> 
            <div className='setttings-new'>
                <div id='setttings-new'>
                    <img src='' alt='⚡'/>
                    <h3>Email address</h3>
                </div>
                <input type='email' id='setttings-password' defaultValue='Enter Current Email'></input>

            </div>

        </div>
        <h2>Payout settings</h2>
        <div className='setttings-Password'> 
            <div className='setttings-new'>
                <div id='setttings-new'>
                    <img src='' alt='⚡'/>
                    <h3>Email address</h3>
                </div>
                <input type='text' id='setttings-password' placeholder='Add Btc Wallets For Withdrawal'></input>
            </div>
        </div>
        <div className='setttings-button'>
            <button id='setttings-button'>Save<img src='' alt='⚡'/></button>
        </div>
        <div id='setttings-words'>
            <h2>Security settings</h2>
            <h2>Configure two-factor authentication</h2>
            <h4>Simply download a two-factor authentication app from the <a href='#'>Google Play Store</a> or <a href='#'>Apple App Store</a> to get started.</h4>
        </div>
        <div className='setttings-bottom12'>
            <div className='setttings-first'>
                <div id='setttings-bottom12'>
                    <img src='' alt='⚡'/>
                    <h4>Add Secret to App</h4>
                </div>
                <div className='setttings-bar'>
                    <img src='' alt='⚡'/>
                </div>

            </div>
            <div className='setttings-second'>
                <input type='text' value={'RH4NRLBELZWFW7HDACLXB5X6JRIUN554'}></input>

            </div>
            <div className='setttings-third'>
                <div id='setttings-bottom12'>
                    <img src='' alt='⚡'/>
                    <h4>Enter your 2FA code</h4>


                </div>
                <input type='text' defaultValue={'6-digit Code'}></input>
            </div>
        </div>

    </div>
  )
}

export default Settings
