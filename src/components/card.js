import React from 'react';
import './card.css';
let Card = () =>{
    return (
        <>
        <div className='wrapper'>
            <div>
                <img src= "https://picsum.photos/200/300"/>
            </div>
            <div>
                <h1>Random Image</h1>
                <button>Watch Now</button>
            </div>
        </div>
        </>
    );
}

export default Card;