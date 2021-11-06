import { useState, useEffect, useContext } from "react";
import { Box } from "@material-ui/core";
import ChatHeader from "./ChatHeader";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import Messages from "./Messages";
import { getConversation } from "../../service/api";

const Chat = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHeader />
      <Messages conversation={conversation} person={person} />
    </Box>
  );
};

export default Chat;
