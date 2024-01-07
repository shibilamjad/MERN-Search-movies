import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import "./SearchInput.css";

export function SearchInput({ handleChange, searchInput, clearSearch }) {
  return (
    <>
      <div className="styled-input">
        <input
          className="input-container"
          type="text"
          placeholder="Search items..."
          value={searchInput}
          onChange={handleChange}
        />
        <div className="styled-svg-search">
          <HiMagnifyingGlass />
        </div>
        {searchInput && (
          <button className="styled-svg-clearbtn" onClick={clearSearch}>
            <HiMiniXMark />
          </button>
        )}
      </div>
    </>
  );
}
