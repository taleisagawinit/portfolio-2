import { title, infoColor } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    paddingTop: "70px",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  info: {
    color: infoColor,
    marginRight: "0.25rem"
  },
  
};

export default productStyle;
