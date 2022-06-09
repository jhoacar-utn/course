import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import { logo_pokeApi, pages, settings } from "../utils";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sx_stiles_movile, sx_stiles_desktop } from "./const";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>( null);
  const {isLogin}= React.useContext(AuthContext)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);
    navigate(`${page.toLocaleLowerCase()}`);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={sx_stiles_desktop}
          >
            <img src={logo_pokeApi} alt="logo" width={150} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem  onClick={ () => handleCloseNavMenu('login')}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem  onClick={ () => handleCloseNavMenu('register')}>
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={sx_stiles_movile}
          >
            <img src={logo_pokeApi} alt="logo" width={150} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!isLogin ?  pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            )) : 
            <>
            <Button
                // onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Logout
              </Button>
            <Button
                onClick={() => handleCloseNavMenu('profiler')}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Profiler
              </Button>
            
            </>
            
            }
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
