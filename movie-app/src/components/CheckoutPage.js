
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {PRICE} from "../constants";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import {useCart} from "../App";

const CheckoutPage = () => {
    // Using context to get the current cart and its setter function
    const { cart, setCart } = useCart();

    // State variables for form values and error messages
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');

    // Calculate payment
    const payment = cart * PRICE;

    // Using react-router hooks for navigation
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

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

    const handlePurchase = (purchase) => {

        fetch('/purchase/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchase)})
            .then(responseText => {
                if (responseText.status >= 200 && responseText.status < 300) {
                    handleEmptyCart();
                    navigate('/');
                }
                else {
                    navigate('/error', { state: { errorCode: responseText.status } });
                }
            })
            .catch(error => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /^[A-Za-z]+$/;
        let valid = true;

        if (!regex.test(formValues.firstName)) {
            setErrorFirstName('Invalid first name. Only English letters are allowed.');
            valid = false;
        } else {
            setErrorFirstName('');
        }
        if (!regex.test(formValues.lastName)) {
            setErrorLastName('Invalid last name. Only English letters are allowed.');
            valid = false;
        } else {
            setErrorLastName('');
        }

        if (valid) {
            handlePurchase({ ...formValues, payment });
        }
    };

    return (
        <div>
            <h1 className="text-center mt-2 text-warning display-3"><dl><dt>Checkout</dt></dl></h1>
            {cart === 0 ? (
                <h3 className="text-center mt-5">Your cart is empty. <Link to="/">Go back</Link> to add some movies.</h3>
            ) : (
                <CheckoutForm
                    formValues={formValues}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    errorFirstName={errorFirstName}
                    errorLastName={errorLastName}
                    payment={payment}
                />
            )}
        </div>
    );
};

export default CheckoutPage;
