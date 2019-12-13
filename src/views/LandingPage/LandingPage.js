import React from "react";
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
      <Parallax image={require("assets/img/confetti.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={6} sm={4} md={3}>
              <img src={require("assets/img/bb8-square.jpg")} className={imageClasses} alt="..."/>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Hello! I'm Talei</h1>
              <h4>
                Add short summary here
              </h4>
              <br />           
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SkillSection />
          <LatestSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
