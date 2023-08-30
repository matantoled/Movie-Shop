// Importing required libraries and CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import './App.css';

// Importing components
import SearchPage from './components/SearchPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import MenuBar from './components/MenuBar';
import ErrorPage from "./components/ErrorPage";

import React, { createContext, useContext } from 'react';

// Creating a context to maintain cart state across the application
export const CartContext = createContext(undefined);

// Custom hook to use the Cart context
export const useCart = () => {
    return useContext(CartContext);
};

function App() {
    // State to keep track of the cart
    const [cart, setCart] = useState(0);

    const cartContextValue = {
        cart,
        setCart,
    };

    // Router setup with respective routes and context provider
    return (
        <div className="App">
            <div className="app-background" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-image.jpg'})`
            }}>
                <Router>
                    <CartContext.Provider value={cartContextValue}>
                        <MenuBar />
                        <Routes>
                            <Route path="/" element={<SearchPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    </CartContext.Provider>
                </Router>
            </div>
        </div>
    );
}

export default App;
