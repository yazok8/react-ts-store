import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShopCartContext'
import { CurrencyFormatter } from '../../utilities/CurrencyFormatter'
import ItemInCart from './ItemInCart'
import shopItems from "../../shop-data/data.json"

type ShoppingCartProps = {
  isOpen: Boolean
}

const CartSlider = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Stack gap={3}>
        {cartItems.map(item => (
          <ItemInCart key={item.id}{...item} />
        ))}
        <div className='ms-auto fw-bold fs-5'>
          Total {CurrencyFormatter(cartItems.reduce((total, curItem) => {
            const item = shopItems.find(item => item.id === curItem.id)
            return total + (item?.price || 0) * curItem.itemQuantity
          }, 0)
          )}

        </div>
      </Stack>

    </Offcanvas>

  )
}

export default CartSlider