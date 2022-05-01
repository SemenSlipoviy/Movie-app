export const FETCH_FILM_DATA = "FETCH_FILM_DATA";
export const GET_FILM_DATA = "GET_FILM_DATA";
export const ERROR_FILM_DATA = "ERROR_FILM_DATA";
export const FIND_DATA = "FIND_DATA";
export const REMOVE_GENRE = "REMOVE_GENRE";
export const ADD_GENRE = "ADD_GENRE";
export const PAGINATION_DEC = "PAGINATION_DEC";
export const PAGINATION_INC = "PAGINATION_INC";
export const FETCH_GENRE_DATA = "FETCH_GENRE_DATA";
export const GET_GENRE_DATA = "GET_GENRE_DATA";
export const ERROR_GENRE_DATA = "ERROR_GENRE_DATA";
export const FETCH_MOVIES_DATA = "FETCH_MOVIES_DATA";
export const GET_MOVIES_DATA = "GET_MOVIES_DATA";
export const ERROR_MOVIES_DATA = "ERROR_MOVIES_DATA";
export const PAGINATION_ONE = "PAGINATION_ONE";
export const FETCH_INFO = "FETCH_INFO_ID";

export const fetchData = () => ({
  type: FETCH_FILM_DATA,
});

export const getData = (data) => ({
  type: GET_FILM_DATA,
  payload: data,
});

export const errorData = (error) => ({
  type: ERROR_FILM_DATA,
  payload: error,
});

export const fetchFindData = (searchFind) => ({
  type: FIND_DATA,
  payload: searchFind,
});

export const fetchDataMovies = () => ({
  type: FETCH_MOVIES_DATA,
});

export const getDataMovies = (dataMovie) => ({
  type: GET_MOVIES_DATA,
  payload: dataMovie,
});

export const errorDataMovies = (errorMovie) => ({
  type: ERROR_MOVIES_DATA,
  payload: errorMovie,
});

export const removegenre = (dataRemove) => ({
  type: REMOVE_GENRE,
  payload: dataRemove,
});

export const addgenre = (dataAdd) => ({
  type: ADD_GENRE,
  payload: dataAdd,
});

export const paginationDataDec = () => ({
  type: PAGINATION_DEC,
});
export const paginationDataInc = () => ({
  type: PAGINATION_INC,
});

export const fetchDataGenre = () => ({
  type: FETCH_GENRE_DATA,
});

export const getDataGenre = (dataGenre) => ({
  type: GET_GENRE_DATA,
  payload: dataGenre,
});

export const errorDataGenre = (errorGenre) => ({
  type: ERROR_GENRE_DATA,
  payload: errorGenre,
});

export const fetchSearch = (page, find = "") => {
  return (dispatch, getState) => {
    dispatch(fetchData());

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bc291702fdc7dc1018dbee0f41a2fcb8&language=en-US&query=${find}&page=${
        getState().dataReducer.page
      }&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)))
      .catch((searchError) => dispatch(errorData(searchError)));
  };
};

export const fetchGenreList = (page, selectedGenres) => {
  return (dispatch, getState) => {
    dispatch(fetchData());
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=bc291702fdc7dc1018dbee0f41a2fcb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        getState().dataReducer.page
      }&with_genres=${selectedGenres.join(
        ","
      )}&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)))
      .catch((error) => dispatch(errorData(error)));
  };
};

export const fetchMainList = () => {
  return (dispatch, getState) => {
    dispatch(fetchData());

    fetch(`
       https://api.themoviedb.org/3/movie/popular?api_key=bc291702fdc7dc1018dbee0f41a2fcb8&language=en-US&page=${
         getState().dataReducer.page
       }`)
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)))
      .catch((error) => errorData(error));
  };
};
