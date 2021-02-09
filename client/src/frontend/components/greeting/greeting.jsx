import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from '../movies/search_container'
import GenreListContainer from '../genre/genre_list_container'
import CouchIcon from '../../../images/couch_icon_ma.png'
import UserIcon from '../../../images/user_icon_ma.png'
import HamburgerIcon from '../../../images/hamburger.png'

const Greeting = (props) => {
  const [isClicked, toggleHam] = useState(false)

  const loggedIn = () => (
    <div>
      <h1>Welcome {props.currentUser.username}</h1>
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
    <>
      <Link className='logo nav-section' to='/'>
        <img className='icon' src={CouchIcon} alt=''/>
        <h1>Couchflix</h1>
      </Link>      
      <SearchContainer />
      <div className='nav-section'>
        <div className='user-options'>
          <img className='icon' src={UserIcon}/>
          { props.currentUser.username ? loggedIn() : loggedOut() }
          
        </div>
        <img 
          className={isClicked ? 'icon rotated' : 'icon'}
          onClick={() => toggleHam(!isClicked)} 
          id='hamburger-icon' 
          src={HamburgerIcon}   
        />
        {isClicked ? <GenreListContainer /> : null}
      </div>

      
    </>
  )
} 

export default Greeting;