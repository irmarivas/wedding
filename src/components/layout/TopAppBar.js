import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../timer/Timer';
import About from '../pages/About';
import RSVP from '../pages/RSVP';
import Map from '../map/Map';
import {
  HomeTwoTone as HomeIcon,
  FavoriteTwoTone as HeartIcon,
  SendTwoTone as RSVPIcon,
} from '@material-ui/icons/';
import { AppBar, Box, Paper, Tabs, Tab, Typography } from '@material-ui/core';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TopAppBar = () => {
  const [value, setValue] = React.useState(0);
  const { width, height } = useWindowSize;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Confetti
        width={width}
        height={height}
        colors={['#ff007f','red','#ffdee3','#ffd3dc','#fdcbd5','#ffc2d4','#ffb9cb']}
      />
      <AppBar position="static" color="primary">
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="main"
          centered
        >
          <Tab title="When and Where" icon={<HomeIcon />} aria-label="When &amp; Where" {...a11yProps(0)} />
          <Tab title="Who and What" icon={<HeartIcon />} aria-label="Who &amp; What" {...a11yProps(1)} />
          <Tab title="Repondre Sil Vous Plait" icon={<RSVPIcon />} aria-label="R.S.V.P." {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={2}>
        <Timer eventDate={new Date('January 12, 2020 11:30:00')}/>
        <Paper>
          <Box p={1} mt={3}>
            <Typography 
              variant="overline" 
              component="p"
            >
              Irma and Luigi are officially joining forces!
              Welcome to our wedding website, we can’t wait to celebrate our special day with you.
              We’ve created this website as a convenient and interactive way to share all of the important details with you in the lead up to our wedding. 
              You can also read about our love story and check out our registry information too.
              So have fun, take a look around and don’t forget to RSVP!
              Finally, thank you for your ongoing love and support. We are excited to share this day with you and look forward to eating some good food with all our favorite people!
            </Typography>
          </Box>
        </Paper>
        <Map 
          lat={34.0597614}
          long={-118.3447797}
          secondaryLat={34.0596387}
          secondaryLong={-118.3447817}
          ariaLabel="parking and location"
          title="&#8226; Parking and Location &#8226;"
          locationType="Chapel"
          subheader="Albertson Wedding Chapel, 834 S.La Brea Ave., Los Angeles, CA 90036"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>       
        <About />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <RSVP />
      </TabPanel>
    </React.Fragment>
  );
}

export default TopAppBar;
