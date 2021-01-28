import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import BugIcon from 'images/bug_icon.png'
// import UserIcon from 'images/user_icon.png'
// import ArrowIcon from 'images/arrow_icon.png'

const Greeting = (props) => {
  if (props.currentUser.username !== undefined){
    return (
      <div className='greeting-container'>
        <Link to='/'>
          {/* <img src={BugIcon} alt=''/> */}
          <h1>Bug Hunter</h1>
        </Link>      
        <div>
          <h1>Welcome {props.currentUser.username}</h1>
            <button onClick={() => props.logout()}>Logout</button>  
        </div>
      </div>
    )
  } else {
    return (
      <div className='greeting-container'>
      <Link className='icon' to='/'>
        {/* <img src={BugIcon} alt=''/> */}
        <h1>Bug Hunter</h1>
      </Link>
      {/* <img src={ArrowIcon} alt=''/>
      <img src={UserIcon} alt=''/> */}
      <h2>User info</h2>

      <Link to='/signup'>
        <button>Sign up</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  )}
}

export default Greeting;