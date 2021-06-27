import React from "react";
import { useStyles, MenuItems } from "./Footer-style";
import {
  CssBaseline,
  Typography,
  Container,
  ListItemIcon,
  Grid
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";



export default function Footer() {
  const classes = useStyles();
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" className={classes.footer__margin}>
        {`Copyright © ${new Date().getFullYear()} Online store company. All rights reserved`}
      </Typography>
    );
  }
  return (
    <div className={`${classes.footer__root}`}>
      <Grid className={classes.footer__media}>
        <Container maxWidth="lg">
          <ListItemIcon>
            <FacebookIcon className={classes.footer__margin} />
            <TwitterIcon className={classes.footer__margin} />
            <InstagramIcon className={classes.footer__margin} />
          </ListItemIcon>
        </Container>
      </Grid>
      <Grid className={`${classes.footer} ${classes.sectionDesktop}`}>
        <Container maxWidth="lg">
          <div className={classes.bottom__navigation}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=surajcoldplay91@gmail.com" target="_blank" className={classes.anchor}><MenuItems className={classes.footer__margin} >surajcoldplay91@gmail.com</MenuItems></a>
            <MenuItems className={classes.footer__margin} >+91 000000000</MenuItems>
            <MenuItems className={classes.footer__margin} >+91 111111111</MenuItems>
            {/* <MenuItems className={classes.footer__margin} >Contact Us</MenuItems> */}
          </div>
          <Copyright />
        </Container>
      </Grid>
      {/* <Grid className={`${classes.footer} ${classes.sectionMobile}`}>
        <Container maxWidth="lg">
          <div className={classes.bottom__navigation}>
            <MenuItems className={classes.footer__margin} >Privacy Statement</MenuItems>
            <MenuItems className={classes.footer__margin} >Terms of Use</MenuItems>
            <MenuItems className={classes.footer__margin} >Site Map</MenuItems>
            <MenuItems className={classes.footer__margin} >Contact Us</MenuItems>
          </div>
          <Copyright />
        </Container>
      </Grid> */}
    </div>
  );
}
