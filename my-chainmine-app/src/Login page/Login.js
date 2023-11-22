import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <>
     {/* LOGIN BG IMAGE */}

     <div className='loginbg'>
      <div className='bgText'>
        <h3>Sign in</h3>
      </div>
     </div>

     {/* FORM ASPECT */}
     <div className='loginForm'>
       <div className='formContent'>
        <form>
          <div className='name'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
          <input type='text'id='name' name='name' placeholder='Email/Username'/>
          </div>

          <div className='password'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='O'/>
            <input type='password' id='password' name='password' placeholder='Password'/>
          </div>

          <div className='forgotbtn'>
            <p>Forgot password ?</p>
            <button> Continue</button>
          </div>
        </form>

          {/* UPDATE */}

     <div className='update'>
      <div className='updateContent'>
        <h5>Update (August 23, 2023):</h5>
        <p>We successfully enabled the two-factor 
          authentication (2FA) feature to provide additional 
          and stronger protection for your account. Find out
           more about it in your account settings.</p>
      </div>
     </div>
      </div>
     </div>

    </>
  )
}

export default Login