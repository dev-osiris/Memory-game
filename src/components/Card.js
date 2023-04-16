//Actually displalys the individual cards
import React from "react";

function Card(props){
    return (
        <>
            <div className="card" onClick={props.clickCard}>
                <img className="image" src={require(`./images/${props.name}.jpg`)} alt={props.name} />
                <h1 className="card-name">{props.name}</h1>
            </div>
        </>
    )
}

export default Card;