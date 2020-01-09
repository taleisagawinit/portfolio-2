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
import axios from "axios";
const useStyles = makeStyles(styles);

export default function SkillSection() {
  const classes = useStyles();
  const [meetup, setMeetups] = React.useState(null)

  React.useEffect(() => {
    axios.get('./data.json').then(resp => {
      // console.log(resp.data.meetups)
      setMeetups(resp.data.meetups)
    })
  }, [])
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>In The Works</h2>
          <h4 className={classes.description}>Here's a summary for this month of what I'm currently working on, which events I'll be at and what I've been listening to while I work. Join me at the next Meetup or <Link to="/contact">connect</Link> to work together!  
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
                  {meetup ? meetup.sort((a, b)=> a.date-b.date).map(x => 
                    <ListItem className={classes.block}>
                    <ChevronRight className={classes.info} />                   
                      <a href={x.url} target="_blank" rel="noopener noreferrer">{x.title} {x.date !== 0 ? '(1/' + x.date + ')' : ''}</a>
                    </ListItem>
                  ) : null}
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
              title="Listening To"
              description={
                <List className={classes.list}>
                  <div>
                    <iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/476769048&color=%23fc86a3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                  </div>                                 
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