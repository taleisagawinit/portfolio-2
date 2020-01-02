import { container, title, cardTitle, mainRaised } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";


const profilePageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    padding: "70px 0",
    ...container
  },
  projContainer: {
    padding: "70px 0",
    zIndex: "12",
    color: "#FFFFFF",
    textAlign: "center",
    ...container
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    maxWidth: "600px",
    fontSize: "1.125rem",
    color: "#3C4858",
    textAlign: "center !important",
    cursor: "pointer",
    zIndex: "10"
  },
  name: {
    marginTop: "-80px"
  },
  images: {
    maxHeight: "300px"
  },
  mobileContent: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100",
    width: "100%",
    height: "100%"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "225px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    //backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')",
    backgroundSize: "110%",
    backgroundPosition: "center",
    transition: "0.5s",
    opacity: 1,
    cursor: "pointer",

    // kana: {
    //   backgroundImage: "url(" + require("assets/img/kana/1.png") + ")"
    // },
  
    "&:hover, &:focus": {
      backgroundImage: "url(" + require("assets/img/1.png") + ")",
      backgroundSize: "120%",

    },
    "&:hover $cardContent, &:focus $cardContent": {
      top: "0",
      opacity: 1
    },
    "&:hover $cardHeader, &:focus $cardHeader": {
      opacity: 0,
    }
  },
  btn: {
    textDecoration: "none",

    "&:hover": {
      background: "rgba(200, 200, 200, 0.2)"
    }
  },
  noUnderline: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "inherit"
    }
  },
  github: {
    marginLeft: "4px"
  },
  cardContent: {
    position: 'absolute',
    //top: "100%",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + require("assets/img/1.png") + ")",
    backgroundSize: "110%",
    opacity: 0,
    transition: "0.5s",
    overflow: "hidden",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer"
  },
  cardHeader: {
    opacity: 1,
    zIndex: 1,
    transition: "0.5s"
  },
  cardTitle: {
    ...cardTitle,
    margin: "0.15rem",
    lineHeight: "inherit"
  },
  smallTitle: {
    color: "#6c757d",
    textTransform: "capitalize"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised,
  ...modalStyle,
  cardCarousel: {
    width: "inherit",
    height: "inherit"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#FFFFFF",
  "-webkit-text-fill-color": "transparent", /* Will override color (regardless of order) */
  "-webkit-text-stroke-width": "1px",
  "-webkit-text-stroke-color": "#FFF"
  },
  selected: {
    marginBottom: "50%",
    overflow: 'auto'
  },
  mobileContent: {
    top: "100%"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  justifyCenter: {
    //paddingBottom: "0.25rem",
    paddingTop: "0",
    paddingRight: "0",
    paddingLeft: "0",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  margin5: {
    margin: "5px"
  }
};

export default profilePageStyle;
