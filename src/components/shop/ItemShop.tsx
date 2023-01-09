import React from 'react'
import { useShoppingCart } from '../../context/ShopCartContext'
import StarRating from '../StarRating'

type ItemShopProps ={
    id: number, 
    name: string, 
    price: number, 
    imgUrl: string
}


function ItemShop({id, name, price, imgUrl}: ItemShopProps) {
    const {increaseItemQuantity, decreaseItemQuantity, getItemQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(id)

  return (
    <div>ItemShop

    </div>
  )
}

export default ItemShop