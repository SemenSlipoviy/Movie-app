import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { fetchGenreList } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataGenre, errorDataGenre } from "../redux/actions";
import { addgenre, removegenre } from "../redux/actions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 13,
  height: 13,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 13,
    height: 13,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const GenreList = () => {
  const dispatch = useDispatch();
  const { dataGenre } = useSelector((state) => state.dataReducer);
  const { selectedGenres } = useSelector((state) => state.dataReducer);

  const { page } = useSelector((state) => state.dataReducer);

  // винести в санк
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=bc291702fdc7dc1018dbee0f41a2fcb8&language=en-US`
    )
      .then((response) => response.json())
      .then((dataGenre) => dispatch(getDataGenre(dataGenre.genres)))
      .catch((errorGenre) => dispatch(errorDataGenre(errorGenre)));
  }, []);

  const onGenreChange = (event, id) => {
    !event.target.checked ? dispatch(removegenre(id)) : dispatch(addgenre(id));
  };

  const findGenres = () => {
    dispatch(fetchGenreList(page, selectedGenres));
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Options
          </Button>
          <Menu {...bindMenu(popupState)}>
            <div className="checkbox">
              {dataGenre.map((item) => (
                <div key={item.id}>
                  <BpCheckbox
                    {...label}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 12 } }}
                    className=".checkbox"
                    type="checkbox"
                    onChange={(event) => onGenreChange(event, item.id)}
                  />
                  <label className="label">{item.name}</label>
                </div>
              ))}
              <Link to="/">
                <button className="genre-btn" onClick={findGenres}>
                  Find 
                </button>
              </Link>
            </div>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default GenreList;
