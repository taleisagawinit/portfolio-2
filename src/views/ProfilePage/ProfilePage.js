import React, { useEffect } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Badge from "components/Badge/Badge.js";
import CustomDialog from "components/CustomDialog/CustomDialog";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Carousel from "react-slick";
import axios from 'axios';
import styles from "assets/jss/material-kit-react/views/profilePage.js";
//const projects = require("projects.json");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [projects, setProjects] = React.useState(null);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const projectsArr = [1, 2, 3, 4, 5, 6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  useEffect(() => {
    axios.get('./projects.json').then(resp => {
      console.log(resp.data)
      setProjects(resp.data)
    })
  }, [])

  function toggleModal() {
    setClassicModal(!classicModal)
  }

  return (
    <div>
      <Header
        color="transparent"
        brand="talei pono"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small image={require("assets/img/bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Projects</h1>
              <h4>
                Check out my projects
              </h4>
              <br />           
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.projContainer}>
            <GridContainer>
            {projects ? projects.map(x => (
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img src={require("assets/img/bb8.jpg")} onClick={() => setClassicModal(true)} alt="..." className={imageClasses} />
                  
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {x.name}
                  <br />
                  <small className={classes.smallTitle}>Subtitle</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Short summary of project here. Click project to open modal of more details (photos, demo, code). TODO: Add hover effects and content
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  {x.tags ? x.tags.map(y => <Badge color="primary">{y}</Badge>) : null}
                </CardFooter>
              </Card>
              <CustomDialog item={x} open={classicModal} toggle={() => setClassicModal(false)} />
            </GridItem>
            
            )) : null}
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
