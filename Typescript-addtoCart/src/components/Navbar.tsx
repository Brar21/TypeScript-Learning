import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <div style={{ position: 'sticky',width: "100%",height: '60px',display: 'flex',justifyContent:'space-between' }}>
          <div style={{display:'flex',width:'50%',justifyContent:'space-around'}}>    
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
          <div>    
          <button style={{ width: '3rem',height: '3rem',background: 'transparent',borderRadius: '50%',position: 'relative' }} >Cart
          <div style={{borderRadius:'50%',backgroundColor:'red',display:'flex',justifyContent:'center',alignItems:'center',color:'white',width:'1.5rem',height:'1.5rem',position:'absolute',bottom:'0',right:'0',transform:'translate(25%, 25%)'}}>3</div></button>
          </div>

    </div>
  )
}

export default Navbar