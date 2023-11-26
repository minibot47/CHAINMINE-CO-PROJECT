import React from 'react'
import './Section01.css'
import {Link} from 'react-router-dom'

const Section01 = () => {
  return (
    <>
    <div className='section01Container'>
        <div className='section01Content'>

            <div className='section01Pic'>
            <img src='/images/logo.png' alt='logo'/>
            </div>

            {/* TEXT */}
            <div className='section01Text'>
                <p>Mining experience without limits</p>
                <h2>Up to<span>12%</span> daily earnings</h2>
                <p>Mine bitcoins without <span>fees</span> or <span>term limits</span></p>
            </div>

            <div className='section01Checkbox'>
                <input type='checkbox'/>
                <input type='checkbox'/>
                <input type='checkbox'/>
            </div>
        </div>

    </div>

    {/* Section02 */}

    <div className='section02Container'>
        <div className='section02Content'>

           {/* LOGIN && START NOW */}
            <div className='section02Button'>
            <Link to='/Login' style={{ textDecoration: 'none' }}><button id='section02login'> <img src='/images/logo.png' alt='O'/> Log in</button></Link>
            <Link to='/Signup' style={{ textDecoration: 'none' }}><button id='secton02startnow'> <img src='/images/logo.png' alt='O'/> Start now</button></Link>
            </div>

            {/* REVIEW */}
            {/* <div className='section02Review'>
              <div className='section02Reviewcontent'>
                <p>See our <span>13,762</span> reviews on  
                 <img src='/images/logo.png' alt='logo'/>
                 Trustpilot
                </p>
              </div>
            </div> */}

            {/* SECTION02 FLEX(GRID) */}

            <div className='section02Flex01'>
              <div className='section02flex011'>
              <img src='/images/logo.png' alt='logo'/>
              <h2><span style={{color: ' rgb(25, 202, 158)'}}>Your</span> freedom to mine <span style={{color: 'rgb(25, 202, 158)'}}>your</span> Bitcoins</h2>
              <p>Bitcoin Cloud Mining is an easy way to mine bitcoins without buying them.
                 You get the power of online mining without the need for expensive hardware.
                  You can set your own prices and customize your mining process on your own terms.
              </p>

              </div>
              <div className='section02flex012'>
              <img src='/images/logo.png' alt='logo'/>
              <h2><span style={{color: 'rgb(25, 202, 158)'}}>Easy</span> to start, <span style={{color: 'rgb(25, 202, 158)'}}>no setup</span> required</h2>
              <p>After successful registration and receiving our free bonus, our cloud 
                miners will start directly and mine your Bitcoins, day and night
                 - anytime without interruptions.
              </p>

              </div>
              <div className='section02flex013'>
              <img src='/images/logo.png' alt='logo'/>
              <h2><span style={{color: 'rgb(25, 202, 158)'}}>Transfer</span> your <span style={{color: 'rgb(25, 202, 158)'}}>earnings</span> today</h2>
              <p>Receive your Bitcoins directly into a Bitcoin wallet of your choice
                 or exchange them and purchase even more hardware power, directly
                  with one-click and no waiting time to increase your mining earnings even more!
              </p>

              </div>
            </div>

            {/* MINER POWER */}
            <div className='section02minerContainer'>
              <div className='section02minerContent'>
                <div className='section02minerBox'>
                  <div className='section02minerLeft'>
                    <p id='section02timer'>Ends in <span>04:11:33:20</span></p>
                    <h2 id='section02limited'>Limited Summer Special Gift</h2>
                    <h1 id='section02minePower'>Free <span style={{color: 'rgb(25, 202, 158)'}}>1000 GH/s</span> Miner Power</h1>
                    <p id='section02message'>Sign up today and get <span style={{color:'rgb(0,67,70)'}}>1000 GH/s = 1 TH/s</span> miner 
                      power for your cloud hardware immediately and without obligation!</p>

                  </div>

                  <div className='section02minerRight'>
                  <Link to='/Signup' style={{ textDecoration: 'none' }}><button id='section02minersignup'><img src='/images/logo.png' alt='O'/> Sign Up Now</button></Link> 

                  </div>
                </div>
              </div>
            </div>

            {/* FOUR SYMBOLS */}

            <div className='section02symbolContainer'>
              <div className='section02symbolContent'>
                <div className='section02symbol01'>
                  <img src='/images/logo.png' alt='O'/>
                  <p>SSL Certified Platform</p>

                </div>
                <div className='section02symbol02'>
                  <img src='/images/logo.png' alt='O'/>
                  <p>UK Approved Company</p>

                </div>
                <div className='section02symbol03'>
                  <img src='/images/logo.png' alt='O'/>
                  <p>Member of the Blockchain Association</p>

                </div>
                <div className='section02symbol04'>
                  <img src='/images/logo.png' alt='O'/>
                  <p>Associated with the Financial Commission</p>

                </div>
              </div>

            </div>

            {/* LINER */}
            <div className='section02linerContainer'>
              <div className='section02linerContent'>
                <p>Get <span id='section02linerlink'>FREE EXTRA</span> hardware power for <span id='section02linerlink'>EVERY</span> purchase made by your referrals.
                </p>
                <Link to='/Affiliate' style={{ textDecoration: 'none' }}><button className='section02learnMore'><img src='/images/logo.png' alt='O'/>Learn more</button></Link>
              </div>
            </div>



            
        </div>
    </div>

    {/* SECTION03 */}
    <div className='section03Container'>
      <div className='section03Content'>
        <div className='section03up'>
          <div className='section03left'>
            <div className='section03leftContainer'>
              <div className='section03leftContent'>
                <img src='/images/pic01.png' alt='O'/>

              </div>
            </div>


          </div>
          <div className='section03right'>
            <div className='section03rightContainer'>
                <div className='section03rightContent'>
                  <h5>Maximum control, just a click away</h5>
                  <h1>Manage <span style={{color:'rgb(25, 202, 158)'}}>your</span> Cloud Miner</h1>
                  <p>See live stats, manage and upgrade your Bitcoin Cloud 
                    miners at any time in your personal dashboard. Calculate
                    future mining earnings in just a few clicks or recruit new
                    customers and get additional hardware power through our
                    3-tier affiliate program.</p>

                    <Link to='/Insights'><button id='section03networkbtn'>Network Insight</button></Link>


                </div>
            </div>
            
          </div>

        </div>
        <div className='section03down'>
          <div className='section03downtext'>
            <h5>Bitcoin cloud mining perfected</h5>
            <h1>Mine <span style={{color:'rgb(25, 202, 158)'}}>your</span> own Bitcoins today</h1>
            <div className='section03ulContainer'>
              <ul>
                <li>Top hardware from Bitmain & Whatsminer</li>
                <li>No setup fees. No maintenance. No limits.</li>
                <li>Up to 10% affiliate commission</li>
                <li>1 TH/s sign up bonus. Up to 12% daily earnings.</li>
              </ul>
            </div>

            <Link to='/Signup'><button>Start now</button></Link>

          </div>
          <div className='section03flex'>
            <div className='section03flex1'>
           

            </div>
            <div className='section03flex2'>
              
              </div>
              <div className='section03flex3'>
              
              </div>

          </div>

        </div>

      </div>
    </div>





    </>
  )
}

export default Section01