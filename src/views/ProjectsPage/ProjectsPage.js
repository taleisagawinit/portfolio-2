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
import Carousel from "react-slick";
import CustomDialog from "components/CustomDialog/CustomDialog";
import axios from 'axios';
import styles from "./profilePage.js";
import Hidden from '@material-ui/core/Hidden';
import Button from "components/CustomButtons/Button.js";

//const projects = require("data.json");
const useStyles = makeStyles(styles);

export default function ProjectsPage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [showMobile, setShowMobile] = React.useState(false);
  const [projects, setProjects] = React.useState(null);
  const [item, setItem] = React.useState(null);
  const [opened, setOpened] = React.useState(new Map());
  let submitSelected = Array.from(opened).filter(x => x[1]).map(y => y[0].id)
  // console.log(submitSelected)
  const { ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 2
  };
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

  //handle toggling the categories
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(opened);
      newSelected.set(id, !opened.get(id));

      setOpened(newSelected);
    },
    [opened],
  );

  useEffect(() => {
    axios.get('./data.json').then(resp => {
      // console.log(resp.data)
      setProjects(resp.data.projects)
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  function toggleModal(x) {
    setItem(x);
    setClassicModal(true);
    //setShowMobile(true)
  }

  return (
    <div>
      <Header
        color="transparent"
        brand=""
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
                Here are some of my recent projects, click one to view its details. Check out everything I've worked on <a href="https://github.com/taleisagawinit/" target="_blank" rel="noopener noreferrer">here</a>
              </h4>
              <br />           
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.projContainer}>
            <GridContainer justify="center">
            {projects ? projects.sort((a, b)=> a.order-b.order).map(x => (
            <GridItem onClick={() => onSelect(x)} key={x.id} xs={12} sm={6} md={4}>
              <Card>
                {/* <GridItem xs={12} sm={12} md={12} className={classNames(classes.itemGrid, submitSelected.includes(x.id) ? classes.selected : null)}> */}
                <GridItem xs={12} sm={12} md={12} className={classNames(classes.itemGrid)} style={{ backgroundImage: "url(" + require("assets/img/" + x.slug + "/1.png") + ")"}}>
                  {/* <div className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>
                      {x.title}
                      <br />
                      <small className={classes.smallTitle}>{x.subtitle}</small>
                    </h4>
                  </div> */}
                  {/* <div onClick={() => toggleModal(x)} className={classNames(classes.cardContent, submitSelected.includes(x.id) ? classes.mobileContent : null)}> */}
                  <div className={classNames(classes.cardContent)}>
                    <p className={classes.description}>
                      {x.desc}
                    </p>
                      <Button onClick={() => toggleModal(x)} color="transparent" className={classes.btn}>
                          Details
                      </Button>
                  </div>
                  {/* <div className={classes.mobileContent}>
                    <Card className={classes.cardCarousel} carousel>
                      <Carousel {...settings}>
                      <div>
                          <img src={require("assets/img/" + x.slug + "/1.png")} alt="First slide" className={"slick-image", classes.images} />
                      </div>
                      <div>
                          <img src={require("assets/img/" + x.slug + "/2.png")} alt="Second slide" className={"slick-image", classes.images}/>
                      </div>
                      <div>
                          <img src={require("assets/img/" + x.slug + "/3.png")} alt="First slide" className={"slick-image", classes.images} />                         
                      </div>
                      </Carousel>                     
                    </Card>
                  </div> */}
                  {x.featured ? 
                  <div className={classes.featured}>                  
                    <p className={classes.featuredContent}>
                    Featured WIP
                    </p>                  
                  </div>
                    : null}
                </GridItem> 
                <h4 className={classes.cardTitle}>
                      {x.title}
                      <br />
                      <small className={classes.smallTitle}>{x.subtitle}</small>
                    </h4>               
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
