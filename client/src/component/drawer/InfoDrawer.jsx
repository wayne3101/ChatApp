import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Profile from "./Profile";

const useStyle = makeStyles({
  header: {
    background: "#6482cd",
    height: 97,
    color: "#fff",
    display: "flex",
    "& > *": {
      marginTop: "auto",
      padding: 15,
    },
  },
  component: {
    background: "#ededed",
    height: "85%",
  },
});

const InfoDrawer = ({ open, setOpen }) => {
  const classes = useStyle();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onClose={handleClose}>
      <Box className={classes.header}>
        <ArrowBack onClick={() => handleClose()} />
        <Typography>Thông tin</Typography>
      </Box>
      <Box className={classes.component}>
        <Profile />
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
