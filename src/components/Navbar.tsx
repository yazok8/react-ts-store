import { Button, Container, Nav, Navbar as BsNavbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShopCartContext"


const Navbar = () => {
  const { openCart, cartTotal } = useShoppingCart()

  return (
    <BsNavbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/About" as={NavLink}>About</Nav.Link>
        </Nav>
      </Container>
      {cartTotal > 0 && (
        <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle me-3">
          <img src="images/cart.svg" alt="cart"></img>

          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(5%, 25%)" }}>
            {cartTotal}</div>
        </Button>
      )}
    </BsNavbar>
  )
}

export default Navbar