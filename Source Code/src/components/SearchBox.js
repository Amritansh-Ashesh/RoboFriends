import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {

    return(
        <div className='sb tc f3 pa3'>
            <input 
                onChange={searchChange}
                type='search' 
                placeholder='Search for Robots' />
        </div>
    );
}

export default SearchBox;