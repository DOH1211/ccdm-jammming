import { useState } from "react";

function SearchBar({ search }) {
  const [term, setTerm] = useState("");

  const handleChange = ({ target }) => {
    setTerm(target.value);
  };
  const handleClick = () => {
    search(term);
  };
  return (
    <div>
      <h2>Search Bar</h2>
      <input type="text" value={term} onChange={handleChange} />

      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
