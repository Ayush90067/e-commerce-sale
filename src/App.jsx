import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/AdminOrders";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductDetails from "./components/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {


return (

    <BrowserRouter>

        <Routes>

            {/* Home */}
            <Route
                path="/"
                element={<Home />}
            />

            {/* Products */}
            <Route
                path="/products"
                element={
                    <ProtectedRoute>
                        <FeaturedProducts />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/product/:id"
                element={
                    <ProtectedRoute>
                        <ProductDetails />
                    </ProtectedRoute>
                }
            />

            {/* Categories */}
            <Route
                path="/categories"
                element={
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                }
            />

            {/* Cart */}
            <Route
                path="/cart"
                element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                }
            />

            {/* Checkout */}
            <Route
                path="/checkout"
                element={
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                }
            />

            {/* My Orders */}
            <Route
                path="/my-orders"
                element={
                    <ProtectedRoute>
                        <MyOrders />
                    </ProtectedRoute>
                }
            />

            {/* Authentication */}
            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            {/* About */}
            <Route
                path="/about"
                element={<AboutUs />}
            />

            {/* Admin */}
            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <Admin />
                    </AdminRoute>
                }
            />

            {/* Admin Orders */}
            <Route
                path="/admin/orders"
                element={
                    <AdminRoute>
                        <AdminOrders />
                    </AdminRoute>
                }
            />

        </Routes>

    </BrowserRouter>
);


}

export default App;
