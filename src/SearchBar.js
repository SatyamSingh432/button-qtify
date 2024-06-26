import { Search } from "lucide-react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div>
        <input
          className="search-input"
          placeholder="Search a song of your choice"
        />
      </div>
      <div>
        <button className="search-button">
          <Search />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
