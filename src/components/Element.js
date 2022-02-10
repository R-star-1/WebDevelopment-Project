import React from "react";
import './Element.css';
import Card from "./card";
const Element = () =>{
    let state= '';
    let[currentstate, updateState]= React.useState(state);
    let LinkPressed = () =>{
        updateState(true);
        updateState(<Card/>);
        // setTimeIn(10000);
    }


    return(
        <>
            
            <div className="Header">
                
                <h1> Web Developmement </h1>
                <ul>
                    <a href="" onClick={LinkPressed} >
                        <li>Home</li>
                    </a>
                    <a href=""> 
                        <li>Courses</li>
                    </a>
                    <a href="">
                        <li>Get Cards</li>
                    </a>
                    <a href=""> 
                        <li>Practice</li>
                    </a>
                </ul>
               
            </div>
            <br></br>
            <div className="collections">
                <h1>{currentstate}</h1>
                <h1>{currentstate}</h1>
                <h1>{currentstate}</h1>
                <h1>{currentstate}</h1>
                <h1>{currentstate}</h1>
                <h1>{currentstate}</h1>
            </div>
            
        </>
    );
}
export default Element;