import React from "react";

export default function Card({ titan, id, handleClick }) {
    // the img url from the api call is incorrect
    // this function corrects it
    function getImageURL(url) {
        let parts = url.split(".png");
        return parts[0] + ".png";
    }

    return (
        <div className="card" id={id} onClick={() => handleClick(id)}>
            {titan && (
                <>
                    <img src={getImageURL(titan.img)} alt={titan.name} />
                    <p><strong>{titan.name}</strong></p>
                </>
            )}
        </div>
    );
}
