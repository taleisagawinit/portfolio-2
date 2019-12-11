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
          <h4 className={classes.description}>insert paragraph aboout skills blah blah insert paragraph aboout skills blah blah insert paragraph aboout skills blah blah
          insert paragraph aboout skills blah blah insert paragraph aboout skills blah blah
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
            <InfoArea
              title="Frontend"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                   
                    React/Redux
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                        
                    Angular
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                      
                    JavaScript
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <CheckIcon className={classes.info} />                                      
                    HTML
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <CheckIcon className={classes.info} />                                   
                    CSS
                  </ListItem>
                </List>
              }
              icon={Web}
              iconColor="info"
              vertical
            />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
            <InfoArea
              title="Backend"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                   
                    React/Redux
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                        
                    Angular
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                      
                    JavaScript
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <CheckIcon className={classes.info} />                                      
                    HTML
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <CheckIcon className={classes.info} />                                   
                    CSS
                  </ListItem>
                </List>
              }
              icon={Storage}
              iconColor="info"
              vertical
            />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
            <InfoArea
              title="Others"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                   
                    React/Redux
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                        
                    Angular
                  </ListItem>
                  <ListItem className={classes.block}>
                  <CheckIcon className={classes.info} />                                      
                    JavaScript
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <CheckIcon className={classes.info} />                                      
                    HTML
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <CheckIcon className={classes.info} />                                   
                    CSS
                  </ListItem>
                </List>
              }
              icon={Code}
              iconColor="info"
              vertical
            />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
