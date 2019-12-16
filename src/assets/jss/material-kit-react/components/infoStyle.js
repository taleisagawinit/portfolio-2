import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
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
    //background: grayColor,
    //borderRadius: "50%",
    //width: "4rem",
    //height: "4rem"
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
    height: "48px"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title: {
    color: "#3C4858",
    margin: "0.5rem 0 0.5rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "16px"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "71px",
    height: "71px"
  }
};

export default infoStyle;
