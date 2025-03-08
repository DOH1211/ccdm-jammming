import { useState } from "react";
import styles from "./SearchBar.module.css";
import Button from "../UI/Button";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ search }) {
  const [term, setTerm] = useState("");

  const handleChange = ({ target }) => {
    setTerm(target.value);
  };
  const handleClick = () => {
    search(term);
  };
  return (
    <div className="mb5">
      <input
        className={`${styles.inputSearch} mr1nh`}
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Type Keywords"
      />
      <Button
        className="btn btn-small"
        onClick={handleClick}
        faIcon={faMagnifyingGlass}
        btnText="Search"
      />
    </div>
  );
}

export default SearchBar;
