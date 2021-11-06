import { Box, makeStyles, InputBase } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  component: {
    background: "#ededed",
    paddingBottom: "7px",
    display: "flex",
    alignItems: "center",
    borderBottomRightRadius: 0,
  },
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    margin: "0 13px ",
    width: "100%",
  },
  searchIcon: {
    color: "#919191",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: 50,

    width: "100%",
    fontSize: 14,
    height: 15,
  },
}));

const Search = ({ setText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon fontSize="small" />
        </Box>
        <InputBase
          placeholder="Tìm kiếm..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Search;
