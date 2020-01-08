/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Link to="/" className={classes.dropdownLink}>
              About
            </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link to="/projects" className={classes.dropdownLink}>
            Projects
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link to="/contact" className={classes.dropdownLink}>
            Contact
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="taleipono@gmail.com"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="mailto:taleipono@gmail.com"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " far fa-envelope"} />
            <Hidden mdUp>
              <div style={{marginLeft: "10px"}}>taleipono@gmail.com</div>
            </Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="@taleisagawinit"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/taleisagawinit/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fab fa-github"} />
            <Hidden mdUp>
              <div style={{marginLeft: "10px"}}>@taleisagawinit</div>
            </Hidden>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Talei Sagawinit"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/taleisagawinit/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin-in"} />
            <Hidden mdUp>
              <div style={{marginLeft: "10px"}}>Talei Sagawinit</div>
            </Hidden>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
