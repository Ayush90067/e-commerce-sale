import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";

import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route path="/products" element={<FeaturedProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* About */}
        <Route path="/about" element={<AboutUs />} />

        {/* Admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />    
      </Routes>

    </BrowserRouter>
  );
}

export default App;