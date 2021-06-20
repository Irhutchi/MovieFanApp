import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

const SiteHeader = ( { history }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
    const menuOptions = [
      { label: "Home", path: "/" },
      { label: "Favorites", path: "/movies/favorites" },
      { label: "Option 3", path: "/" },
      { label: "Option 4", path: "/" },
    ];
  
    const handleMenuSelect = (pageURL) => {
      history.push(pageURL);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    return (
      <>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              TMDB Client
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Explore movies and TV shows
            </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuOptions.map((opt) => (
                      <MenuItem
                        key={opt.label}
                        onClick={() => handleMenuSelect(opt.path)}
                      >
                        {opt.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <>
                  {menuOptions.map((opt) => (
                    <Button
                      key={opt.label}
                      color="inherit"
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </Button>
                  ))}
                </>
              )}
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </>
    );
  };
  
  export default withRouter(SiteHeader);