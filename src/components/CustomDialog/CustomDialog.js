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
import styles from "../../views/ProjectsPage/profilePage.js";
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


  return props.item ? (
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
        {props.item.title}
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
        <Card className={classes.cardCarousel} carousel>
            <Carousel {...settings}>
            <div>
                <img src={require("assets/img/" + props.item.slug + "/1.png")} alt="First slide" className={"slick-image", classes.images} />
            </div>
            <div>
                <img src={require("assets/img/" + props.item.slug + "/2.png")} alt="Second slide" className={"slick-image", classes.images}/>
            </div>
            <div>
                <img src={require("assets/img/" + props.item.slug + "/3.png")} alt="First slide" className={"slick-image", classes.images} />                         
            </div>
            </Carousel>                     
        </Card>
        <p>
            {props.item.desc}
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
  ) : null
}
