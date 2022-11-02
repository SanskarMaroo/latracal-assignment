import React from 'react'
import '../styles.css'

const Header = () => {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>
            Parking App
        </a>
        <ul>
            <li>
                <a href='/' className='nav-title'>Home</a>
            </li>
            <li>
                <a href='/garage' className='nav-title'>Garage</a>
            </li>
            <li>
                <a href='/check-out' className='nav-title'>Check-Out</a>
            </li>
        </ul>
    </nav>
  )
}

export default Header