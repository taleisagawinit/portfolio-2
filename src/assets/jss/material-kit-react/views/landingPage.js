import { container, title, mainRaised } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";


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
  ...tooltip,
  mainRaised
};

export default landingPageStyle;
