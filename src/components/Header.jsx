import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <header className='header'>
        <div className='first-header-section'>
            <Link to= '/'>
                <img src="./assets/Logo 1.png" alt="Logo" className='logo'/>
            </Link>
        </div>

        <div className='second-header-section'>
            <Link to= '' className='navLinks'>
                <p> Products </p>
            </Link>
            <Link to= '' className='navLinks'>
                <p className='green'> Company </p>
            </Link>
            <Link to = '' className='navLinks'>
                <p> Resources </p>
            </Link>
        </div>

        <div className='third-header-section'>
            <p className='navPara'> Log In</p>

            <Link className='user-button'>
            <img src="./assets/user.svg" alt="user" className='user'/>
            <p className='user-para'> Become an Investor </p>
            </Link>
        </div>
    </header>
    
    </>
  )
}

export default Header