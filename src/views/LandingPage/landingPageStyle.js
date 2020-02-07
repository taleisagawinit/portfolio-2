import { container, title, mainRaised } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";


const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  section: {
    zIndex: "12",
    color: "#FFFFFF",
    padding: "70px 0",
    ...container
  },
  ...imagesStyle,
  border: {
    border: "5px solid white"
  },

  intro: {
    // "&:hover $title": {
    //   display: "none",
    //  },
    //position: "relative",
    //left: 0,
    margin: "0 10px",
    // cursor: "pointer",
    // "&:hover": {
    //   opacity: "0.6",
    // },
    // "&:hover + $engTitle, &:hover + $engTitle": {
    //   display: "inline-block",
    //  },
    //  "&:hover + $engTitle + $title, &:focus + $engTitle + $title": {
    //   display: "none",
    //  },
  //   "&:hover + $engTitle": {
  //     display: "none"
  //  }
     

  },
  heading: {
    display: "flex",
    alignItems: "center"
  },
  iconClass: {
    fontSize: "20px",

  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    // textDecoration: "none",
    // "-webkit-text-fill-color": "transparent", /* Will override color (regardless of order) */
    // "-webkit-text-stroke-width": "1px",
    // "-webkit-text-stroke-color": "#FFF",
    
  },
  engTitle: {
    ...title,
    //display: "none",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    // "-webkit-text-fill-color": "transparent", /* Will override color (regardless of order) */
    // "-webkit-text-stroke-width": "1px",
    // "-webkit-text-stroke-color": "#FFF",
      
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  rec1: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: "600px",
    width: "1383px"
  },
  rec2: {
    position: 'absolute',
    top: "50px",
    right: 0 
  },
  rec3: {
    position: 'absolute',
    top: "100px",
    right: 0 
  },
  ...tooltip,
  mainRaised
};

export default landingPageStyle;
