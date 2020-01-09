import { title, primaryColor } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
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
    color: "#fc86a3",
    marginRight: "0.25rem"
  },
  infoCard: {
    marginTop: "115px",
    paddingTop: "70px",
    paddingBottom: "30px",
    maxHeight: "400px"
  }
  
};

export default productStyle;
