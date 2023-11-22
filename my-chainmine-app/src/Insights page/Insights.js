import React from 'react';
import './Insights.css';

const Insights = () => {
  return (
    <>

    {/* AFFILIATE BG IMAGE */}

    <div className='insightsbg'>
        <div className='insightsbgText'>
            <h3>Insights</h3>
        </div>
    </div>

    {/* RECENT WITHDRAWALS */}

    <div className='insightswithdrawal'>
        <div className='insightswithdrawalContainer'>
            <div className='insightswithdrawalLeft'>
                <div className='insightsleft01'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <div className='insightsleft01text'>
                    <p>Total Customers</p>
                    <p>1028751</p>
                </div>
                </div>

                <hr className='insightshr'/>

                <div className='insightsleft01'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <div className='insightsleft01text'>
                <p>Total Mined Bitcoins</p>
                    <p>121.6856 BTC</p>
                </div>
                
                </div>
                <hr className='insightshr'/>
                <div className='insightsleft01'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <div className='insightsleft01text'>
                <p>Active Hardware Power</p>
                    <p>2.4 EH/s</p>
                </div>
                    
                </div>
                <hr className='insightshr'/>
                <div className='insightsleft01'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <div className='insightsleft01text'>
                <p>Total Power Available</p>
                <p>5.6 EH/s</p>
                </div>

                </div>
                <hr className='insightshr'/>
                <div className='insightsleft01'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <div className='insightsleft01text'>
                <p>Customer Payouts</p>
                <p>96.0434 BTC</p>
                </div>
                    
                </div>
                <hr className='insightshr'/>
                <div className='insightsleft01'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                <div className='insightsleft01text'>
                <p>Last Maintenance</p>
                <p>103 days ago</p>
                </div>
                    
                </div>


            </div>

            <div className='insightswithdrawalRight'>

            </div>

        </div>
    </div>
    </>
  )
}

export default Insights