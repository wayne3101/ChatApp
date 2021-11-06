import Login from "./account/Login";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
import React, { useContext } from "react";
import ChatBox from "./ChatBox";
import background from "../img/background.jpg";

const useStyles = makeStyles({
  comp: { background: "#" },
  component: {
    // background: "#DCDCDC",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  loginHeader: {
    height: 80,
    background: "#034b9f",
    boxShadow: "none",
  },
  header: {
    height: 115,
    background: "#034b9f",
    boxShadow: "none",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.comp}>
      <Box className={classes.component}>
        <AppBar className={account ? classes.header : classes.loginHeader}>
          <Toolbar></Toolbar>
        </AppBar>
        {account ? <ChatBox /> : <Login />}
      </Box>
    </Box>
  );
};

export default Messenger;
