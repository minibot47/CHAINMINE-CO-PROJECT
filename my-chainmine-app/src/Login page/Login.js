import React from 'react'
import './Login.css'
import {Link } from 'react-router-dom'



const Login = ({handleFooterVisibility}) => {
  const HandleLogin = () => {
    handleFooterVisibility();
  };
  return (
    <div className='loginBigContainer'>
     {/* LOGIN BG IMAGE */}

     <div className='loginbg'>
      <div className='loginbgText'>
        <h3>Sign in</h3>
      </div>
     </div>

     {/* FORM ASPECT */}
     <div className='loginForm'>
       <div className='loginformContent'>
        <form>
          <div className='loginname'>
          <img src='/images/logo.png' alt='O'/>
          <input type='text'id='loginname' name='loginname' placeholder='Email/Username'/>
          </div>

          <div className='loginpassword'>
            <img src='/images/logo.png' alt='O'/>
            <input type='password' id='loginpassword' name='loginpassword' placeholder='Password'/>
          </div>

          <div className='loginforgotbtn'>
            <Link to='/Forgot' style={{ textDecoration: 'none' }}><p>Forgot password ?</p></Link>
            <Link to='/Homepage' style={{ textDecoration: 'none' }}><button onClick={HandleLogin} > Continue</button></Link>
          </div>
        </form>

          {/* UPDATE */}

     <div className='loginupdate'>
      <div className='loginupdateContent'>
        <h5>Update (August 23, 2023):</h5>
        <p>We successfully enabled the two-factor 
          authentication (2FA) feature to provide additional 
          and stronger protection for your account. Find out
           more about it in your account settings.</p>
      </div>
     </div>
      </div>
     </div>
     <div className='loginSmallContainer'>

</div>

    </div>
  )
}

export default Login