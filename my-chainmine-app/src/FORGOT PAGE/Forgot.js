import React from 'react'
import './Forgot.css'
import {Link} from 'react-router-dom'

const Forgot =   () => {
  return (
    <div className='forgotBigContainer'>
     {/* forgot BG IMAGE */}

     <div className='forgotbg'>
      <div className='forgotbgText'>
        <h3>Forgot password?</h3>
      </div>
     </div>

     {/* FORM ASPECT */}
     <div className='forgotForm'>
       <div className='forgotformContent'>
        <form>
          <div className='forgotname'>
          <img src='/images/logo.png' alt='O'/>
          <input type='text'id='forgotname' name='forgotname' placeholder='   Email / Username'/>
          </div>


          <div className='forgotforgotbtn'>
            <Link to='/Login' style={{ textDecoration: 'none' }}><p>Sign in</p></Link>
            <button> Continue</button>
          </div>
        </form>
      </div>
     </div>
     <div className='forgotSmallContainer'>

</div>

    </div>
  )
}

export default Forgot