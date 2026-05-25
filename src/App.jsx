import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route
         path="/product/:id"
         element={<ProductDetails />}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App