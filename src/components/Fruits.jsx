import { useState } from "react";

const SearchFruits = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filterResults = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const highlightMatches = (fruit) => {
    const startIndex = fruit.toLowerCase().indexOf(searchTerm.toLowerCase());
    const endIndex = startIndex + searchTerm.length;

    if (startIndex === -1) {
      return fruit;
    }

    const beforeMatch = fruit.substring(0, startIndex);
    const match = fruit.substring(startIndex, endIndex);
    const afterMatch = fruit.substring(endIndex);

    return (
      <span>
        {beforeMatch}
        <strong>{match}</strong>
        {afterMatch}
      </span>
    );
  };

  return (
    <div className="fruits-container">
      <div className="fruits-box">
        <h2>Fruit Search</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Search here.."
          onChange={handleSearch}
        />
        <div className="results">
          {filterResults.length > 0 ? (
            filterResults.map((fruit, index) => (
              <p key={index} className="fruit-item">
                {highlightMatches(fruit)}
              </p>
            ))
          ) : (
            <p className="no-match">No matches found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFruits;
