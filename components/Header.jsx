import React from "react"

export default function Header({ score, bestScore }) {
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