import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Carousel from "react-slick";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function CustomDialog(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <Dialog
        classes={{
        root: classes.center,
        paper: classes.modal
        }}
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.toggle}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
    >
        <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        >
        {props.item.name}
        <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={props.toggle}
        >
            <Close className={classes.modalClose} />
        </IconButton>
        </DialogTitle>
        <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
        >
        <Card carousel>
            <Carousel {...settings}>
            <div>
                <img src={require("assets/img/bb8.jpg")} alt="First slide" className="slick-image" />
            </div>
            <div>
                <img
                src={require("assets/img/bb8.jpg")}
                alt="Second slide"
                className="slick-image"
                />
            </div>
            <div>
                <img src={require("assets/img/bb8.jpg")} alt="First slide" className="slick-image" />                         
            </div>
            </Carousel>                     
        </Card>
        <p>
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at the
            coast of the Semantics, a large language ocean. A small
            river named Duden flows by their place and supplies it
            with the necessary regelialia.
        </p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
        <Button color="transparent" simple>
            Nice Button
        </Button>
        <Button
            onClick={props.toggle}
            color="danger"
            simple
        >
            Close
        </Button>
        </DialogActions>
    </Dialog>
  );
}
