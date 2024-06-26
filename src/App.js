import "./styles.css";
import Button from "./Button";
import SearchBar from "./SearchBar";

export default function App() {
  return (
    <div className="App">
      <div>
        <Button />
      </div>
      <div className="search-container">
        <SearchBar />
      </div>
    </div>
  );
}
