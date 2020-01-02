import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Storage from "@material-ui/icons/Storage";
import Web from "@material-ui/icons/Web";
import CheckIcon from '@material-ui/icons/Check';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/skillStyle.js";
const useStyles = makeStyles(styles);

export default function SkillSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Skills</h2>
          <h4 className={classes.description}>I'm readily learning more and more to add to my tech stack! I especially enjoy writing apps in React, but I have experience in these other frameworks and languages:  
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.infoCard}>
            <InfoArea
              title="Frontend"
              description={
                <div>
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                   
                    HTML
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                        
                    CSS/SCSS
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                      
                    jQuery
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <CheckIcon className={classes.info} />                                      
                    React/Redux + React Native
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <CheckIcon className={classes.info} />                                   
                    Angular
                  </ListItem>
                </List>
                </div>
              }
              icon={Web}
              iconColor="primary"
              vertical
            />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.infoCard}>
            <InfoArea
              title="Backend"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                   
                    Node + Express
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                        
                    mySQL
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                      
                    mongoDB
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <CheckIcon className={classes.info} />                                      
                    AWS (Cognito, Amplify + S3)
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <CheckIcon className={classes.info} />                                   
                    Firebase
                  </ListItem>
                </List>
              }
              icon={Storage}
              iconColor="primary"
              vertical
            />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.infoCard}>
            <InfoArea
              title="Others"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                   
                    REST APIs
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                        
                    UX + UI Design
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                      
                    Agile Methodologies
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <CheckIcon className={classes.info} />                                      
                    Wordpress
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <CheckIcon className={classes.info} />                                   
                    Unit Testing
                  </ListItem>
                </List>
              }
              icon={Code}
              iconColor="primary"
              vertical
            />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
