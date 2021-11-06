import { useEffect, useState, useContext } from "react";
import { getUser } from "../../service/api";
import { Box, makeStyles } from "@material-ui/core";

import { AccountContext } from "../../context/AccountProvider";
//component
import Conversation from "./Conversation";

const useStyles = makeStyles({
  component: {
    height: "81vh",
    overflow: "overlay",
  },
});

const Conversations = ({ text }) => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();
      const filterData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Box className={classes.component}>
      {users.map(
        (user) =>
          user.googleId !== account.googleId && <Conversation user={user} />
      )}
    </Box>
  );
};

export default Conversations;
