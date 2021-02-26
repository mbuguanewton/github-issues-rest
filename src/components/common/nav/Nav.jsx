import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__wrapper'>
        <Link to='/'>
          <h1>Issues Tracker</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
