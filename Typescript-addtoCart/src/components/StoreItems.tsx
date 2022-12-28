import { useShoppingCart } from "../context/CartContext"
import { currencyFormat } from "../utilities/currencyFormat"

type StoreProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
const StoreItems = ({ id,name,price,imgUrl }: StoreProps) =>
{
    const { getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart }=useShoppingCart()
    const quantity = getItemQuantity(id);
    return <>
        <img src={imgUrl} alt="1" style={{ width: '100%' }} />
        <div style={{display:'flex',justifyContent:'space-between',margin:'1rem'}}>
        <h4>{name}</h4>
        <p>{currencyFormat(price)}</p>
        </div>
        <div style={{ display: 'flex',justifyContent: 'center',alignItems: "center",margin: "1rem" }}>
            {quantity === 0 ? (<button onClick={()=>increaseCartQuantity(id)}>Add to Cart</button>) : (<div style={{display:"grid",gap:'1rem'}}><div style={{display:'flex',gap:'1rem'}}>
                <button onClick={()=>increaseCartQuantity(id)}>+</button>
                <p>
                {quantity} in cart
                </p>
                <button onClick={()=>decreaseCartQuantity(id)}>-</button>
            </div>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
            </div>)}
        </div>
    </>
}

export default StoreItems