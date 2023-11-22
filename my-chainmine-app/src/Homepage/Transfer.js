import React from 'react'
import './Transfer.css'

const Transfer = () => {
  return (
    <div className='Transfer'>
        <div className='top-promotion'>
            <span>FREE EXTRA</span>hardware power.share your link! <input type='text' value={'https://chainmine.org/?ref=aXCyHo23}'}></input> <button>Learn More</button>
        </div>

        <h1 id='top'>Transfer BTC</h1>
        <hr/>
        <div className='transfer'>
        <div className='lefttransfer'>
            <h1>Payout overview</h1>
            <div className='totalpayout'>
                <img src='' alt='⚡'/>
                <div className='over'>
                    <p>Total payout</p>
                    <p>0.00000000 BTC</p>
                </div>

            </div>
            <div className='totalpayout1'>
                <img src='' alt='⚡'/>
                <div className='over1'>
                    <p>Total payout</p>
                    <p>0.00000000 BTC</p>
                </div>

            </div>
            <hr/>

        </div>
        <div className='righttransfer'>
            <h2>Withdrawal Amount</h2>

            <div className='amount'>
                <img src='' alt='⚡'/>
                <input type="number" id="amount" name="amount" min="0" max="1" step="0.001" placeholder='0.001'/>
                <select id='option'>
                    <option>BTC</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>INR</option>
                    <option>RUB</option>
                </select>
            </div>
            <div className='hashrate'>
                <h3>MINIMUM:</h3>
                <h3>0.00012000 BTC</h3>
            </div>
            <div className='bitcoin'>
                <h2>Bitcoin receiver address</h2>
                <div>
                <img src='' alt='⚡'/>
                <input type="text" id="Address" name="Address"  placeholder='ADD BTC WALLET FOR WITHDRAWALS'/>
                </div>
                <button id='send'>Send</button>
                
            </div>
            <div className='text'>
                <p>
                    Please make sure that the Bitcoin address you provide is correct. The payment process cannot be reversed.
                </p>
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

export default Transfer