import React from "react";

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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Carousel from "react-slick";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
//const projects = require("projects.json");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
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
                Check out my recent apps for clients and personal projects.
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
            {projectsArr.map(x => (
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img src={require("assets/img/bb8.jpg")} onClick={() => setClassicModal(true)} alt="..." className={imageClasses} />
                  <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>title</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <Card carousel>
                      <Carousel {...settings}>
                        <div>
                          <img src={require("assets/img/bb8.jpg")} alt="First slide" className="slick-image" />
                        </div>
                        <div>
                          <img
                            src={require("assets/img/bb8.jpg")}
                            alt="Second slide"
                            className="slick-image"
                          />
                        </div>
                        <div>
                          <img src={require("assets/img/bb8.jpg")} alt="First slide" className="slick-image" />                         
                        </div>
                      </Carousel>                     
                    </Card>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia.
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                      Nice Button
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Project Title 
                  <br />
                  <small className={classes.smallTitle}>Subtitle</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Short summary of project here. Click project to open modal of more details (photos, demo, code). TODO: Add hover effects and content
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Badge color="primary">HTML</Badge>
                  <Badge color="primary">CSS</Badge>
                  <Badge color="primary">JavaScript</Badge>
                </CardFooter>
              </Card>
            </GridItem>
            ))}
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
