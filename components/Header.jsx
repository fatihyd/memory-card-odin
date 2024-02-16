import React from "react"

export default function Header() {
    return (
        <header>
            <div id="title-container">
                <h1>AOT Memory Game</h1>
            </div>
            <div id="score-container">
                <p>Score: </p>
                <p>Best Score: </p>
            </div>
        </header>
    );
}