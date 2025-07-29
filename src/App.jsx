import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Countries from './components/Countries';

function App() {
const [searchCountries, setSearchCountries] = useState("");

const handleSearch = (e) => {
  setSearchCountries(e.target.value)
}
  return (
    <div>
      <SearchBar searchItem={handleSearch} />
      <Countries searchCountry={searchCountries} />
    </div>
  );
}

export default App;
