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
          <input type='text'id='signupname' name='signupname' placeholder='New Username'/>
          </div>

          <div className='signupemail'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
          <input type='email'id='signupemail' name='signupemail' placeholder='Your Email'/>
          </div>

          <div className='signuppassword'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
            <input type='password' id='signuppassword' name='signuppassword' placeholder=' New Password'/>
          </div>

          <div className='signupcontinuebtn'>
            <button> Continue</button>
          </div>
        </form>

          {/* UPDATE */}

     <div className='signuptermsofservice'>
      <div className='signuptermsofserviceContent'>
        <p>By clicking Sign Up, you are indicating that you have read and acknowledge our Terms of Service.</p>
      </div>
     </div>
      </div>
     </div>


    </>
    
  )
}

export default Signup