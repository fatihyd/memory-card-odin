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
        <div className="card">
            {titan && (
                <>
                    <img src={getImageURL(titan.img)} alt={titan.name} />
                    <p><strong>{titan.name}</strong></p>
                </>
            )}
        </div>
    );
}
