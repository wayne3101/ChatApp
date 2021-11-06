import { useContext, useState, useEffect, useRef } from "react";
import { Box, makeStyles } from "@material-ui/core";
import Vectezy from "../../img/Vectezy.jpg";
import Footer from "./ChatFooter";
import { AccountContext } from "../../context/AccountProvider";
import { newMessages, getMessages } from "../../service/api";
import Message from "./Message";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${Vectezy})`,
    backgroundSize: "100%",
  },
  component: {
    height: "81vh",
    overflow: "scroll",
    overflowX: "hidden",
  },
  container: {
    padding: "1px 50px",
  },
});

const Messages = ({ person, conversation }) => {
  const classes = useStyles();

  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState();

  const scrollRef = useRef();

  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  useEffect(() => {
    console.log(socket.current);
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.sender) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let res = await getMessages(conversation._id);

      setMessages(res.data);
    };
    getMessageDetails();
  }, [conversation?._id, person._id, newMessageFlag]);

  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    let code = e.keyCode || e.which;
    if (!value) return;

    if (code === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });

      await newMessages(message);
      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };
  // useEffect(() => {
  //   socket.current.on("getMessage", (data) => {
  //     setIncomingMessage({
  //       sender: data.senderId,
  //       text: data.text,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   const getMessageDetails = async () => {
  //     let data = await getMessages(conversation._id);
  //     setMessages(data);
  //   };
  //   getMessageDetails();
  // }, [conversation?._id, person._id, newMessageFlag]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ transition: "smooth" });
  // }, [messages]);

  // useEffect(() => {
  //   incomingMessage &&
  //     conversation?.members?.includes(incomingMessage.sender) &&
  //     setMessages((prev) => [...prev, incomingMessage]);
  // }, [incomingMessage, conversation]);

  // const receiverId = conversation?.members?.find(
  //   (member) => member !== account.googleId
  // );

  // const sendText = async (e) => {
  //   let code = e.keyCode || e.which;
  //   if (!value) return;

  //   if (code === 13) {
  //     let message = {
  //       sender: account.googleId,
  //       conversationId: conversation._id,
  //       text: value,
  //     };

  //     socket.current.emit("sendMessage", {
  //       senderId: account.googleId,
  //       receiverId,
  //       text: value,
  //     });

  //     await newMessages(message);

  //     setValue("");
  //     setNewMessageFlag((prev) => !prev);
  //   }
  // };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.component}>
        {messages &&
          messages.map((message) => (
            <Box className={classes.container} ref={scrollRef}>
              <Message message={message} />
            </Box>
          ))}
      </Box>
      <Footer sendText={sendText} value={value} setValue={setValue} />
    </Box>
  );
};

export default Messages;
