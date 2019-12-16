import { container, title, mainRaised } from "assets/jss/material-kit-react.js";

const workStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  projContainer: {
    padding: "70px 0",
    zIndex: "12",
    color: "#FFFFFF",
    textAlign: "center",
    ...container
  },
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#FFFFFF"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised
};

export default workStyle;
