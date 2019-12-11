import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>In The Works</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={require("assets/img/bb8.jpg")} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3>Meetup With Me</h3>
                    <h4>
                      <LocationOn className="slick-icons" />
                      Las Vegas, NV
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={require("assets/img/bb8.jpg")}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h3>Latest Project</h3>
                    <h4>
                      <LocationOn className="slick-icons" />
                      A Web app for a local business
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={require("assets/img/bb8.jpg")} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3>Currently Coding To</h3>
                    <h4>
                      <LocationOn className="slick-icons" />
                      Lofi playlist subtitle
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
