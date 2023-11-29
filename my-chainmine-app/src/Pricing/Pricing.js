import React, { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
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
    <div className='Pricing'>
        <div className='pricing-top-image'>
            <h1>Pricing</h1>
        </div>
        <div className='pricing-minepower'>
            <h4>You set the price. You have the control.</h4>
            <h2>How much  <span>mining power</span> do you need?</h2>
        </div>
        <div className='pricing-future'>
                <div className='pricing-futuremining'>
                    <div className='pricing-futureminingleft'>
                        <h2>Amount you want to pay:</h2>
                        <div className='pricing-amount'>
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
                        <div className='pricing-divide'>
                            <h2>MINER HASHRATE:</h2>
                            <h2>{originalValue} TH/s</h2>
                        </div>
                        <div className='pricing-divide'>
                            <h3>UNIT PRICE:</h3>
                            <h3>{increasedValue} BTC</h3>
                        </div>
                        <hr/>
                        <div className='pricing-divide'>
                            <h3>MINIMUM:</h3>
                            <h3>3.670 TH/s</h3>
                        </div>
                        <div className='pricing-divide'>
                            <h3>MAXIMUM:</h3>
                            <h3>71.865 PH/s</h3>
                        </div>
                    </div>
                    <div className='pricing-futureminingright'>
                        <h2>Estimated Income by Hashrate</h2>
                        <div className='pricing-futureminingrightflex'>
                            <div className='pricing-estimate'>
                                <h3>PER DAY:</h3>   
                                <h3>PER HOUR:</h3> 
                                <h3>PER WEEK:</h3> 
                                <h3>PER MONTH:</h3> 
                                <h3>PER YEAR:</h3> 
                                
                            </div>
                            <div className='pricing-estimate'>  
                                <h3>{percent}%</h3>
                                <h3>{percent1}%</h3>
                                <h3>{percent2}%</h3>
                                <h3>{percent3}%</h3>
                                <h3>{percent4}%</h3>
                                
                            </div>
                            <div className='pricing-estimate'>
                                <h3>{amount} BTC</h3>
                                <h3>{amount1} BTC</h3>
                                <h3>{amount2} BTC</h3>
                                <h3>{amount3} BTC</h3>
                                <h3>{amount4} BTC</h3>
                            </div>
                        </div>
                        <hr/>

                        <div className='pricing-estimate1'> 
                            <h3>Estimate:</h3>
                            <h3>~{amount5} days</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pricing-bottom'>
            Don't limit yourself to fixed price plans. You decide how much hardware power 
            <br/>you want to buy! No maintenance or waiting periods. No hidden setup or transfer 
            <br/> fees. No term limits. Your cloud mining hardware starts automatically and is 
            <br/> always online to mine Bitcoins for you.
            </div>
        <div className='pricing-section03down1'>
            <div className='pricing-section03flex11'>
                <div className='pricing-section03flex112'>
            

                </div>
                <div className='pricing-section03flex21'>
                
                </div>
                <div className='pricing-section03flex31'>
                
                </div>

            </div>
            <div className='pricing-section03downtext1'>
                <h5>Bitcoin cloud mining perfected</h5>
                <h1>Mine <span style={{color: 'red'}}>your</span> own Bitcoins today</h1>
                <div className='pricing-ulContainer1'>
                <ul>
                    <li>Top hardware from Bitmain & Whatsminer</li>
                    <li>No setup fees. No maintenance. No limits.</li>
                    <li>Up to 10% affiliate commission</li>
                    <li>1 TH/s sign up bonus. Up to 12% daily earnings.</li>
                </ul>
                </div>

                <button>Start now</button>

            </div>
            
        </div>
        <div className='pricing-minerContainer1'>
              <div className='pricing-minerContent1'>
                <div className='pricing-minerBox1'>
                  <div className='pricing-minerLeft1'>
                    <h2 id='pricing-limited1'>Limited Summer Special Gift</h2>
                    <h1 id='pricing-minePower1'>Free <span style={{color: 'rgb(144, 238, 144)'}}>1000 GH/s</span> Miner Power</h1>
                    <p id='pricing-message1'>Sign up today and get <span style={{color:'green'}}>1000 GH/s = 1 TH/s</span> miner 
                      power for your cloud hardware immediately and without obligation!</p>

                  </div>

                  <div className='pricing-minerRight1'>
                  <button id='pricing-minersignup1'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign up</button>

                  </div>
                </div>
              </div>
        </div>
        <div className='pricing-aboutsymbolContainer'>
              <div className='pricing-aboutsymbolContent'>
                <div className='pricing-aboutsymbol01'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>SSL Certified Platform</p>

                </div>
                <div className='pricing-aboutsymbol02'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>UK Approved Company</p>

                </div>
                <div className='pricing-aboutsymbol03'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>Member of the Blockchain Association</p>

                </div>
                <div className='pricing-aboutsymbol04'>
                  <img src='/images/logo.png' alt='logo'/>
                  <p>Associated with the Financial Commission</p>

                </div>
              </div>

        </div> 
    </div>
  )
}

export default Pricing