import React from "react"

export default function Header({ score, bestScore }) {
    return (
        <header>
            <div id="title-container">
                <h2>AOT Memory Game</h2>
            </div>
            <div id="score-container">
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </header>
    );
}