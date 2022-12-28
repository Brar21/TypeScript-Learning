
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/CartContext'
const Navbar = () =>
{
    const {openCart,cartQuantity}=useShoppingCart()
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
            
          {cartQuantity > 0 && (<button style={{ width: '3rem',height: '3rem',background: 'transparent',borderRadius: '50%',position: 'relative' }} onClick={openCart} >Cart
                  <div style={{ borderRadius: '50%',backgroundColor: 'red',display: 'flex',justifyContent: 'center',alignItems: 'center',color: 'white',width: '1.5rem',height: '1.5rem',position: 'absolute',bottom: '0',right: '0',transform: 'translate(25%, 25%)' }}>{cartQuantity}</div></button>)}

    </div>
  )
}

export default Navbar