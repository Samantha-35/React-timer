import React from "react";
import ReactDOM, { render } from "react-dom";
import "./css/style.css";
import { Pomodoro } from "./components/Pomodoro";


function App (){
    return ( 
        <div className="App">
            <Pomodoro />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#app")
);

















