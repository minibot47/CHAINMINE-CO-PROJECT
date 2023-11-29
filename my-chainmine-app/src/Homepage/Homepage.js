import React, { useState } from 'react'
import './Homepage.css'
import Upgrade from './Upgrade'
import Transfer from './Transfer'
import Partner from './Partner'
import Settings from './Settings'

const Homepage = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);


    const handleToggleVisibility = () => {
      setIsVisible(true);
      setIsVisible4(false)
      setIsVisible3(false)
      setIsVisible2(false)
      setIsVisible1(false)

    }
    const handleToggleVisibility1 = () => {
        setIsVisible1(true);
        setIsVisible4(false)
        setIsVisible3(false)
        setIsVisible2(false)
        setIsVisible(false)

    }
    const handleToggleVisibility2 = () => {
        setIsVisible2(true);
        setIsVisible4(false)
        setIsVisible3(false)
        setIsVisible(false)
        setIsVisible1(false)

    }
    const handleToggleVisibility3 = () => {
        setIsVisible3(true);
        setIsVisible4(false)
        setIsVisible(false)
        setIsVisible2(false)
        setIsVisible1(false)

    }
    const handleToggleVisibility4 = () => {
        setIsVisible4(true);
        setIsVisible3(false)
        setIsVisible2(false)
        setIsVisible1(false)
        setIsVisible(false)

    }
    const [myNumber, setMyNumber] = useState(0);
    const [originalValue, setOriginalValue] = useState(3.670);
    const [increasedValue, setIncreasedValue] = useState(0.00010900);
    const [percent,setPercent] = useState(0.34)
    const [percent1,setPercent1] = useState(8.18)
    const [percent2,setPercent2] = useState(57.27)
    const [percent3,setPercent3] = useState(245.46)
    const [percent4,setPercent4] = useState(2986.4)
    const [amount,setAmount] = useState(0.00000136)
    const [amount1,setAmount1] = useState(0.00003273 )
    const [amount2,setAmount2] = useState(0.00022909)
    const [amount3,setAmount3] = useState(0.00098183)
    const [amount4,setAmount4] = useState(0.01194559)
    const [amount5,setAmount5] = useState(12)
  
    const handleInputChange = (e) => {
      const newValue = parseFloat(e.target.value, 10);
      setMyNumber(newValue);
      setOriginalValue((newValue * 9175).toFixed(2));
      setIncreasedValue((newValue / 3.66972477).toFixed(7)); // or any other operation based on your requirements
      setPercent(newValue * 850)
      setPercent1(newValue * 20450)
      setPercent2(newValue * 143175)
      setPercent3(newValue * 613650)
      setPercent4(newValue * 7466000)
      setAmount((newValue / 294.117647).toFixed(7))
      setAmount1((newValue / 12.2212038).toFixed(7))
      setAmount2((newValue / 1.74603867).toFixed(7))
      setAmount3((newValue / 0.4074025).toFixed(7))
      setAmount4((newValue / 0.03348516).toFixed(7))
      setAmount5(newValue * 30000)
    };

    
  return (
  <>
      <div className='homepage'> 
        <div className='homepage-left-nav'>
            <ul className='homepage-ul'>
                <li onClick={handleToggleVisibility}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='💻'/>Dashboard </li>
                <li onClick={handleToggleVisibility1}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Upgrade</li>
                <li onClick={handleToggleVisibility2}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Transfer BTC</li>
                <li onClick={handleToggleVisibility3}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Partnering</li>
                <li onClick={handleToggleVisibility4}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Settings</li>
            </ul>
        </div>
        { isVisible &&         <div className='homepage-right'>
            <div className='homepage-top-promotion'>
                <span>FREE EXTRA</span>hardware power.share your link! <input type='text' value={'https://chainmine.org/?ref=aXCyHo23}'}></input> <button>Learn More</button>
            </div>
            <div className='homepage-dashboard'>
                <h1>Dashboard</h1>
                <hr/>
                <div className='homepage-congratulations'>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Congratulations! <span>Free 1000 GH/s</span> Have been credited to your account. <span>Send us Positive Feedback Now!</span> <button><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/> Rate here</button>
                </div>
                <div className='homepage-userinfo'>
                    <div className='homepage-personalinfo'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/><h3>Hello user</h3></div>
                    <div className='homepage-machineinfo'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/><div className='machinewords'><h3>Total Device Power</h3><h3>1.007 TH/s</h3><h3>PURCHASED:0.000 KH/s</h3><h3>REF COMMISSION:     0.000 KH/s</h3></div></div>
                </div>
                <div className='homepage-mid-section'>
                    <h1>Your Bitcoin Minings Overview</h1>
                    <div className='homepage-mining'>
                        <div className='homepage-miningleft'>
                        <div className='homepage-mined'>
                            <div className='homepage-total'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'}alt='⚡'/>  
                                <h2>Total Mined</h2>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <div className='homepage-profit'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>  
                                <h3>Hourly profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                            <div className='homepage-profit'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>  
                                <h3>Daily profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                            <div className='homepage-profit'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>  
                                <h3>Weekly profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                            <div className='homepage-profit'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>  
                                <h3>Monthly profit</h3>
                                <h2>0.00002328 BTC</h2>
                            </div>
                            <hr/>
                        </div>
                            

                        </div>
                        <div className='homepage-miningright'>
                            <h3>Referral link</h3>
                            <div className='homepage-referralinput'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>
                                <input value={'https://chainmine.org/?ref=aXCyHo23'}></input>
                            </div>
                            <button><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Partenering</button>
                            <div className='homepage-referralinput'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>
                                <input value={'Add Bitcoin Address in Settings'}></input>
                            </div>
                            <button><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>Upgrade</button>
                        </div>
                    </div>

        
                </div>

            </div>
            <div className='homepage-future'>
                <h1>Calculate future minings</h1>
                <div className='homepage-futuremining'>
                    <div className='homepage-futureminingleft'>
                        <h2>Amount you want to pay:</h2>
                        <div className='homepage-amount'>
                            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='⚡'/>
                            <input type="text" id="homepage-quantity" name="quantity"  defaultValue='0.0004' onChange={handleInputChange}/>
                            <select>
                                <option>BTC</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                                <option>INR</option>
                                <option>RUB</option>
                            </select>
                        </div>
                        <div className='homepage-divide'>
                            <h2>MINER HASHRATE:</h2>
                            <h2>{originalValue} TH/s</h2>
                        </div>
                        <div className='homepage-divide'>
                            <h3>UNIT PRICE:</h3>
                            <h3>{increasedValue} BTC</h3>
                        </div>
                        <hr/>
                        <div className='homepage-divide'>
                            <h3>MINIMUM:</h3>
                            <h3>3.670 TH/s</h3>
                        </div>
                        <div className='homepage-divide'>
                            <h3>MAXIMUM:</h3>
                            <h3>71.865 PH/s</h3>
                        </div>
                    </div>
                    <div className='homepage-futureminingright'>
                        <h2>Estimated Income by Hashrate</h2>
                        <div className='homepage-futureminingrightflex'>
                            <div className='homepage-estimate'>
                                <h3>PER DAY:</h3>   
                                <h3>PER HOUR:</h3> 
                                <h3>PER WEEK:</h3> 
                                <h3>PER MONTH:</h3> 
                                <h3>PER YEAR:</h3> 
                                
                            </div>
                            <div className='homepage-estimate'>  
                                <h3>{percent}%</h3>
                                <h3>{percent1}%</h3>
                                <h3>{percent2}%</h3>
                                <h3>{percent3}%</h3>
                                <h3>{percent4}%</h3>

                                
                            </div>
                            <div className='homepage-estimate'>
                                <h3>{amount} BTC</h3>
                                <h3>{amount1} BTC</h3>
                                <h3>{amount2} BTC</h3>
                                <h3>{amount3} BTC</h3>
                                <h3>{amount4} BTC</h3>
                            </div>
                            
                        </div>
                        <hr/>

                        <div className='homepage-estimate1'> 
                            <h3>Estimate:</h3>
                            <h3>~{amount5} days</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='homepage-bottom'>
            Don't limit yourself to fixed price plans. You decide how much hardware power 
            <br/>you want to buy! No maintenance or waiting periods. No hidden setup or transfer 
            <br/> fees. No term limits. Your cloud mining hardware starts automatically and is 
            <br/> always online to mine Bitcoins for you.
            </div>
        </div>}

        { isVisible1 &&  <Upgrade/>}
       { isVisible2 && <Transfer/>}
        { isVisible3 && <Partner/>}
        {isVisible4 && <Settings/>}
        

      </div>

  
  </>

  )
}

export default Homepage