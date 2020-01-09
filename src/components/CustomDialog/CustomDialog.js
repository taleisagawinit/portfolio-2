import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Link } from 'react-router-dom'
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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Hidden from '@material-ui/core/Hidden';
import GitHubIcon from '@material-ui/icons/GitHub';
import Skeleton from '@material-ui/lab/Skeleton';
import Tooltip from "@material-ui/core/Tooltip";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function CustomDialog(props) {
    //const { loading = false } = props;
    const [loading, setLoading] = React.useState(true);
    //Add skeleton for images while props are loading
    const classes = useStyles();
    const settings = {
        lazyLoad: 'onDemand',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,

    };

    React.useEffect(() => {
        //setTimeout(() => setLoading(false), 2000);
        setTimeout(function(){ setLoading(false) }, 2000);
        //clearTimeout();
    }, [])


  return props.item ? (
    <Hidden xsDown>
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
            { loading ? (
                <Skeleton animation="wave" width={190} style={{backgroundColor: "#708ce524"}}/>
                ) :
                props.item.title
            }
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
        >
            <Card className={classes.cardCarousel} carousel>
                { loading ? (
                <Skeleton variant="rect" animation="wave" width={490} height={290} style={{backgroundColor: "#708ce524"}}/>
                ) :
                <Carousel {...settings}>
                    {props.item.imgs ? props.item.imgs.map(x => x ? (
                        <div key={props.item.id}>
                            <img src={require("assets/img/" + props.item.slug + "/" + x)} alt="First slide" className={"slick-image"} />
                        </div>
                    ) : <Skeleton variant="rect" animation="wave" width={490} height={290} style={{backgroundColor: "#708ce524"}}/>
                    ) : null}
                </Carousel>        
                }             
            </Card>
            <p>
            { loading ? (
                <Skeleton animation="wave" width={290} style={{backgroundColor: "#708ce524"}}/>
                ) :
                props.item.desc + props.item.fullDesc
            }
            </p>       
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
            {props.item.url ? (
        <Button color="transparent" className={classes.btn}>
            <a className={classes.noUnderline} href={props.item.url} target="_blank" rel="noopener noreferrer">
            View Source <GitHubIcon className={classes.github} />
            </a>
        </Button>
            ) :
                <Tooltip
                id="instagram-tooltip"
                title="This repo is private"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={classes.tooltip}
                >
                <Button color="transparent" disabled className={classes.btn}>
                    View Source <GitHubIcon className={classes.github} />
                </Button>
                </Tooltip>
           }
        <Button
            onClick={props.toggle}
            className={classes.btn}
            color="danger"
            simple
        >
            Close
        </Button>
        </DialogActions>
    </Dialog> 
    </Hidden>
  ) : null
}
