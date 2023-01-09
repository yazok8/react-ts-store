
export interface CartProviderProps {
    children : React.ReactNode
}

export interface CartContextInterface  {
getItemQuantity: (id: number) => number
increaseItemQuantity: (id: number) => void
decreaseItemQuantity: (id: number) => void
removeFromCart: (id: number) => void
cartTotal: number
cartItems: CartItem[]   
openCart: () => void
closeCart :() => void
}

export interface CartItem {
    id: number
    itemQuantity: number
}