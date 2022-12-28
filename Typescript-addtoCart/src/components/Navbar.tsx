import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <div>
          <NavLink to='/'>
          <h3>Home</h3>
          </NavLink>
          <NavLink to='/store'>
          <h3>Store</h3>
          </NavLink>

          <NavLink to='/about'>
          <h3>About</h3>
          </NavLink>
              
    </div>
  )
}

export default Navbar