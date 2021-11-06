import { Box } from "@material-ui/core";
import emptychat from "../../img/emptychat.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#f8f9fa",
    height: "87%",
    padding: "50px 0",
    textAlign: "center",
  },
  img: {
    width: 450,
    opacity: "70%",
  },
});

const EmptyChat = () => {
  const url = emptychat;

  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <img src={url} alt="empty" className={classes.img} />
    </Box>
  );
};

export default EmptyChat;
