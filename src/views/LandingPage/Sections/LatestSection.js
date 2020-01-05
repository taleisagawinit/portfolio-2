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
                // <List className={classes.list}>
                  // <ListItem className={classes.block}>
                  // <ChevronRight className={classes.info} />                   
                  //   <a href="https://www.meetup.com/Las-Vegas-Developers/events/dzkhdrybccbpb/" target="_blank" rel="noopener noreferrer">Demo Day (1/11)</a>
                  // </ListItem>
                //   <ListItem className={classes.block}>
                //   <ChevronRight className={classes.info} />                                        
                //     <a href="https://www.meetup.com/AgileNV/events/266465324/" target="_blank" rel="noopener noreferrer">Agile (1/15)</a>
                //   </ListItem>
                //   <ListItem className={classes.block}>
                //   <ChevronRight className={classes.info} />                                      
                //     <a href="https://www.meetup.com/ReactVegas/" target="_blank" rel="noopener noreferrer">React Vegas</a>
                //   </ListItem>
                //   <ListItem className={classes.block}>  
                //   <ChevronRight className={classes.info} />                                      
                //     <a href="https://www.meetup.com/Las-Vegas-UX-UI/events/shpfmrybccbxb/" target="_blank" rel="noopener noreferrer">UX/UI (1/18)</a>
                //   </ListItem>
                //   <ListItem className={classes.block}>     
                //   <ChevronRight className={classes.info} />                                   
                //     <a href="https://www.meetup.com/IGDA-Las-Vegas-Game-Development-Meetup/events/vbfxsqybccbkb/" target="_blank" rel="noopener noreferrer">IGDA (1/7)</a>
                //   </ListItem>
                // </List>
                <List className={classes.list}>
                  {meetup ? meetup.sort((a, b)=> a.date-b.date).map(x => 
                    <ListItem className={classes.block}>
                    <ChevronRight className={classes.info} />                   
                      <a href={x.url} target="_blank" rel="noopener noreferrer">{x.title} (1/{x.date})</a>
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
              title="Coding To"
              description={
                <List className={classes.list}>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                   
                    <a href="https://soundcloud.com/sugiwa/urtha1" target="_blank" rel="noopener noreferrer">Urtha1</a>
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                        
                    <a href="https://soundcloud.com/gavinturek/2am-1" target="_blank" rel="noopener noreferrer">2AM</a>
                  </ListItem>
                  <ListItem className={classes.block}>
                  <ChevronRight className={classes.info} />                                      
                    <a href="https://soundcloud.com/primabeats/june-gloom-1" target="_blank" rel="noopener noreferrer">June Gloom</a>
                  </ListItem>
                  <ListItem className={classes.block}>  
                  <ChevronRight className={classes.info} />                                      
                    <a href="https://open.spotify.com/playlist/1HnrBuUgBYw7E67Rie2vN8" target="_blank" rel="noopener noreferrer">Spotify</a>
                  </ListItem>
                  <ListItem className={classes.block}>     
                  <ChevronRight className={classes.info} />                                   
                    <a href="https://www.youtube.com/watch?v=hHW1oY26kxQ" target="_blank" rel="noopener noreferrer">Lofi Radio</a>
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