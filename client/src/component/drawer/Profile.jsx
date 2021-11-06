import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  displayPicture: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "18px",
  },
  nameContainer: {
    background: "#FFFFFF",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
    "& :first-child": {
      fontSize: 22,
      color: "#1b4397",
    },
    "& :last-child": {
      color: "#4A4A4A",
      padding: "14px 0",
    },
  },
  description: {
    padding: "10px 20px 28px 30px",
    "& > *": {
      fontSize: 12,
      color: "rgba(0,0,0,0.4)",
    },
  },
});

const Profile = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);

  return (
    <>
      <Box className={classes.imageContainer}>
        <img
          src={account.imageUrl}
          alt="dp"
          className={classes.displayPicture}
        />
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>Tên người dùng</Typography>
        <Typography>{account.name}</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>Đây không phải tên đăng nhập hoặc mã của bạn</Typography>
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>Giới thiệu</Typography>
        <Typography>không có gì để nói nhe</Typography>
      </Box>
    </>
  );
};

export default Profile;
