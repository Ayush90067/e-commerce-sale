import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    // ADD PRODUCT
    const addToCart = (product) => {

        const existingProduct = cartItems.find(
            (item) => item.id === product.id
        );

        // If product already exists
        if (existingProduct) {

            const updatedCart = cartItems.map((item) =>

                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            setCartItems(updatedCart);

        } else {

            setCartItems([
                ...cartItems,
                { ...product, quantity: 1 }
            ]);
        }
    };

    // INCREASE QUANTITY
    const increaseQuantity = (id) => {

        const updatedCart = cartItems.map((item) =>

            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCartItems(updatedCart);
    };

    // DECREASE QUANTITY
    const decreaseQuantity = (id) => {

        const updatedCart = cartItems.map((item) =>

            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter((item) => item.quantity > 0);

        setCartItems(updatedCart);
    };

    // REMOVE PRODUCT
    const removeItem = (id) => {

        const filteredCart = cartItems.filter(
            (item) => item.id !== id
        );

        setCartItems(filteredCart);
    };

    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem
            }}
        >

            {children}

        </CartContext.Provider>
    );
}

export default CartProvider;