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
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SkillSection from "./Sections/SkillSection.js";
import LatestSection from "./Sections/LatestSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.border
  );

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="talei pono"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white"
        }}
        {...rest}
      />
      {/* "linear-gradient(to right bottom, rgb(220, 61, 198), rgb(112, 137, 229))" */}
      <Parallax>
        <div className={classes.container}>
          <GridContainer justify="center">
          <GridItem xs={6} sm={4} md={3}>
              <img src={require("assets/img/profile.jpg")} className={imageClasses} alt="..."/>
            </GridItem>
            <GridItem xs={12} sm={12} md={9}>
            <Tooltip
              id="instagram-tooltip"
              title="Hello! I'm Talei"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
                <h1 className={classes.title}>Hi! I'm Talei</h1>
            </Tooltip>
              <h4>
                I'm a web developer from Las Vegas, NV. I'm always learning, coding and going to tech meetups. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                {/* I'm currently learning C# and the .NET framework to create desktop apps. I'm also working on a PWA for a local business, check out the details and more below. TODO: Finish summary  */}
                {/* --- RevUnit Summer 2019 Tech Scholarship --- LVVWD 2019 IT App Development Work Study Program */}

              </h4>
              <br />           
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>
      <div id="test" className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <SkillSection />
          <LatestSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
