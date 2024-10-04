import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //get user information from localStorage
  const userData = JSON.parse(localStorage.getItem("token"));

  const storedUser = JSON.parse(localStorage.getItem("authenticate"));
  useEffect(() => {
    setAuthenticated(storedUser);
  }, [storedUser]);

  function handleLogout() {
    localStorage.setItem("authenticate", JSON.stringify(false));
    setAuthenticated(false);
    handleClose();
    navigate("/");
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ListAltIcon sx={{ marginRight: "5px" }} /> TODO
          </Typography>

          {authenticated && (
            <div>
              <IconButton onClick={handleMenuClick}>
                <AccountCircleIcon sx={{ color: "white" }} />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem>Name - {userData.name}</MenuItem>
                <MenuItem>Email - {userData.email}</MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button variant="contained">Logout</Button>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
