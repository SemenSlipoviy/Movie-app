import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getData,
  fetchData,
  errorData,
  fetchFindData,
  fetchSearch,
} from "../redux/actions";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const dispatch = useDispatch();
  const { find, page } = useSelector((state) => state.dataReducer);

  const findsearch = () => {
    window.scrollTo(0, 0);
    dispatch(fetchSearch(page, find));
  };

  return (
    <Paper
      className="input"
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        type="text"
        onChange={(e) => dispatch(fetchFindData(e.target.value))}
      />
      <Link to="/">
        <IconButton
          type="reset"
          disabled={!find}
          onClick={findsearch}
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon type="submit" />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default Search;
