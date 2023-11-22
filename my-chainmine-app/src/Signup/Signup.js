import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <>
    {/* LOGIN BG IMAGE */}

    <div className='signupbg'>
      <div className='signupbgText'>
        <h3>Sign up</h3>
      </div>
     </div>

     {/* FORM ASPECT */}
     <div className='signupForm'>
       <div className='signupformContent'>
        <form>
          <div className='signupname'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
          <input type='text'id='name' name='name' placeholder='New Username'/>
          </div>

          <div className='signupemail'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
          <input type='email'id='email' name='email' placeholder='Your Email'/>
          </div>

          <div className='signuppassword'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
            <input type='password' id='password' name='password' placeholder=' New Password'/>
          </div>

          <div className='continuebtn'>
            <button> Continue</button>
          </div>
        </form>

          {/* UPDATE */}

     <div className='termsofservice'>
      <div className='termsofserviceContent'>
        <p>By clicking Sign Up, you are indicating that you have read and acknowledge our Terms of Service.</p>
      </div>
     </div>
      </div>
     </div>


    </>
    
  )
}

export default Signup