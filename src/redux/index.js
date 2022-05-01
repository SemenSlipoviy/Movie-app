import {
  FETCH_FILM_DATA,
  GET_FILM_DATA,
  ERROR_FILM_DATA,
  FIND_DATA,
  ADD_GENRE,
  REMOVE_GENRE,
  PAGINATION_DEC,
  PAGINATION_INC,
  FETCH_MOVIES_DATA,
  GET_MOVIES_DATA,
  ERROR_MOVIES_DATA,
  ERROR_GENRE_DATA,
  GET_GENRE_DATA,
  FETCH_GENRE_DATA,
} from "./actions";

const initialStateData = {
  loading: true,
  data: [],
  totalPages: 0,
  error: null,
  find: "",
  selectedGenres: [],
  page: 1,
  dataMovie: [],
  errorMovie: null,
  dataGenre: [],
};

export const dataReducer = (state = initialStateData, action) => {
  const { type, payload } = action;
  

  switch (type) {
    case FETCH_FILM_DATA:
      return {
        ...state,
        loading: false,
      };
    case GET_FILM_DATA:
      return {
        ...state,
        loading: false,
        data: payload.results,
        totalPages: payload.total_pages,
      };
    case ERROR_FILM_DATA:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case FIND_DATA:
      return {
        ...state,
        find: payload,
      };
    case REMOVE_GENRE:
      return {
        ...state,
        loadingGanre: false,
        selectedGenres: state.selectedGenres.filter((item) => item !== payload),
      };
    case ADD_GENRE:
      return {
        ...state,
        loadingGanre: false,
        selectedGenres: [...state.selectedGenres, payload],
      };
    case PAGINATION_DEC:
      return {
        ...state,

        page: state.page === 1 ? 1 : state.page - 1,
      };
    case PAGINATION_INC:
      return {
        ...state,

        page: state.page >= state.totalPages ? 1 : state.page + 1,
      };

    case FETCH_MOVIES_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_DATA:
      return {
        ...state,
        loading: false,
        dataMovie: payload,
      };
    case ERROR_MOVIES_DATA:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case FETCH_GENRE_DATA:
      return {
        ...state,
        loadingGanre: true,
      };
    case GET_GENRE_DATA:
      return {
        ...state,
        loadingGanre: false,
        dataGenre: payload,
      };
    case ERROR_GENRE_DATA:
      return {
        ...state,
        loadingGanre: false,
        error: payload,
      };

    default:
      return state;
  }
};
