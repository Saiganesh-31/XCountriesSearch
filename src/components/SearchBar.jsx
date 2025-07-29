import React from "react";

function SearchBar ({ searchItem }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f8f8",
            padding: "10px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
        }}>
            <input type="text" style={{
                width: "800px",
                height: "25px"
            }}
            onChange={searchItem}
            />
        </div>
    );
}

export default SearchBar;