import { container, title, cardTitle, mainRaised } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";


const contactStyle = {
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
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
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
  // "-webkit-text-fill-color": "transparent", /* Will override color (regardless of order) */
  // "-webkit-text-stroke-width": "1px",
  // "-webkit-text-stroke-color": "#FFF"
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
    justifyContent: "center !important"
  },
  margin5: {
    margin: "5px"
  },
  textLeft: {
    textAlign: "left"
  },
  formMargin: {
    marginLeft: "10px",
    marginRight: "10px"
  }
  
};

export default contactStyle;
