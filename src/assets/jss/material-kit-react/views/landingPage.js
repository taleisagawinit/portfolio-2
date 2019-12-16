import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    paddingTop: "70px",
    ...container
  },
  ...imagesStyle,
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",

    // "@media (max-width: 992px)": {
    //   textAlign: "center"
    // },
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
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 576px)": {
      maxWidth: "540px",
      margin: "0",
      borderRadius: "0",
      boxShadow: "none"
    }
  }
   
};

export default landingPageStyle;
