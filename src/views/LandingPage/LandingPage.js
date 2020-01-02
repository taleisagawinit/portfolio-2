import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import HelpOutline from '@material-ui/icons/HelpOutline';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from "@material-ui/core/Tooltip";
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "./landingPageStyle";

// Sections for this page
import SkillSection from "./Sections/SkillSection.js";
import LatestSection from "./Sections/LatestSection.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function LandingPage(props) {
  const classes = useStyles();
  //const { ...rest } = props;
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
        // brand={<img src={require("assets/img/taleilogo.png")} style={{width: "50px"}} alt="..."/>}
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        //{...rest}
      />
      {/* "linear-gradient(to right bottom, rgb(220, 61, 198), rgb(112, 137, 229))" */}
      <Parallax>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={8} sm={4} md={3}>
              <img src={require("assets/img/profile.jpg")} className={imageClasses} alt="..."/>
              {/* <Skeleton variant="circle" animation="wave" width={40} height={40} /> */}
            </GridItem>
            <GridItem xs={12} sm={12} md={9} >
              <div className={classes.heading}>
                <span className={classes.intro}><HelpOutline className={classes.iconClass} /></span>
                <h1 className={classes.engTitle}>Hello! I'm Talei</h1> 
                <h1 className={classes.title}>Aloha! 'O Talei ko'u inoa.</h1>
              {/* <div className={classes.intro}> */}
              </div>  
                
              {/* </div> */}
              <h4>
                I'm a web developer from Las Vegas, NV. I'm always learning, coding and going to tech meetups. I'm currently working on a PWA for a local business, while finishing a degree in Computer Science. I'm also learning C# and .NET Core through a work study program with the Las Vegas Valley Water District.  
                {/* <br />
                RevUnit Summer 2019 Tech Scholarship Recipient
                <br />
                LVVWD 2019 ITAD Work Study Program Recipient */}

              </h4>
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
