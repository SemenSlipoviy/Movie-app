export const FETCH_FILM_INFO = "FETCH_FILM_INFO";
export const GET_FILM_INFO = "GET_FILM_INFO";
export const ERROR_FILM_INFO = "ERROR_FILM_INFO";

export const fetchInfoData = () => ({
  type: FETCH_FILM_INFO,
});

export const getInfoData = (data) => ({
  type: GET_FILM_INFO,
  payload: data,
});
export const errorInfoData = (error) => ({
  type: ERROR_FILM_INFO,
  payload: error,
});

export const fetchFilmInfo = (id) => {
  return (dispatch) => {
    dispatch(fetchInfoData());

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bc291702fdc7dc1018dbee0f41a2fcb8&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => dispatch(getInfoData(data)))
      .catch((error) => errorInfoData(error));
  };
};
