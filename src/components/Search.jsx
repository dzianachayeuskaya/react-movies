import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        filter: '',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.filter);
        }
    };
    handleFilter = (event) => {
        this.setState(
            () => ({ [event.target.name]: event.target.value }),
            () => this.props.searchMovies(this.state.search, this.state.filter)
        );
    };
    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        name='search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.filter
                            )
                        }>
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
                            onChange={this.handleFilter}
                            checked={this.state.filter === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='filter'
                            type='radio'
                            value='movie'
                            onChange={this.handleFilter}
                            checked={this.state.filter === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='filter'
                            type='radio'
                            value='series'
                            onChange={this.handleFilter}
                            checked={this.state.filter === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
