import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

function Countries ({ searchCountry }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
        .then(response => {
            return response.json();
        })
        .then(countryDetails => {
            setCountries(countryDetails);
        })
        .catch(error => {
            console.error("Error fetching the countries details: ", error);
        })
    }, []);

    const filteredCountries = countries.filter((country) => 
        country.common.toLowerCase().includes(searchCountry.toLowerCase())
    );

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px"
        }}>
            {filteredCountries.length > 0 && (
                filteredCountries.map((country) => (
                    <CardComponent name={country.common} flag={country.png} alt={country.common}/>
                ))
            )}
        </div>
    );
}

export default Countries;