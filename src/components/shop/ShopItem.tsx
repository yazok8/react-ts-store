import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShopCartContext"
import { CurrencyFormatter } from "../../utilities/CurrencyFormatter"
import StarRating from "../StarRating"
import "../shop/Shop.css"

type ShopItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
}

const ShopItem = ({ id, name, price, imgUrl }: ShopItemProps) => {

  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart()

  const quantity = getItemQuantity(id);

  return (

    <>

      <Card className="h-100">

        <Card.Img className="card-img" variant="top" src={imgUrl} height={200} ></Card.Img>
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title className="mb-0 ">
            <p className="fs-2 mb-0">{name}</p>
            <p className="text-muted mb-0">{CurrencyFormatter(price)}</p>
          </Card.Title>

          <div className="ml-auto mb-4">
            {quantity === 0 ? (<Button className="btn-img" onClick={() => increaseItemQuantity(id)} > Add To Cart</Button>
            ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem" }}>
                <Button className="minus-btn" onClick={() => decreaseItemQuantity(id)} style={{ opacity: "1", marginBlock: "20px" }}>-</Button>
                <div className="incart">
                  <span className="fs-3">{quantity}</span> in cart</div>
                <Button className="plus-btn" onClick={() => increaseItemQuantity(id)} style={{ opacity: "1", marginBlock: "20px" }}>+</Button></div>
              <Button className="remove-img" variant="danger" size="sm" onClick={() => removeFromCart(id)} style={{ opacity: "1", marginBlock: "20px" }}>Remove</Button>
            </div>}
            <div className="stars"><StarRating productId={name} /></div>
          </div>

        </Card.Body>
      </Card>
    </>
  )
}

export default ShopItem