import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {

        const savedCart =
            localStorage.getItem("cart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);

    const addToCart = (product) => {

        const existingProduct =
            cartItems.find(
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
                                product.quantity
                        }

                        : item
                )
            );

        } else {

            setCartItems([
                ...cartItems,
                product
            ]);
        }
    };

    const removeFromCart = (id) => {

        setCartItems(
            cartItems.filter(
                item => item.id !== id
            )
        );
    };

    const clearCart = () => {

        setCartItems([]);
    };

    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>

    );
};