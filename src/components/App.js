import React from "react";
import Element  from "./Element";
import './App.css';
const App = () =>{
    let data= '';
    let[currentdata, newdata] =React.useState(data);
    let buttonpressed = () =>{
        
        // data= "hello programmer i hope you are happy i am so glad";
        newdata(data);
    }
    return (
        <>
            <div className="Wrapper">
                <Element />
                {/* <h1>{currentdata}</h1>
                <button onClick={buttonpressed}>Click Me!</button>  */}
                {/* <h1>Hello world!</h1> */}
            </div>
        </>
    );
}

export default App;