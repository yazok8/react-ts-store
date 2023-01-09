import React, { useContext, createContext, useState } from 'react'
import CartSlider from '../components/cart/CartSilder'
import useLocalStorage from '../hooks/useLocalStorage'
import { CartContextInterface, CartItem, CartProviderProps } from '../interfaces/ShopCartContext'

const ShoppingCartContext = createContext({} as CartContextInterface)

export const useShoppingCart = () => {
    return (
        useContext(ShoppingCartContext)
    )
}

export const CartProvider = ({ children }: CartProviderProps) => {

    // state to track if the cart is open or closed
    const [isCartOpen, setIsCartOpen] = useState(false)

    // state to track the item in the cart. 
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shop", []);

    //calculate the total quantity of cart items 

    const cartTotal = cartItems.reduce((quantity, i) => i.itemQuantity + quantity, 0);

    // Open cart
    const openCart = () => setIsCartOpen(true);

    // Close Cart
    const closeCart = () => setIsCartOpen(false)

    /**
   * Get the quantity of each items in the cart
   * @param id the id of the item
   * @returns the quantity of each item in the cart
   */

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.itemQuantity || 0
    }


    /**
     * Increase the quantity of each items in the cart
     * @param id the id of the item
     */

    function increaseItemQuantity(id: number) {
        setCartItems(curItems => {
            return curItems.find(item => item.id === id)?.itemQuantity == null ? [...curItems, { id, itemQuantity: 1 }] :
                curItems.map(item => {
                    return item.id === id ? { ...item, itemQuantity: item.itemQuantity + 1 } : item
                })
        })
    }

    /**
    * Decrease the quantity of each items in the cart
    * @param id the id of the item
    */

    function decreaseItemQuantity(id: number) {
        setCartItems(curItems => {
            return curItems.find(item => item.id === id)?.itemQuantity === 1 ? curItems.filter(item => item.id !== id) :
                curItems.map(item => {
                    return item.id === id ? { ...item, itemQuantity: item.itemQuantity - 1 } : item
                })
        })
    }

    /**
    * Decrease the quantity of each items in the cart
    * @param id the id of the item
    * @returns removing the item from the cart
    */

    function removeFromCart(id: number) {
        setCartItems(curItems => {
            return curItems.filter(item => item.id !== id)
        })

    }

    return (
        <ShoppingCartContext.Provider value={{ cartItems, decreaseItemQuantity, getItemQuantity, increaseItemQuantity, removeFromCart, cartTotal, openCart, closeCart }}>
            {children}
            <CartSlider isOpen={isCartOpen} />
        </ShoppingCartContext.Provider>

    )
}


