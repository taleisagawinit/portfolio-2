import React from "react";
import "./styles.css"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SkillSection from "./Sections/SkillSection.js";
import LatestSection from "./Sections/LatestSection.js";
import SocialSection from "./Sections/SocialSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="talei pono"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/confetti.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={6} sm={4} md={3}>
              <img src={require("assets/img/bb8-square.jpg")} className={imageClasses} alt="..."/>
            </GridItem>
            <GridItem xs={12} sm={6} md={9}>
            <Tooltip
              id="instagram-tooltip"
              title="Hello! I'm Talei"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
                <h1 className={classes.title}>Hello World!</h1>
            </Tooltip>
              <h4>
                I'm Talei. I'm a fullstack developer from Las Vegas, NV. I'm always learning, coding and going to tech meetups. I'm currently learning C# and the .NET framework with an app development team. I'm also working on a PWA for a local business, check out the details here
              </h4>
              <br />           
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div id="test" className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SkillSection />
          <LatestSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
