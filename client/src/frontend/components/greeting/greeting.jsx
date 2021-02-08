import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from '../movies/search_container'
import CouchIcon from '../../../images/couch_icon_ma.png'
import UserIcon from '../../../images/user_icon_ma.png'
import HamburgerIcon from '../../../images/hamburger.png'

const Greeting = (props) => {
  const welcomeMessage = () => {
    if (props.currentUser.username) {
      return <h1>Welcome {props.currentUser.username}</h1>
    } else {
      return null
    }
  }

  const loggedIn = () => (
    <div>
      <button onClick={() => props.logout()}>Logout</button>  
    </div>
  )

  const loggedOut = () => (
    <div>
      <Link to='/signup'>
        <button>Sign up</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  )
  
  return (
    <div className='greeting-container'>
      <Link className='logo nav-section' to='/'>
        <img src={CouchIcon} alt=''/>
        <h1>Couchflix</h1>
      </Link>      
      <SearchContainer />
      <section className='nav-section'>
        <div className='user-options'>
          {welcomeMessage()}
          <img src={UserIcon}/>
          { props.currentUser.username ? loggedIn() : loggedOut() }
          
        </div>
        <img id='hamburger-icon' src={HamburgerIcon} />
      </section>

      
    </div>
  )
} 

export default Greeting;