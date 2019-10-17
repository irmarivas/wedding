import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../timer/Timer';
import About from '../pages/About';
import Map from '../map/Map';
import {
  HomeTwoTone as HomeIcon,
  FavoriteTwoTone as HeartIcon,
  SendTwoTone as RSVPIcon,
} from '@material-ui/icons/';
import { AppBar, Box, Grid, Tabs, Tab, Typography } from '@material-ui/core';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
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
      <TabPanel value={value} index={0}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Timer eventDate={new Date('January 12, 2020 11:30:00')}/>
          </Grid>
          <Grid item xs={12}>
            <Map 
              lat={34.0597614}
              long={-118.3447797}
              secondaryLat={34.0596387}
              secondaryLong={-118.3447817}
              message="Parking is free, on-site with the option of street parking, at your discretion."
              ariaLabel="parking and location"
              title="Parking and Location"
              locationType="Chapel"
              subheader="Albertson Wedding Chapel, 834 S.La Brea Ave., Los Angeles, CA 90036"
        />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        RSVP
      </TabPanel>
    </React.Fragment>
  );
}

export default TopAppBar;
