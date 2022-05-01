import React from "react";


const Favorits = () => {
  const arr = Object.keys({ ...localStorage }).map((item) =>
    JSON.parse(localStorage.getItem(item))
  );

  return (
    <>
      <div className="film-cards">
        {arr.map((item) => (
          <div className="film-card__wrap" key={item.id}>
            <img
              className="film-card__poster"
              alt="img"
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            />
            <h1 className=" favorite-title">{item.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorits;
