import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("cart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });

    // Save Cart To Local Storage

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);

    // Add To Cart

    const addToCart = (product) => {

        const existingProduct = cartItems.find(
            item => item.id === product.id
        );

        if (existingProduct) {

            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity:
                                item.quantity +
                                (product.quantity || 1)
                        }
                        : item
                )
            );

        } else {

            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity:
                        product.quantity || 1
                }
            ]);
        }
    };

    // Remove Item

    const removeFromCart = (id) => {

        setCartItems(
            cartItems.filter(
                item => item.id !== id
            )
        );
    };

    // Increase Quantity

    const increaseQuantity = (id) => {

        setCartItems(
            cartItems.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            item.quantity + 1
                    }
                    : item
            )
        );
    };

    // Decrease Quantity

    const decreaseQuantity = (id) => {

        setCartItems(
            cartItems.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            item.quantity > 1
                                ? item.quantity - 1
                                : 1
                    }
                    : item
            )
        );
    };

    // Clear Cart

    const clearCart = () => {

        setCartItems([]);
    };

    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>

    );
};

export default CartProvider;