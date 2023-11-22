import React from 'react'
import './section01.css'

const Section01 = () => {
  return (
    <>
    <div className='section01Container'>
        <div className='section01Content'>

            <div className='section01Pic'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
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
                <button id='login' className=''> <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Log in</button>
                <button id='startnow' className=''> <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Start now</button>
            </div>

            {/* REVIEW */}
            <div className='section02Review'>
              <div className='Reviewcontent'>
                <p>See our <span>13,762</span> reviews on  
                 <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
                 Trustpilot
                </p>
              </div>
            </div>

            {/* SECTION02 FLEX(GRID) */}

            <div className='section02Flex01'>
              <div className='flex011'>
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
              <h2><span style={{color: 'rgb(144, 238, 144)'}}>Your</span> freedom to mine <span style={{color: 'rgb(144, 238, 144)'}}>your</span> Bitcoins</h2>
              <p>Bitcoin Cloud Mining is an easy way to mine bitcoins without buying them.
                 You get the power of online mining without the need for expensive hardware.
                  You can set your own prices and customize your mining process on your own terms.
              </p>

              </div>
              <div className='flex012'>
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
              <h2><span style={{color: 'rgb(144, 238, 144)'}}>Easy</span> to start, <span style={{color: 'rgb(144, 238, 144)'}}>no setup</span> required</h2>
              <p>After successful registration and receiving our free bonus, our cloud 
                miners will start directly and mine your Bitcoins, day and night
                 - anytime without interruptions.
              </p>

              </div>
              <div className='flex013'>
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo'/>
              <h2><span style={{color: 'rgb(144, 238, 144)'}}>Transfer</span> your <span style={{color: 'rgb(144, 238, 144)'}}>earnings</span> today</h2>
              <p>Receive your Bitcoins directly into a Bitcoin wallet of your choice
                 or exchange them and purchase even more hardware power, directly
                  with one-click and no waiting time to increase your mining earnings even more!
              </p>

              </div>
            </div>

            {/* MINER POWER */}
            <div className='minerContainer'>
              <div className='minerContent'>
                <div className='minerBox'>
                  <div className='minerLeft'>
                    <p id='timer'>Ends in <span>04:11:33:20</span></p>
                    <h2 id='limited'>Limited Summer Special Gift</h2>
                    <h1 id='minePower'>Free <span style={{color: 'rgb(144, 238, 144)'}}>1000 GH/s</span> Miner Power</h1>
                    <p id='message'>Sign up today and get <span style={{color:'green'}}>1000 GH/s = 1 TH/s</span> miner 
                      power for your cloud hardware immediately and without obligation!</p>

                  </div>

                  <div className='minerRight'>
                  <button id='minersignup'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/> Sign up</button>

                  </div>
                </div>
              </div>
            </div>

            {/* FOUR SYMBOLS */}

            <div className='symbolContainer'>
              <div className='symbolContent'>
                <div className='symbol01'>
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
                  <p>SSL Certified Platform</p>

                </div>
                <div className='symbol02'>
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
                  <p>UK Approved Company</p>

                </div>
                <div className='symbol03'>
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
                  <p>Member of the Blockchain Association</p>

                </div>
                <div className='symbol04'>
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
                  <p>Associated with the Financial Commission</p>

                </div>
              </div>

            </div>

            {/* LINER */}
            <div className='linerContainer'>
              <div className='linerContent'>
                <p>Get <span id='linerlink'>FREE EXTRA</span> hardware power for <span id='linerlink'>EVERY</span> purchase made by your referrals.
                </p>
                <button className='learnMore'><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>Learn more</button>
              </div>
            </div>



            
        </div>
    </div>

    {/* SECTION03 */}
    <div className='section03Container'>
      <div className='sectionContent'>
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
                  <h1>Manage <span style={{color: 'red'}}>your</span> Cloud Miner</h1>
                  <p>See live stats, manage and upgrade your Bitcoin Cloud 
                    miners at any time in your personal dashboard. Calculate
                    future mining earnings in just a few clicks or recruit new
                    customers and get additional hardware power through our
                    3-tier affiliate program.</p>

                    <button id='networkbtn'>Network Insight</button>


                </div>
            </div>
            
          </div>

        </div>
        <div className='section03down'>
          <div className='section03downtext'>
            <h5>Bitcoin cloud mining perfected</h5>
            <h1>Mine <span style={{color: 'red'}}>your</span> own Bitcoins today</h1>
            <div className='ulContainer'>
              <ul>
                <li>Top hardware from Bitmain & Whatsminer</li>
                <li>No setup fees. No maintenance. No limits.</li>
                <li>Up to 10% affiliate commission</li>
                <li>1 TH/s sign up bonus. Up to 12% daily earnings.</li>
              </ul>
            </div>

            <button>Start now</button>

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