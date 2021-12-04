import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--black bg-white'
                 type="search" 
                 placeholder='search...' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
