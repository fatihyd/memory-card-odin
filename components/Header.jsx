import React from "react"

export default function Header() {
    return (
        <header>
            <div id="title-container">
                <h1>AOT Memory Game</h1>
                <p>Get points by clicking on an image
                    but do not click on any more than once!
                </p>
            </div>
            <div id="score-container">
                <p>Score: </p>
                <p>Best Score: </p>
            </div>
        </header>
    );
}