//This is called a pure functions, so function components
import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba br4 b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange= {searchChange} //This is just and HTML attribue, so now it will activate the function the moment I make a change
            />
        </div>
    )
}

export default Searchbox;