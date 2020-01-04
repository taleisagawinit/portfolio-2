import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
//check that form is valid
import validator from 'validator'

import styles from "./contactStyle.js";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();

  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [file, setFile] = useState({});

 
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  // function checkEmail() {
  //   validator.isEmail(values.email) ? setEmailSuccess(false) : setEmailSuccess(true)
  // }

  // function checkMsg() {
  //   !validator.isEmpty(values.message) ? setMsgSuccess(false) : setMsgSuccess(true)
  // }
  //TODO: add checkName function to check validation on blur
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white"
        }}
        //{...rest}
      />
      <Parallax small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Contact</h1>
              <h4>
                Feedback? Comments? Hiring? Send me a message to connect! I'm also available on <Link to="/about">LinkedIn</Link>
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
            {/* <GridItem xs={12} sm={12} md={12}>
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
            </GridItem> */}
            <GridItem xs={12} sm={12} md={12}>
            {/* <form onSubmit={handleSubmit}>
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
          </form> */}
          <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
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
