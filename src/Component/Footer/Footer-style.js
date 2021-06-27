import { styled, makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

export const MenuItems = styled(MenuItem)({
  paddingLeft: 0,
  paddingBottom: 0,
  paddingTop: 0,
  minHeight: "24px",
  fontSize:"1.2em",
  width: "16em",
  fontFamily: "cursive",
    // fontWeight: "bold",
  "&:hover": {
    color: "#f4cc05",
    backgroundColor:"transparent"
  },
});

export const useStyles = makeStyles((theme) => ({
  footer__root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "20vh",
    textAlign: "left",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer__media: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.background.paper,
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
  },
  bottom__navigation: {
    justifyContent: "left",
    paddingBottom: "10px",
  },
  footer__margin: {
    margin: theme.spacing(0, 2),
    cursor: "pointer",
    justifyContent: 'left',
    [theme.breakpoints.up("xs")]: {
        textAlign: "center",
        justifyContent: 'center'
      },
      [theme.breakpoints.up("sm")]: {
        justifyContent: "left",
        textAlign: "left",
      },
    color: "dimgrey",
  },
  anchor: {
    textDecoration: "none"
  },
}));
