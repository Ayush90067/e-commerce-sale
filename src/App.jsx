import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FeaturedProducts from "./components/FeaturedProducts";
import Navbar from "./components/Navbar";

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
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
        path="/products" 
        element={<FeaturedProducts />}>
        </Route>
      
      </Routes>

    </BrowserRouter>
  )
}

export default App