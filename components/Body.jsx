import React from "react"
import Card from "./Card"

export default function Body() {
    let titanCards = [];
    const NUMBER_OF_TITANS = 9;
    for (let i = 0; i < NUMBER_OF_TITANS; i++) {
        titanCards.push(<Card titanNumber={i} />);
    }

    return (
        <div id="card-grid">
            {titanCards}
        </div>
    );
}