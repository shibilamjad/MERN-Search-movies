import { useEffect, useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput.jsx/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";

export function Search() {
  const [prodcutsList, setProdcutsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // const API_URL = `https://dummyjson.com/products/search?`;
  const API_URL = `http://localhost:3005/`;

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function clearSearch() {
    setSearchInput("");
    setProdcutsList([]);
  }

  async function fetchProdcut() {
    try {
      const res = await axios(API_URL, {
        params: {
          movieName: searchInput,
        },
      });
      setProdcutsList(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function submitData() {
    try {
      const res = await axios(API_URL, {
        method: "POST",
        data: {
          movieName: searchInput,
        },
      });

      setProdcutsList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput) {
        fetchProdcut();
      }
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  return (
    <>
      <header className="header-container">
        <div className="searchinput-container">
          <SearchInput
            handleChange={handleChange}
            searchInput={searchInput}
            clearSearch={clearSearch}
          />
          <button onClick={submitData}>Submit</button>
        </div>
      </header>

      <div className="searchList-container">
        <SearchList searchInput={searchInput} prodcutsList={prodcutsList} />
      </div>
    </>
  );
}
