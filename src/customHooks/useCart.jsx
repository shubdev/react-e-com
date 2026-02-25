import { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if product already exists
            const existingItem = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                // Increase quantity if exist
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, qty: 1 }];
            }
        });
    };

    return { cart, addToCart, setCart };
}