import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
// @material-ui/icons
import WorkOutline from "@material-ui/icons/WorkOutline";
import Event from "@material-ui/icons/Event";
import PlayArrow from "@material-ui/icons/PlayArrow";
import ChevronRight from '@material-ui/icons/ChevronRight';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
const useStyles = makeStyles(styles);

export default function SkillSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>In The Works</h2>
          <h4 className={classes.description}>Here's a summary of what I'm currently working on, which events I'll be at and what I've been listening to while I work. Join me at the next Meetup or <Link to="/contact">connect</Link> to work together!  
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.infoCard}>
            <InfoArea
              title="WIP Project: RMA Admin"
              description={
                <div>
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                   
                    PWA for a local business
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                        
                    Improving employee communication
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                        
                    Improving client management
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                      
                    Frontend: React
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <ChevronRight className={classes.info} />                                      
                    Backend: Firebase
                  </ListItem>
                </List>
                </div>
              }
              icon={WorkOutline}
              iconColor="gray"
              vertical
              secondary
            />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.infoCard}>
            <InfoArea
              title="Meetup With Me"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                   
                    <a href="#" target="_blank">Demo Day (1/12)</a>
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                        
                    <a href="#" target="_blank">Agile (1/7)</a>
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                      
                    <a href="#" target="_blank">React Vegas (1/14)</a>
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <ChevronRight className={classes.info} />                                      
                    <a href="#" target="_blank">SYN Shop (1/20)</a>
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <ChevronRight className={classes.info} />                                   
                    <a href="#" target="_blank">IGDA (1/22)</a>
                  </ListItem>
                </List>
              }
              icon={Event}
              iconColor="gray"
              vertical
              secondary
            />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.infoCard}>
            <InfoArea
              title="Coding To"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                   
                    <a href="https://soundcloud.com/sugiwa/urtha1" target="_blank">Urtha1</a>
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                        
                    <a href="https://soundcloud.com/gavinturek/2am-1" target="_blank">2AM</a>
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                      
                    <a href="https://soundcloud.com/primabeats/june-gloom-1" target="_blank">June Gloom</a>
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <ChevronRight className={classes.info} />                                      
                    <a href="https://open.spotify.com/playlist/1HnrBuUgBYw7E67Rie2vN8" target="_blank">Spotify</a>
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <ChevronRight className={classes.info} />                                   
                    <a href="https://www.youtube.com/watch?v=hHW1oY26kxQ" target="_blank">Lofi Radio</a>
                  </ListItem>
                </List>
              }
              icon={PlayArrow}
              iconColor="gray"
              vertical
              secondary
            />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}