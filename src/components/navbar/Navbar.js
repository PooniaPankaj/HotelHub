import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const {  user } = useContext(AuthContext);


  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className='logo'>HotelHub</span>
            </Link>
            {user ? 
            <div className='loggedIn'>

                <i className="fa-solid fa-user icon"></i>
                
                <div className='usrProfile'>
                {user.username}
                </div>
            </div>
            :  <div className="navItems">
                
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>}
        </div>
      
    </div>
  )
}

export default Navbar
