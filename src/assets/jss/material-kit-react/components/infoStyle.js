import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
} from "assets/jss/material-kit-react.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    position: "relative",
    top: "0",
    float: "left",
    marginTop: "24px",
    
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: "48px",
    height: "48px",
    color: "#fff"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
    // position: relative;
    // bottom: 40px;
  },
  title: {
    color: "#3C4858",
    margin: "0.5rem 0 0.5rem",
    fontSize: "1.2rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "1.125rem"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  iconAbove: {
    position: "absolute",
    top: "-60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "100%",
    textAlign: "center",
    left: "0"
  },
  iconWrapperVertical: {
    //background: "#41a5ff",
    background: primaryColor,
    width: "115px",
    height: "115px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    border: "5px solid white",
    textAlign: "center",
    margin: "auto",
    alignSelf: "center"
    // "@media (max-width: 320px)": {
    //   left: "85px",
    // },
    // "@media (min-width: 425px)": {
    //   left: "140px",
    // },
    // "@media (max-width: 768px)": {
    //   left: "280px",
    // },
    // "@media (max-width: 1024px)": {
    //     left: "85px",
    // }
  },
  iconWrapperVerticalSecondary: {
    //background: "#41a5ff",
    background: "#b773d6",
    width: "115px",
    height: "115px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    border: "5px solid white",
    textAlign: "center",
    margin: "auto",
    alignSelf: "center"

    // "@media (max-width: 320px)": {
    //   left: "85px",
    // },
    // "@media (min-width: 425px)": {
    //   left: "140px",
    // },
    // "@media (max-width: 768px)": {
    //   left: "280px",
    // },
    // "@media (max-width: 1024px)": {
    //     left: "85px",
    // }
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  },
};

export default infoStyle;
