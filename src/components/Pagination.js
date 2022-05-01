import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationDataDec, paginationDataInc } from "../redux/actions";
import { fetchSearch, fetchGenreList, fetchMainList } from "../redux/actions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Pagination = () => {
  const { totalPages, page, find, selectedGenres } = useSelector(
    (state) => state.dataReducer
  );
  const dispatch = useDispatch();

  const countPageNext = () => {
    window.scrollTo(0, 0);
    dispatch(paginationDataInc());
    if (selectedGenres.length > 0) {
      return fetchGenreMovies();
    }
    if (find) {
      return fetchSearchMovies();
    }
    return fetchMain();
  };

  const countPagePrev = () => {
    window.scrollTo(0, 0);
    dispatch(paginationDataDec());
    if (selectedGenres.length > 0) {
      return fetchGenreMovies();
    }
    if (find) {
      return fetchSearchMovies();
    }
    return fetchMain();
  };

  const fetchSearchMovies = () => {
    window.scrollTo(0, 0);
    dispatch(fetchSearch(page, find));
  };

  const fetchGenreMovies = () => {
    window.scrollTo(0, 0);

    dispatch(fetchGenreList(page, selectedGenres));
  };

  const fetchMain = () => {
    dispatch(fetchMainList(page));
  };

  return (
    <div>
      <Stack className="paginat-btn" direction="row" spacing={2}>
        <Button
          variant="contained"
          disabled={page === 1}
          onClick={countPagePrev}
        >
          prev
        </Button>
        <Button
          variant="contained"
          disabled={page >= totalPages}
          onClick={countPageNext}
        >
          next
        </Button>
      </Stack>
    </div>
  );
};

export default Pagination;
