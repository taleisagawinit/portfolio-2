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

  const [validName,setValidName] = useState(null);
  const [validEmail,setValidEmail] = useState(null);
  const [validMsg,setValidMsg] = useState(null);

  const [invalidName,setInvalidName] = useState(null);
  const [invalidEmail,setInValidEmail] = useState(null);
  const [invalidMsg,setInvalidMsg] = useState(null);

  const [nameHelper,setNameHelper] = useState('');
  const [emailHelper,setEmailHelper] = useState('');
  const [msgHelper,setMsgHelper] = useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const [name,setNameHelper] = useState('');
  // const [emailHelper,setEmailHelper] = useState('');
  // const [msgHelper,setMsgHelper] = useState('');

 
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    if (validator.isAlpha(name) && validator.isEmail(email) && !validator.isEmpty(message)) {
      setValidName(true); setNameHelper(''); setInvalidName(false)
      setValidEmail(true); setEmailHelper(''); setInValidEmail(false)
      setValidMsg(true); setMsgHelper(''); setInvalidMsg(false)

      const data = { "form-name": "contact", name, email, message }
    
      fetch("/", {
        method: "POST",
        // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
        body: encode(data)
      })
        .then(() => setStatus('success'))
        .catch(error => setStatus('error'));
    } else {
      if (validator.isAlpha(name) && !validator.isEmpty(name)) { 
        setValidName(true); setNameHelper(''); setInvalidName(false)
      } else { 
        setValidName(false); setNameHelper('Provide a name using alpha chars only'); setInvalidName(true)
      }
  
      if (validator.isEmail(email)) {
        setValidEmail(true); setEmailHelper(''); setInValidEmail(false)
       } else { 
        setValidEmail(false); setEmailHelper('Must be a valid email address'); setInValidEmail(true)
       }
      
      if (!validator.isEmpty(message)) {
        setValidMsg(true); setMsgHelper(''); setInvalidMsg(false)
       } else { 
         setValidMsg(false); setMsgHelper('Please add your message'); setInvalidMsg(true)
       }
    }
  
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
            <GridItem xs={12} sm={12} md={12}>
              { status == 'success' ? 
              <SnackbarContent
                message={ 
                  <span>
                    <b>Your message has been sent.</b> Thank you for reaching out! 
                  </span>
                }
                close
                color={"success"}
                icon={Check}
              /> 
              : status == 'error' ? 
              <SnackbarContent
                message={ 
                  <span>
                    <b>Oh no! Your message could not be sent.</b> Please try again later or reach out on LinkedIn 
                  </span>
                }
                close
                color={"danger"}
                icon={Warning}
              /> : null
              }
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <form onSubmit={handleSubmit}>
            <GridContainer className={classes.formMargin}>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name*"
                  id="name"
                  //onBlur={() => console.log(values.name)}
                  // error={}
                  // success={}
                  error={invalidName}
                  success={validName}
                  value={name}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  helperText={nameHelper}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email*"
                  id="email"
                  //error={emailSuccess}
                  //success={true}
                  // onBlur={() => checkEmail()}
                  error={invalidEmail}
                  success={validEmail}
                  value={email}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  helperText={emailHelper}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Your Message*"
                id="message"
                //error={msgSuccess}
                //success={true}
                // onBlur={() => checkMsg()}
                error={invalidMsg}
                success={validEmail}
                value={message}              
                onChange={handleChange}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
                helperText={msgHelper}
              />
              </GridItem>
              {/* <GridContainer justify="center"> */}
                <GridItem xs={12} sm={12} md={12} className={classes.textLeft}>
                  <Button type="submit" color="primary">Send Message</Button>
                </GridItem>
              {/* </GridContainer> */}
            </GridContainer>
          </form>
          <form hidden onSubmit={handleSubmit}>
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
