import React from 'react';
import {IMAGE_BASE_URL} from "../constants";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCart} from "../App";

const CartList = ({ cartArray }) => {

    const { setCart } = useCart();
    const navigate = useNavigate();

    const handleRemoveFromCart = (movie) => {

        axios.delete('/cart/' + movie.id)
            .then(responseText => {
                if (responseText.data === "Item removed from cart") {
                    setCart(prevCart => prevCart - 1);
                }
            })
            .catch(error => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }

    return (
        <ul className="list-group">
            {cartArray.map(movie => (
                <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
                    <img src={`${IMAGE_BASE_URL}${movie.image}`} style={{ width: "60px", height: "80px" }} alt={movie.title} className="img-fluid" />
                    {movie.title} |
                    Release Date: {movie.releaseDate} |
                    Price: {movie.price}$
                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(movie)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default CartList;
