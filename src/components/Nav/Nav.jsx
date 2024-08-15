import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CustomBtn from "../ui/Button";
import MenuItem from "@mui/material/MenuItem";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { useState, useCallback } from "react";
const pages = ["Features", "Pricing", "About Us", "Contact Us"];
function NavBar() {
  const [darkBg, setBg] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  //setting the scroll function
  const handleScroll = useCallback(() => {
    setBg(window.scrollY > 100);
  }, []);
  window.onscroll = () => {
    handleScroll();
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        padding:{md:'0 10%', xs:'0'},margin:'auto',
        bgcolor: darkBg ? "var(--primary-color)" : "transparent",
        transition: "all ease 0.3s",
        boxShadow: 0,
        color: darkBg ? "var(--primary-light)" : "var(--primary-color)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LunchDiningIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: darkBg ? "var(--primary-light)" : "var(--primary-color)",
              textDecoration: "none",
            }}
          >
            FLYDINE
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
                "& ul": { bgcolor: "var(--primary-light)" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "var(--primary-color)",
                    "&:hover": {
                      bgcolor: "var(--primary-color)",
                      color: "var(--primary-light)",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "1rem",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LunchDiningIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: darkBg ? "var(--primary-light)" : "var(--primary-color)",
              textDecoration: "none",
            }}
          >
            FLYDINE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: darkBg
                    ? "var(--primary-light)"
                    : "var(--primary-color)",
                  "&:hover": {
                    opacity: 0.75,
                    bgcolor: "transparent",
                    
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CustomBtn content="Get Started" darkBg={darkBg} csx={{display:{xs:'none',sm:'block'}}}></CustomBtn>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
