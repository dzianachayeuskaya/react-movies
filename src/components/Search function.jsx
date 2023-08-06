import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.value);
    searchMovies(search, event.target.value);
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          className='validate'
          placeholder='search'
          name='search'
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className='btn search-btn'
          onClick={() => searchMovies(search, type)}>
          Search
        </button>
      </div>
      <div className='filter-wrapper'>
        <label>
          <input
            className='with-gap'
            name='filter'
            type='radio'
            value='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='filter'
            type='radio'
            value='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='filter'
            type='radio'
            value='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
