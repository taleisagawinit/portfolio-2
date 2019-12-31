import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Badge from "components/Badge/Badge.js";
import CustomDialog from "components/CustomDialog/CustomDialog";
import axios from 'axios';
import styles from "./profilePage.js";
import { Button } from "@material-ui/core";
//const projects = require("projects.json");
const useStyles = makeStyles(styles);

export default function ProjectsPage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [projects, setProjects] = React.useState(null);
  const [item, setItem] = React.useState(null);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

  useEffect(() => {
    axios.get('./projects.json').then(resp => {
      setProjects(resp.data)
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  function toggleModal(x) {
    setItem(x);
    setClassicModal(true);
  }

  return (
    <div>
      <Header
        color="transparent"
        brand="talei pono"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Projects</h1>
              <h4>
                Here are some of my recent projects, check out all of them on my Github <Link to="/about">here</Link>
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
            {projects ? projects.sort((a, b)=> a.order-b.order).map(x => (
            <GridItem key={x.id} xs={12} sm={6} md={4}>
              <Card>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <div className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>
                      {x.title}
                      <br />
                      <small className={classes.smallTitle}>{x.subtitle}</small>
                    </h4>
                  </div>
                  <div className={classes.cardContent}>
                    <p className={classes.description}>
                      {x.desc}
                    </p>
                    <Button onClick={() => toggleModal(x)}>Details</Button>
                  </div>
                </GridItem>                
                <CardFooter className={classes.justifyCenter}>
                  {x.tags ? x.tags.map(y => <Badge key={y} className={classes.badge} color="primary">{y}</Badge>) : null}
                </CardFooter>
              </Card>
            </GridItem>
            )) : null}
            </GridContainer>
          </div>
        </div>
        <CustomDialog item={item} open={classicModal} toggle={() => setClassicModal(false)} />
      </div>
      <Footer />
    </div>
  );
}
