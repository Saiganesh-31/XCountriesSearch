import React from "react";
import "../countryCard.css";

function CardComponent ({ name, flag, abbr }) {
    return (
        <div className="countryCard">
            <img src={flag} alt={abbr} width="100px" height="100px" />
            <p>{name}</p>
        </div>
    );
}

export default CardComponent;