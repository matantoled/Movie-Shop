
import React from 'react';


const DiscoverForm = ({handleDiscoverSubmit, genre, setGenre, genres, setYear}) => {
    return (
        <form onSubmit={handleDiscoverSubmit}>
            <div className="mb-3 mt-3 text-center"><h4>Discover Movies</h4>
                <select className="form-select" value={genre} onChange={e => setGenre(e.target.value)}>
                    <option value="">All Genres</option>
                    {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
            </div>
            <div className="mb-3 mt-1 d-grid">
                <div className="text-center mb-1">Type year</div>
                <input type="number" className="form-control" min="1" placeholder="Year" onChange={e => setYear(e.target.value)} />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Discover</button>
            </div>
        </form>
    );
};

export default DiscoverForm;
