import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";

import { useContext, useState } from "react";
import { clientId } from "../../constant/data";

import { AccountContext } from "../../context/AccountProvider";

import { GoogleLogout } from "react-google-login";
import Drawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  menuItem: {
    fontSize: 14,
    padding: "15px 60px 5px 24px",
    color: "#4A4A4A",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "5px!important",
    },
  },
});

const HeaderMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setAccount } = useContext(AccountContext);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  const onLogoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setAccount("");
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={(() => handleClose(), toggleDrawer)}
        >
          Thông tin
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Đăng xuất"
            onLogoutSuccess={onLogoutSuccess}
            className={classes.logout}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default HeaderMenu;
