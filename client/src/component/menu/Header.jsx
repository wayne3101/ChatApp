import { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import Drawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
});

const Header = () => {
  const { account } = useContext(AccountContext);
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          onClick={() => toggleDrawer()}
          alt="display picture"
          className={classes.avatar}
        />
        <Box className={classes.icons}>
          <Chat />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
