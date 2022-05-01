import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainList, fetchSearch } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const MainFilm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data, find, page } = useSelector(
    (state) => state.dataReducer
  );
  let imageNotFound = `https://icon-library.com/images/not-found-icon/not-found-icon-28.jpg`;

  useEffect(() => {
    if (find) {
      return fetchSearchMovies();
    }
    return dispatch(fetchMainList());
  }, []);

  const fetchSearchMovies = () => {
    window.scrollTo(0, 0);
    dispatch(fetchSearch(page, find));
  };

  const add = (film) => {
    localStorage.setItem(film.id, JSON.stringify(film));
  };

  const remove = (film) => {
    localStorage.removeItem(film.id, JSON.stringify(film));
  };

  return (
    <>
      <div className="film-cards">
        {!loading &&
          data.map((film) => (
            <div key={film.id} className="film-card__wrap">
              <div
              
                onClick={() => {
                  navigate(`/film/${film.id}`);
                }}
                
              >
                <img
                  className="film-card__poster"
                  alt="img"
                  src={
                    film.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${film.backdrop_path}`
                      : imageNotFound
                  }
                />
                <h1 className="poster-title">{film.title}</h1>
              </div>

              <button
                className="favorete-btn"
                onClick={() => {
                  localStorage[film.id] ? remove(film) : add(film);
                }}
              >
                {localStorage[film.id] ? <span>remove</span> : <span>add</span>}
              </button>
            </div>
          ))}
      </div>

      <Pagination></Pagination>
    </>
  );
};

export default MainFilm;
