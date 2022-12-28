import { createContext,ReactNode,useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStroge } from "../hooks/useLocalStroge";
type ShoppingCartProviderProps = {
    children:ReactNode
}
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity:(id:number)=>void
    decreaseCartQuantity:(id:number)=>void
    removeFromCart:(id:number)=>void
    cartQuantity: number
    cartItems:CartItem[]
}
type CartItem = {
    id: number
    quantity:number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart()
{
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }:ShoppingCartProviderProps)
{
    const [cartItems,setCartItems] = useLocalStroge<CartItem[]>("Shopping-cart",[]);
    const [isOpen,setIsOpen]=useState(false)
    function getItemQuantity(id: number)
    {
        return cartItems.find(item=>item.id===id)?.quantity||0
    }
    function increaseCartQuantity(id: number)
    {
        setCartItems(cartitem =>
        {
            if (cartitem.find(item => item.id === id) == null)
            {
                return [...cartitem,{id,quantity:1}]
            } else
            {
                return cartitem.map(item =>
                {
                    if (item.id === id)
                    {
                        return {...item,quantity:item.quantity+1}
                    } else
                    {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number)
    {
        setCartItems(cartitem =>
        {
            if (cartitem.find(item => item.id === id)?.quantity ===1)
            {
                return cartitem.filter(item=>item.id!==id)
            } else
            {
                return cartitem.map(item =>
                {
                    if (item.id === id)
                    {
                        return {...item,quantity:item.quantity-1}
                    } else
                    {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number)
    {
        setCartItems(cartitem =>
        {
            return cartitem.filter(item=>item.id!==id)
        })
    }
    const cartQuantity = cartItems.reduce((quantity,item) => item.quantity + quantity,0)
    const openCart = () =>
    {
        setIsOpen(true)
    }
    const closeCart = () =>
    {
        setIsOpen(false)
    }
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems,cartQuantity,openCart,closeCart}}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}