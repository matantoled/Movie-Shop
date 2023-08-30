// Importing required libraries
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import { useCart } from "../App";

// MenuBar component
function MenuBar() {
    // Using context to get the current cart and its setter function
    const { cart, setCart } = useCart();

    // Using react-router hooks for navigation and location
    const location = useLocation();
    const navigate = useNavigate();

    // useEffect to fetch cart size on component mount
    useEffect(() => {
        axios.get('/cart/cartSize/')
            .then(response => setCart(Number(response.data)))
            .catch(error => {
                navigate('/error', { state: { errorCode: error.response.status } })
            });
    }, []);

    // Returning navigation bar JSX
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid d-flex justify-content-start">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link mx-3 ${location.pathname === '/' ? 'navbar-brand' : ''}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className={`nav-link mx-3 ${location.pathname === '/cart' ? 'navbar-brand' : ''}`}>Cart ({cart})</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/checkout" className={`nav-link mx-3 ${location.pathname === '/checkout' ? 'navbar-brand' : ''}`}>Checkout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default MenuBar;
