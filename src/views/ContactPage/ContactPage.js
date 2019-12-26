import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Footer from "components/Footer/Footer.js";
//check that form is valid
import validator from 'validator'

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: ''
  })
  const [success, setSuccess] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [msgSuccess, setMsgSuccess] = useState(false)
  const [error, setError] = useState(false)
  const classes = useStyles();
  const { ...rest } = props;

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  function handleSubmit(e) {
    if (validator.isEmail(values.email) && !validator.isEmpty(values.message)) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", values })
      })
        .then(() => { setSuccess(true); setTimeout(() => setSuccess(false), 3000) })
        .catch(err => alert(err));

    } else {
      setError(true); setTimeout(() => setError(false), 3000) 
    }
    //TODO: add logic to add success/error/validation messages
    clearTimeout();
    e.preventDefault();
  } 

  function checkEmail() {
    validator.isEmail(values.email) ? setEmailSuccess(false) : setEmailSuccess(true)
  }

  function checkMsg() {
    !validator.isEmpty(values.message) ? setMsgSuccess(false) : setMsgSuccess(true)
  }
  //TODO: add checkName function to check validation on blur

  function handleChange(e) { 
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Header
        color="transparent"
        brand="talei pono"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Contact</h1>
              <h4>
                Feedback? Comments? Hiring? Send me a message to connect!
              </h4>
              <br />           
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.projContainer}>
            <GridContainer>  
            <GridItem xs={12} sm={12} md={12}>
            { success ? (
              <SnackbarContent
                message={
                  <span>
                    <b>Success!</b> Your message has been sent. Thank you for reaching out! 
                  </span>
                }
                close
                color="success"
                icon={Check}
              /> ) : null }
              {error ? (
              <SnackbarContent
                message={
                  <span>
                    <b>Oh no!</b> Your message could not be sent, 
                    please try again later.
                  </span>
                }
                close
                color="warning"
                icon={Warning}
              /> ) : null }
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  //onBlur={() => console.log(values.name)}
                  // error={}
                  // success={}
                  value={values.name}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  //error={emailSuccess}
                  //success={true}
                  onBlur={() => checkEmail()}
                  value={values.email}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                //error={msgSuccess}
                //success={true}
                onBlur={() => checkMsg()}
                value={values.message}
                onChange={handleChange}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button type="submit" color="primary">Send Message</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
            </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  
}
