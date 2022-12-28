import { Offcanvas } from "react-bootstrap";
import Stack from "react-bootstrap/esm/Stack";
import items from "../data/items.json";
import { useShoppingCart } from "../context/CartContext";
import { currencyFormat } from "../utilities/currencyFormat";
import { CartItem } from "./CartItem";
type Props = {
    isOpen:boolean
}
export function ShoppingCart({isOpen}:Props)
{
    const { closeCart,cartItems } = useShoppingCart();
   return( <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body>
           <Stack gap={3}>
               {cartItems.map(item =>
                <CartItem key={item.id} {...item}/>
               )}
               <div className="ms-auto fw-bold fs-5">
                   Total {currencyFormat(cartItems.reduce((total,cartItem) =>
                   {
                       const item = items.find(el => el.id === cartItem.id)
                       return total+(item?.price||0)*cartItem.quantity
                   },0))}
               </div>
           </Stack>
       </Offcanvas.Body>
    </Offcanvas>)
}