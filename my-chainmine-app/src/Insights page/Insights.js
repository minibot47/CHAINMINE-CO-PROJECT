import React from 'react';
import './Insights.css';

const Insights = () => {
  return (
    < div className='insightsBigContainer'>

    {/* INSIGHTS BG IMAGE */}

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
                <img src='/images/logo.png' alt='logo'/>
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
                <div className='insightswithdrawalRightContent'>
                    <h1>Recent customer withdrawals</h1>
                     <table id='insightstable'>
                        <tr>
                            <th>Transaction</th>
                            <th>Amount</th>
                            <th>Username</th>
                            <th>Date & Time</th>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e...</td>
                            <td>0.00012837 BTC</td>
                            <td>N****110</td>
                            <td>15 Nov 2023, 19:08</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00091964 BTC</td>
                            <td>j****n05</td>
                            <td>15 Nov 2023, 17:44</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00017444 BTC</td>
                            <td>F****l18</td>
                            <td>15 Nov 2023, 16:36</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>1547b496e38d27b2a865e7a915...</td>
                            <td>0.00014678 BTC</td>
                            <td>P****HR</td>
                            <td>14 Nov 2023, 13:54</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e...</td>
                            <td>0.00012837 BTC</td>
                            <td>N****110</td>
                            <td>15 Nov 2023, 19:08</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00091964 BTC</td>
                            <td>j****n05</td>
                            <td>15 Nov 2023, 17:44</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00017444 BTC</td>
                            <td>F****l18</td>
                            <td>15 Nov 2023, 16:36</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>1547b496e38d27b2a865e7a915...</td>
                            <td>0.00014678 BTC</td>
                            <td>P****HR</td>
                            <td>14 Nov 2023, 13:54</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e...</td>
                            <td>0.00012837 BTC</td>
                            <td>N****110</td>
                            <td>15 Nov 2023, 19:08</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00091964 BTC</td>
                            <td>j****n05</td>
                            <td>15 Nov 2023, 17:44</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00017444 BTC</td>
                            <td>F****l18</td>
                            <td>15 Nov 2023, 16:36</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>1547b496e38d27b2a865e7a915...</td>
                            <td>0.00014678 BTC</td>
                            <td>P****HR</td>
                            <td>14 Nov 2023, 13:54</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e...</td>
                            <td>0.00012837 BTC</td>
                            <td>N****110</td>
                            <td>15 Nov 2023, 19:08</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00091964 BTC</td>
                            <td>j****n05</td>
                            <td>15 Nov 2023, 17:44</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00017444 BTC</td>
                            <td>F****l18</td>
                            <td>15 Nov 2023, 16:36</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>1547b496e38d27b2a865e7a915...</td>
                            <td>0.00014678 BTC</td>
                            <td>P****HR</td>
                            <td>14 Nov 2023, 13:54</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e...</td>
                            <td>0.00012837 BTC</td>
                            <td>N****110</td>
                            <td>15 Nov 2023, 19:08</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00091964 BTC</td>
                            <td>j****n05</td>
                            <td>15 Nov 2023, 17:44</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>c5198cdf908ba37dcc93af44392e1...</td>
                            <td>0.00017444 BTC</td>
                            <td>F****l18</td>
                            <td>15 Nov 2023, 16:36</td>
                        </tr>
                        <tr>
                            <td id='insightslink'>1547b496e38d27b2a865e7a915...</td>
                            <td>0.00014678 BTC</td>
                            <td>P****HR</td>
                            <td>14 Nov 2023, 13:54</td>
                        </tr>

                        

                        

                        

                     </table>

                     <p className='insightswithdrawalRightPara'>See the functionality of our automated system in action: live Bitcoin 
                        transfers and earnings of our satisfied customers. Exchange your
                         mined Bitcoins for new hardware power or receive them on a 
                         Bitcoin wallet of your choice, anytime. Day and night.</p>
                </div>

            </div>

        </div>
    </div>
    <div className='insightsSmallContainer'>

</div>
    </div>
  )
}

export default Insights