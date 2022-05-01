import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GenreList from "./GenreList";
import { useNavigate, Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const onMainPage = () => {
   window.location.href = "/";
  };

  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <GenreList />
          </Typography>
          <Search />
          <Link className="header-favorite-btn link" to="/favorits" >
            <Button  variant="contained">favorits</Button>
          </Link>
          <Link to="/" className="link">
            <Button type="reset" variant="contained" onClick={onMainPage}>
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
