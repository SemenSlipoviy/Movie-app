import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmInfo } from "../redux/actionInfo";

export const FilmInfo = () => {
  const dispatch = useDispatch();
  const { dataInfo } = useSelector((state) => state.dataInfoReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFilmInfo(id));
  }, []);

  return (
    <div>
      <>
        <div className="film-info-container">
          <img
            alt="qwe"
            src={`https://image.tmdb.org/t/p/w500/${dataInfo.backdrop_path}`}
          />

          <div className="film-info-description">
            <h1>{dataInfo.title}</h1>
            <p>{dataInfo.overview}</p>
            <p>{dataInfo.release_date}</p>
          </div>
        </div>
      </>
    </div>
  );
};
export default FilmInfo;


