import { Col, Row } from "react-bootstrap";
import ShopItem from "../components/shop/ShopItem";
import shopItems from "../shop-data/data.json";

const Shop = () => {
  return (
    <><h1 className="text-center pb-3">Luxury Cars 007</h1>
    <Row xs={1} md={2} lg={3} className="g-3">
    {shopItems.map(item=>
           <Col key={item.id}><ShopItem  {...item}/></Col>
           
        )}
    </Row>
    
    </>
  )
}

export default Shop