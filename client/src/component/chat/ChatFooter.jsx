import { Box, makeStyles, InputBase } from "@material-ui/core";
import { EmojiEmotions, AttachFile, Mic } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "49px",
    background: "#ededed",

    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    borderTop: "1px solid rgba(0, 0, 0, 0.14)",
    "& > *": {
      margin: 5,
      color: "#919191",
    },
  },
  clipIcon: {
    transform: "rotate(40deg)",
  },
  searchBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    width: "100%",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: 25,

    width: "100%",
    fontSize: 14,
    height: 20,
  },
}));

const Footer = ({ sendText, setValue, value }) => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <EmojiEmotions />
      <AttachFile className={classes.clipIcon} />
      <Box className={classes.searchBox}>
        <InputBase
          placeholder="Nhập tin nhắn"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onKeyPress={(e) => sendText(e)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Box>

      <Mic />
    </Box>
  );
};

export default Footer;
