import React from 'react'
import './Faqs.css'

const Faqs = () => {
  return (
    <div className='Faqs'>
        <div className='faqs-top-image'>
            <h1>FAQS</h1>
        </div>
        <div className='faqs-grid'>
            <div className='faqs-grid1'>
                <h2>How do I get free hardware power?</h2>
                <h4>You will get free hardware/hash power of 1000 GH/s (1 TH/s) directly and only once after registration. The performance is activated directly and automatically for your cloud miner. Bitcoin mining starts immediately.</h4>
                <span>1 TH/s equals 1000 GH/s</span>
            </div>
            <div className='faqs-grid2'>
                <h2>How can I upgrade my hardware power?</h2>
                <h4>We offer you 3 ways to extend the power of your cloud miner. Purchase new hashpower directly, exchange your mined bitcoins for new hashpower or recruit new customers and receive a percentage commission in the form of extra hashpower. All options are available to you in your personal dashboard.</h4>
            </div>
            <div className='faqs-grid3'>
                <h2>Are there any setup fees or delays?</h2>
                <h4>In short, no. Thanks to our highly automated system, there are no additional costs, fees or waiting times for you. Neither for the initial setup nor for future hardware upgrades.</h4>
            </div>
            <div className='faqs-grid4'>
                <h2>What do I need to consider when making Bitcoin transactions?</h2>
                <h4>As already mentioned, we do not charge any fees. However, this does not apply to the Bitcoin network. Every Bitcoin transaction requires fees, which are sent to the Bitcoin network. Depending on the amount of the indicated fees, a transaction will be delayed between 5 and 50 minutes. This applies when buying new hardware power with BTC and transferring BTC to an address of your choice.</h4>
            </div>
            <div className='faqs-grid5'>
                <h2>How can I participate in the Affiliate Program?</h2>
                <h4>Every customer is free to join our affiliate program without any additional effort. Simply create an account and sign in. Navigate to the affiliate section in your personal dashboard and send your referral link to friends, in forums or on social media platforms.</h4>
            </div>
            <div className='faqs-grid6'>
                <h2>What do I do if I have questions or problems?</h2>
                <h4>If you have any questions or problems, you can contact us at any time by email or on our social media platforms. You can find more details in the about section.</h4>
            </div>
            <div className='faqs-grid7'>
                <h2>Is there a charge for creating an account?</h2>
                <h4>No. Creating an account does not require any additional costs or fees.</h4>
            </div>
            <div className='faqs-grid8'>
            <h2>What happens when the total available network power is fully utilized?</h2>
                <h4>This case will most likely never occur, as our network is designed for several years and we are constantly ordering new hardware to expand the total available performance. Otherwise, the acquisition of new hashpower for our customers would be temporarily paused. However, existing hardware power is always active and available for all customers at any time.</h4>
            </div>
            <div className='faqs-grid9'>
                <h2>How much hardware power can a single customer purchase?</h2>
                <h4>Each customer can purchase a minimum of 3.670 TH/s and a maximum of 71.865 PH/s per order. Gifted bonus hashpower, affiliate commission and mining exchanges are not affected by this.</h4>
            </div>
        </div>
    </div>

  )
}

export default Faqs