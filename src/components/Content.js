import React from "react";
import Card from "./Card.js";

//takes a list of card and displays them all using map()
function Content(props){

    return (
        <div className="card-container">
            {
                props.cards.map((card, index) => {
                    return( 
                        <Card key={index} name={card.name} image={card.image} clickCard={props.clickCard}/>
                    );
                }) 
            } 
        </div>
    )
}

export default Content;