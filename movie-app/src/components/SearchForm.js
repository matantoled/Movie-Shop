
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { GENRE_LIST_URL, DISCOVER_URL, SEARCH_URL } from '../constants';
import {useNavigate} from "react-router-dom";
import DiscoverForm from "./DiscoverForm";
import SearchHistory from "./SearchHistory";

const SearchForm = ({setSearchUrl}) => {
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(GENRE_LIST_URL)
            .then(res => {
                const genres = res.data.genres;
                setGenres(genres);
            })
            .catch(error => {
                navigate('/error', {state: {errorCode: error.response.status}})
            });
    }, []);


    const handleDiscoverSubmit = (e) => {
        e.preventDefault();
        let url = `${DISCOVER_URL}&with_genres=${genre}&primary_release_year=${year}`;
        setSearchUrl(url)
        if (genre !== "") {
            const g = genres.find(gen => gen.id === Number(genre));
            if (!searchHistory.some(item => item.genre === g.name && item.year === year))
                setSearchHistory([...searchHistory, {search: "", genre: g.name, year: year, searchUrl: url}]);
        } else if (year !== "") {
            if (!searchHistory.some(item => item.year === year && item.genre === ""))
                setSearchHistory([...searchHistory, {search: "", genre: "All Genres", year: year, searchUrl: url}]);
        }
    }

    const handleDeleteHistory = (index) => {
        const newHistory = [...searchHistory];
        newHistory.splice(index, 1);
        setSearchHistory(newHistory);
    }

    const handleClearHistory = () => {
        setSearchHistory([]);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const url = `${SEARCH_URL}&query=${search}`;
        setSearchUrl(url)
        if (!searchHistory.some(item => item.search === search))
            setSearchHistory([...searchHistory, { search: search, genre: "", year: "" , searchUrl: url}]);
    }

    const handleSearchHistory = (url) => {
        setSearchUrl(url)
    }

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <div className="mb-3 mt-3 text-center"><h4>Search Movie</h4>
                    <input className="form-control" required value={search} type="text" placeholder="Search movies..." onChange={e => setSearch(e.target.value)} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
            <br></br><br></br>
            <DiscoverForm handleDiscoverSubmit={handleDiscoverSubmit} genre={genre} setGenre={setGenre} genres={genres} setYear={setYear} />
            <br></br>
            <SearchHistory searchHistory={searchHistory} handleDeleteHistory={handleDeleteHistory} handleClearHistory={handleClearHistory} handleSearchHistory={handleSearchHistory} />
        </>
    );
};

export default SearchForm;

/*
//   {/*<form onSubmit={handleDiscoverSubmit}>*////}
// {/*    <div className="mb-3 mt-3 text-center"><h4>Discover Movies</h4>*/}
// {/*        <select className="form-select" value={genre} onChange={e => setGenre(e.target.value)}>*/}
// {/*            <option value="">All Genres</option>*/}
// {/*            {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}*/}
// {/*        </select>*/}
// {/*    </div>*/}
// {/*    <div className="mb-3 mt-1 d-grid">*/}
// {/*        <div className="text-center mb-1">Type year</div>*/}
// {/*        <input type="number" className="form-control" min="1" placeholder="Year" onChange={e => setYear(e.target.value)} />*/}
// {/*    </div>*/}
// {/*    <div className="d-grid">*/}
// {/*        <button type="submit" className="btn btn-primary">Discover</button>*/}
// {/*    </div>*/}
// {/*</form>*/}


// <div className="mb-3 mt-3 text-center">
//     <h4>Search History</h4>
//     {searchHistory.map((s, index) => (
//         <div key={index} className="mb-2">
//             <button type="button" className="btn btn-light" style={{marginRight: '10px'}} onClick={() => handleSearchHistory(s.searchUrl)}>
//                 {s.search + " " + s.genre + " " + s.year}
//             </button>
//             <button type="button" className="btn btn-danger" onClick={() => handleDeleteHistory(index)}>X</button>
//         </div>
//     ))}
//     <button type="button" className="btn btn-danger mt-2" onClick={handleClearHistory}>Clear History</button>
// </div>