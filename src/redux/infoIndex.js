import { FETCH_FILM_INFO } from "./actionInfo";
import { GET_FILM_INFO } from "./actionInfo";
import { ERROR_FILM_INFO } from "./actionInfo";

const initialStateData = {
  loading: true,
  dataInfo: {},
  error: null,
};

export const dataInfoReducer = (state = initialStateData, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_FILM_INFO:
      return {
        ...state,
        loading: false,
      };
    case GET_FILM_INFO:
      return {
        ...state,
        loading: false,
        dataInfo: payload,
      };
      case ERROR_FILM_INFO:
        return {
          ...state,
          loading: false,
          error: payload,
        };
    default:
      return state;
  }
};
