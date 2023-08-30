import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import MovieCard from '../components/MovieCard';
import {DISCOVER_URL} from "../constants";
import {useNavigate} from "react-router-dom";
import {useCart} from "../App";

const SearchPage = () => {
    const { setCart } = useCart();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [searchUrl, setSearchUrl] = useState(DISCOVER_URL);
    const navigate = useNavigate();

    useEffect(() => {
        handleSearch(`${searchUrl}`);
        setPage(1);
        }, [searchUrl]);

    useEffect(() => {
        if (page < 1)
            handleSearch(`${searchUrl}`)
        else
            handleSearch(`${searchUrl}&page=${page}`);
        }, [page]);


    const handleSearch = (searchUrl) => {
        axios.get(searchUrl)
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(error => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }


    const handleAddToCart = (movie) => {

        fetch('/cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then(response => response.text())
            .then(responseText => {
                setCart(Number(responseText));
            })
            .catch((error) => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }


    return (
        <>
            <h1 className="text-center display-4 p-3"><dl><dt>Welcome to TMDB Movie Shop</dt></dl></h1>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3"><br></br><br></br><br></br><br></br>
                        <SearchForm setSearchUrl={setSearchUrl}/>
                    </div>
                    <div className="col-md-9 text-center">
                        <h2>Search Results</h2>
                        <div className="text-center mb-1">Page</div>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <input type="number" className="form-control" style={{ width: '100px' }} min="1" value={page} onChange={e => setPage(Number(e.target.value))} />
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            {movies.map(movie => <MovieCard key={movie.id} movie={movie} onAddToCart={handleAddToCart} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPage;