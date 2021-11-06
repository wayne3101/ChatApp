import { Box, makeStyles, Typography } from "@material-ui/core";
import { Search, MoreVert } from "@material-ui/icons";

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles({
  header: {
    display: "flex",
    height: 34,
    background: "#ededed",
    padding: "10px 16px",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.14)",
  },
  dp: {
    width: 37,
    height: 37,
    borderRadius: "50%",
    padding: "0 2px",
  },
  name: {
    marginLeft: 10,
  },
  status: {
    fontSize: 12,
    marginLeft: 10,
    color: "rgb(0,0,0,0.6)",
  },
  rightContainer: {
    marginLeft: "auto",
    "& > *": {
      padding: 8,
      fontSize: 22,
      color: "#919191",
    },
  },
});

const ChatHeader = () => {
  const classes = useStyles();
  const { person } = useContext(UserContext);

  const { activeUsers } = useContext(AccountContext);

  return (
    <Box className={classes.header}>
      <img src={person.imageUrl} alt="dp" className={classes.dp} />
      <Box>
        <Typography className={classes.name}>{person.name}</Typography>
        <Typography className={classes.status}>
          {activeUsers?.find((user) => user.userId === person.googleId)
            ? "Online"
            : "Offline"}
        </Typography>
      </Box>
      <Box className={classes.rightContainer}>
        <Search />
        <MoreVert />
      </Box>
    </Box>
  );
};

export default ChatHeader;
