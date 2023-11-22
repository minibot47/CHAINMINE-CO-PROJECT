import React from 'react'
import './Upgrade.css'

const Upgrade = () => {
  return (
    <div className='UPGRADE'>
        <h1>Upgrade</h1>
        <hr/>
        <h2>Upgrade hardware</h2>
        <div className='totalpower'>
            <div className='leftpower'>
                <div className='power'>
                    <div><img src='' alt='💻'/></div>
                    <div>
                        <h3>Total power</h3>
                        <h2>1.000 TH/s</h2>
                    </div>
                </div>
                <div className='power1'>
                <div><img src='' alt='💻'/></div>
                    <div>
                        <h3>Purchased power</h3>
                        <h2>0.000 KH/s</h2>
                    </div>
                </div>
                <div className='power1'>
                <div><img src='' alt='💻'/></div>
                    <div>
                        <h3>Hardware costs</h3>
                        <h2>0.00000000 BTC</h2>
                    </div>
                </div>
                <div className='power1'>
                <div><img src='' alt='💻'/></div>
                    <div>
                        <h3>Upgrades</h3>
                        <h2>0</h2>
                    </div>
                </div>
            </div>
            <div className='rightpower'>
                <div className='buttons'>
                    <button id='green'>Buy Via BTC</button>
                    <button>Buy Via ChainMine</button>
                </div>

                <div className='buy'>
                    <h2>Buy hardware for:</h2>
                    <div className='buying'> 
                        <h3>MINIMUM:</h3>
                        <h3>0.00040000 BTC</h3>
                    </div>
                    <div className='buying'>
                        <h3>MAXIMUM:</h3>
                        <h3>4.70000000 BTC</h3>
                    </div>
                </div>
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
                <div className='hashrate'>
                    <h3>MINER HASHRATE:</h3>
                    <h3>3.670 TH/s</h3>
                </div>
                <div className='deposit'>
                    <h4>Send Bitcoins to:</h4>
                    <h3>3NDJgLUa5pCiv7qWNAxDdvK1bpf6Rjtn1x</h3>
                </div>
                <div className='qrcode'>
                    <img src='' alt='⚡'/>
                </div>
                <div className='upgrade-words'>
                    <h4>
                        Transaction latency depends on your set transaction fees and Bitcoin network
                        <br/>load. After confirming your deposit, you will be allocated hardware power.
                        <br/>Minimum purchase amount: 0.00040000 BTC
                        <br/>Lower amounts cannot be processed by the system for technical reasons and will be
                        <br/>rejected.
                    </h4>
                </div>
                


            </div>

        </div>
        <div className='allyourupgrade'>
            <h1>All your upgrades</h1>
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

export default Upgrade