import React from 'react';

// Creating a component that will represent each square on my 
// board.
const Square = (props) => {

    return (
        <>
            <button className="square" onClick={props.onClick} >
                {props.value}
            </button>
        </>
    )
}
export default Square;