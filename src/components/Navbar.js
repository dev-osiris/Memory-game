import React from "react";

function Navbar(props){

    return (
        <>
            <nav className="navbar">
                <div className="title">Memory Game</div> 
                <div className="score">
                    <div>Current score: {props.curr_score}</div>
                    <div>Highest score: {props.max_score}</div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;