import React, { useEffect, useState } from "react";
import "./Search.css"
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

// AIzaSyBY0S63VRbzkfLGYchhc3z3_nVJunvYwqk
// b75ffc9ed913d4f79

 
function Search({ hideButtons }) {

  const [{ }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate("/search");
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="searchicon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {
        !hideButtons ? (<div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            GoogleSearch
          </Button>
          <Button type="submit" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>) : (
          <div className="search__buttons" style={{ display: 'none' }}>
            <Button type="submit" onClick={search} variant="outlined">
              GoogleSearch
            </Button>
          </div>
        )
      }


    </form>
  )
}

export default Search
