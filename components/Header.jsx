import React from "react"

export default function Header({ score, bestScore }) {
    /*
        Header: 
        This component displays the score/best score. 
        It should receive the current score and the best score as props from the App component and display them.
    */
    return (
        <header>
            <div id="title-container">
                <h1>AOT Memory Game</h1>
            </div>
            <div id="score-container">
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </header>
    );
}