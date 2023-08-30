
import React from 'react';


const SearchHistory = ({searchHistory,handleSearchHistory,handleDeleteHistory, handleClearHistory  }) => {
    return (
        <div className="mb-3 mt-3 text-center">
            <h4>Search History</h4>
            {searchHistory.map((s, index) => (
                <div key={index} className="mb-2">
                    <button type="button" className="btn btn-light" style={{marginRight: '10px'}} onClick={() => handleSearchHistory(s.searchUrl)}>
                        {s.search + " " + s.genre + " " + s.year}
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteHistory(index)}>X</button>
                </div>
            ))}
            <button type="button" className="btn btn-danger mt-2" onClick={handleClearHistory}>Clear History</button>
        </div>
    );
};

export default SearchHistory;
