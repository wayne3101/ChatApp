import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../../constant/data";
import { addUser } from "../../service/api";
import LogoRabbit from "../../img/LogoRabbit.png";

//Code
const useStyles = makeStyles({
  component: { paddingLeft: 150, height: "80%" },
  lefComponent: {
    paddingLeft: 256,
  },
  qrCode: {
    height: 264,
    width: 264,
    padding: "50px 50px 20px 100px",
  },
  title: {
    fontSize: 28,
    marginLeft: 50,
    fontFamily:
      "Segoe UI, Helvetica Neue, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Code",
    fontWeight: 300,
    alignItems: "center",
    paddingBottom: "20px",
  },
  list: {
    "& > *": {
      fontSize: 18,
      padding: 0,
      marginBottom: 15,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
  login: {
    boxShadow: "none",
    border: "1px solid rgba(3, 6, 7, 0.14)",
  },
});

const style = {
  dialogPaper: {
    height: "70%",
    width: "100%",
    marginTop: "2%",
    boxShadow: "none",
    borderRadius: 20,
    // maxHeight: "100%",
    maxWidth: "48%",
  },
};

const Login = ({ classes }) => {
  const classname = useStyles();

  const { account, setAccount } = useContext(AccountContext);

  const loginSuccess = async (res) => {
    console.log("Login SuccessFul!", res.profileObj);
    setAccount(res.profileObj);
    addUser(res.profileObj);
  };
  const loginFailure = () => {
    console.log("Login Failed!");
  };

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <img src={LogoRabbit} className={classname.qrCode} />
        <Typography className={classname.title}>
          Chào mừng đến với Rabbit Talk
        </Typography>
        <Box style={{ position: "relative" }}>
          <Box style={{ position: "absolute", left: "21%" }}>
            <GoogleLogin
              clientId={clientId}
              buttonText="Đăng nhập bằng Google"
              isSignedIn={true}
              onSuccess={loginSuccess}
              onFailure={loginFailure}
              cookiePolicy={"single_host_origin"}
              className={classname.login}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
