
import React from 'react';
import {IMAGE_BASE_URL, PRICE} from '../constants';

const MovieCard = ({ movie, onAddToCart }) => {
    return (
        <div className="col-md-6">
            <div>
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{maxWidth: '200px', maxHeight: '300px'}} className="img-fluid" />
                <h4>{movie.title}</h4>
                <p>{movie.release_date}</p>
                <div className="mb-5">
                    <button className="btn btn-success" onClick={() =>
                        onAddToCart({id: movie.id, image: movie.poster_path, title: movie.title, releaseDate: movie.release_date, price: PRICE})}>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
