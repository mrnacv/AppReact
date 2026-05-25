import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creamos contexto
const CartContext = createContext();

// Custom Hook
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCartContext debe ser utilizado dentro de un CartProvider');
    }

    return context;
}

// Proveedor
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // Evalua existencia, retorna un booleano
    const isInCart = (id) => {
        const inCart = cart.some(element => element.id === id);
        return inCart;
    };

    // Vacia el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Agregar al carrito
    const addItem = (item) => {
        if(isInCart(item.id)) {
            alert('El producto ya se encuentra en el carrito');
            return;
        }

        setCart([...cart, item]);
        alert('Producto agregado al carrito correctamente 🥳');
    };

    // Eliminar del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert('Producto eliminado del carrito correctamente ✅');
    };

    // Total de items en el carrito
    const getTotalItems = () => {
        return cart.length;
    };

    // Total a pagar
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    // Checkout
    const checkout = () => {
        alert('Su compra ha sido realizada! 🥳');
        clearCart();
        navigate('/');
    };

    const values = {
        clearCart, 
        addItem, 
        removeItem, 
        getTotalItems, 
        getCartTotal, 
        checkout
    };

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>;
}