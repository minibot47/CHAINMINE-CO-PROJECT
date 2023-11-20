import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
  <>
      <div className='homepage'> 
        <div className='left-nav'>
            <ul>
                <li><img src='' alt='💻'/>Dashboard</li>
                <li><img src='' alt='⚡'/>Upgrade</li>
                <li><img src='' alt='⚡'/>Transfer BTC</li>
                <li><img src='' alt='⚡'/>Partnering</li>
                <li><img src='' alt='⚡'/>Settings</li>
            </ul>
        </div>
        <div className='right'>
            <div className='top-promotion'>
                <span>FREE EXTRA</span>hardware power.share your link! <input type='text' value={'https://chainmine.org/?ref=aXCyHo23}'}></input> <button>Learn More</button>
            </div>
            <div className='dashboard'>
                <h1>Dashboard</h1>
                <hr/>
                <div className='congratulations'>
                    <img src='' alt='⚡'/>Congratulations! <span>Free 1000 GH/s</span> Have been credited to your account. <span>Send us Positive Feedback Now!</span> <button><img src='' alt='⚡'/> Rate here</button>
                </div>
                <div className='userinfo'>
                    <div className='personalinfo'><img src='' alt='⚡'/><h3>Hello user</h3></div>
                    <div className='machineinfo'><img src='' alt='⚡'/><div className='machinewords'><h3>Total Device Power</h3><h3>1.007 TH/s</h3><h3>PURCHASED:0.000 KH/s</h3><h3>REF COMMISSION:     0.000 KH/s</h3></div></div>
                </div>
                <div >
                    <h1>Your Bitcoin Minings Overview</h1>
                    <div className='mining'>
                        <div className='miningleft'>
                        <div className='mined'>
                            <div className='total'>
                                <img src='' alt='⚡'/>  
                                <h2>ToTal Mined</h2>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <div className='profit'>
                                <img src='' alt='⚡'/>  
                                <h3>Hourly profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                            <div className='profit'>
                                <img src='' alt='⚡'/>  
                                <h3>Daily profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                            <div className='profit'>
                                <img src='' alt='⚡'/>  
                                <h3>Weekly profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                            <div className='profit'>
                                <img src='' alt='⚡'/>  
                                <h3>Monthly profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                        </div>
                            

                        </div>
                        <div className='miningright'>
                            <h3>Referral link</h3>
                            <div className='referralinput'>
                                <img src='' alt='⚡'/>
                                <input value={'https://chainmine.org/?ref=aXCyHo23'}></input>
                            </div>
                            <button><img src='' alt='⚡'/>Partenering</button>
                            <div className='referralinput'>
                                <img src='' alt='⚡'/>
                                <input value={'Add Bitcoin Address in Settings'}></input>
                            </div>
                            <button><img src='' alt='⚡'/>Upgrade</button>
                        </div>
                    </div>

        
                </div>

            </div>
            <div className='future'>
                <h1>Calculate future minings</h1>
                <div className='futuremining'>
                    <div className='futureminingleft'>
                        <h2>Amount you want to pay:</h2>
                        <div className='amount'>
                            <img src='' alt='⚡'/>
                            <input type="number" id="quantity" name="quantity" min="0" max="1" step="0.001" placeholder='0.001'/>
                            <select>
                                <option>BTC</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                                <option>INR</option>
                                <option>RUB</option>
                            </select>
                        </div>
                        <div className='divide'>
                            <h2>MINER HASHRATE:</h2>
                            <h2>12.845 TH/s</h2>
                        </div>
                        <div className='divide'>
                            <h3>UNIT PRICE:</h3>
                            <h3>0.00010899 BTC</h3>
                        </div>
                        <hr/>
                        <div className='divide'>
                            <h3>MINIMUM:</h3>
                            <h3>3.670 TH/s</h3>
                        </div>
                        <div className='divide'>
                            <h3>MAXIMUM:</h3>
                            <h3>71.865 PH/s</h3>
                        </div>
                    </div>
                    <div className='futureminingright'>
                        <h2>Estimated Income by Hashrate</h2>
                        <div className='estimate'>
                            <h3>PER DAY:</h3>   
                            <h3>0.34%</h3>
                            <h3>0.04180999 BTC</h3>
                        </div>
                        <div className='estimate'>
                            <h3>PER HOUR:</h3>   
                            <h3>8.18%</h3>
                            <h3>0.04180999 BTC</h3>
                        </div>
                        <div className='estimate'>
                            <h3>PER WEEK:</h3>   
                            <h3>57.27%</h3>
                            <h3>0.04180999 BTC</h3>
                        </div>
                        <div className='estimate'>
                            <h3>PER MONTH:</h3>   
                            <h3>245.46%</h3>
                            <h3>0.04180999 BTC</h3>
                        </div>
                        <div className='estimate'>
                            <h3>PER YEAR:</h3>   
                            <h3>2986.43%</h3>
                            <h3>0.04180999 BTC</h3>
                        </div>
                        <hr/>
                        <div className='estimate1'> 
                            <h3>ESTIMATED ROI:</h3>
                            <h3>~ 12 days</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

  
  </>

  )
}

export default Homepage