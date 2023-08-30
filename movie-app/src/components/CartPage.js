import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {PRICE} from "../constants";
import axios from "axios";
import CartList from './CartList';
import CartSummary from './CartSummary';
import {useCart} from "../App";

const CartPage = () => {

    // Using context to get the current cart
    const { cart } = useCart();

    // State variable for the cart array
    const [cartArray, setCartArray] = useState([]);

    // Calculate total cost
    const totalCost = cart * PRICE;

    // Using react-router hooks for navigation
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/cart/')
            .then(response => {
                setCartArray(response.data);
            })
            .catch(error => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }, [cart]);


    return (
        <div>
            <h1 className="text-center mt-2 text-danger display-3"><dl><dt>Shopping Cart</dt></dl></h1>
            {cartArray.length === 0 ? (
                <h3 className="text-center mt-5">Your cart is empty. <Link to="/">Go back</Link> to add some movies.</h3>
            ) : (
                <>
                    <h2 className="text-center mt-5 mb-5">List of Movies in your cart</h2>
                    <div className="container">
                        <CartList cartArray={cartArray} />
                        <br></br>
                        <CartSummary totalCost={totalCost} />
                    </div>
                    <br></br>
                </>
            )}
        </div>
    );
};

export default CartPage;
