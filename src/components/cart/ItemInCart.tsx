import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShopCartContext"
import shopItems from "../../shop-data/data.json"
import { CurrencyFormatter } from "../../utilities/CurrencyFormatter"
import "../cart/Cart.css"

type ItemInCartProps = {
  id: number,
  itemQuantity: number
}


const ItemInCart = ({ id, itemQuantity }: ItemInCartProps) => {
  const { removeFromCart } = useShoppingCart()

  // this will get the item from the json data
  const cartItem = shopItems.find(item => item.id === id)

  // this will return nothing if we don't have the item.
  if (cartItem == null) return null


  return (
    <Stack className="align-items-center d-flex" direction="horizontal" gap={2}>
      <img className="item-img" alt="product" src={cartItem.imgUrl} />
      <div className="me-auto">
        <div>
          {cartItem.name}{itemQuantity > 1 && <span className="item-quantity">
            x{itemQuantity}
          </span>}
        </div>
        <div className="item-price">
          {CurrencyFormatter(cartItem.price)}
        </div>
      </div>
      <div>{CurrencyFormatter(cartItem.price * itemQuantity)}</div>
      <Button className="remove-item" variant="outline-danger" size="sm" onClick={() => removeFromCart(cartItem.id)}>X</Button>
    </Stack>
  )
}

export default ItemInCart