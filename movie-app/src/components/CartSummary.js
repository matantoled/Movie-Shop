import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useCart} from "../App";

const CartSummary = ({ totalCost }) => {

    const navigate = useNavigate();
    const { setCart } = useCart();

    const handleEmptyCart = () => {

        axios.delete('/cart/')
            .then(responseText => {
                if (responseText.data === "Cart emptied") {
                    setCart(0);
                }
            })
            .catch(error => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }

    return (
        <div className="container">
            <h2 className="text-center mb-3">Total Cost: ${totalCost.toFixed(2)}</h2><br></br>
            <div className="d-flex justify-content-center">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger me-4" onClick={handleEmptyCart}>Empty Cart</button>
                    <button type="button" className="btn btn-info me-4"><Link to="/checkout">Checkout</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
