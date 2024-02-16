import React, { useState, useEffect } from "react";

export default function Card({ titanNumber }) {
    const [titan, setTitan] = useState(null);

    useEffect(() => {
        fetch("https://api.attackontitanapi.com/titans/")
            .then(response => response.json())
            .then(responseJSON => responseJSON.results)
            .then(titans => {
                setTitan(titans[titanNumber])
            })
    }, []);

    function getImageURL(url) {
        let parts = url.split(".png");
        return parts[0] + ".png";
    }

    return (
        <div>
            {titan && (
                <button>
                    <h2>{titan.name}</h2>
                    <img src={getImageURL(titan.img)} alt={titan.name} />
                </button>
            )}
        </div>
    );
}
