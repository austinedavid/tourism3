import React from 'react'
import logo from '../images/logo.jpg'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className='logo-container'>
            <div className='logo'>
                <NavLink to='/tourism3'>
                <img src={logo}/>
                </NavLink>
            </div>
            <h3>elites tourism</h3>
        </div>
        <div className='navlink-container'>
           <ul className='nav-links'>
                
                <li><NavLink to='housepage'>HOUSES</NavLink></li>
                <li><NavLink to='hotelpage'>HOTELS</NavLink></li>
                <li><NavLink to='foodpage'>RECIPES</NavLink></li>
                <li><NavLink to='shippage'>SHIPS</NavLink></li>
                <li><NavLink to='touristpage'>TOURISM</NavLink></li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar