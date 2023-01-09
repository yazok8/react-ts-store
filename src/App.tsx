import {Container} from "react-bootstrap"
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/ShopCartContext";

function App() {
  return (
    <>
    <CartProvider>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </Container>
    </CartProvider>
    </>
  );
}

export default App;
