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
    color: "#fff",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    // backgroundImage: "linear-gradient(to right top, #ffc7a5, #ffb59f, #ffa2a4, #ff90b1, #fd83c6, #ef7ed3, #dd7ce1, #c47cee, #b47cf3, #a27cf7, #8e7cfb, #757dfe)",
    backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')",
    backgroundSize: "100%",
    backgroundPosition: "center",
    transition: "0.5s",
    //opacity: 1,
    // "&:after": {
    //   background: "rgba(0, 0, 0, 0.2)",
    //   position: "absolute",
    //   // zIndex: "1",
    //   width: "100%",
    //   height: "100%",
    //   display: "block",
    //   left: "0",
    //   top: "0",
    //   content: "''"
    // },
  
    "&:hover, &:focus": {
      //backgroundImage: "url(" + require('assets/img/bb8.jpg') + ")",
      //backgroundImage: "linear-gradient(to right top, #808080a6, #00000054)"
      backgroundSize: "110%",
      //opacity: 0.2

    },
    "&:hover $cardContent, &:focus $cardContent": {
      top: "0",
      opacity: 1
    },
    "&:hover $cardHeader, &:focus $cardHeader": {
      opacity: 0.2
    }
  },

  cardContent: {
    position: 'absolute',
    top: "100%",
    left: "0",
    width: "100%",
    height: "100%",
    //background: "rgba(0,0,0,0.6)",
    background: "#7089e5b8",
    opacity: 0,
    transition: "0.5s",
    overflow: "hidden",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  cardHeader: {
    opacity: 1,
    zIndex: 1,
    transition: "0.5s"
  },
  cardTitle,
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
    justifyContent: "center",
    flexWrap: "wrap",
  },
  margin5: {
    margin: "5px"
  }
};

export default profilePageStyle;
