import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import { LocalParkingTwoTone, RoomTwoTone } from '@material-ui/icons';
import keys from '../../assets/keys/keys';
import 'mapbox-gl/src/css/mapbox-gl.css'

const useStyles = makeStyles(theme => ({
  spacing: {
    marginTop: '5%'
  },
}));

const Map = (
  { lat, 
    long,
    secondaryLat,
    secondaryLong,
    ariaLabel,
    locationType,
    message,
    subheader,
    title,
    zoom,
    footer
  }
) => {
  const classes = useStyles();
  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: 400,
    latitude: lat,
    longitude: long,
    zoom: zoom
  });

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
      <Card className={classes.spacing} title={title}>
        <CardHeader
          aria-label={ariaLabel}
          disableTypography={false}
          title={title}
          subheader={subheader}
          titleTypographyProps={
            {
              variant:'overline'
            }
          }
        />
        <CardContent>
          <Grid container justify="center">
          <ReactMapGL
            { ...viewport }
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={keys.mapboxApiAccessToken}
            mapStyle="mapbox://styles/mapbox/streets-v10"
          >
            <Marker
            latitude={lat}
            longitude={long}
            offsetLeft={0}
            offsetTop={0}
            >
            <LocalParkingTwoTone aria-label="parking" title="parking" alt="parking" color="action" />
            <Typography variant="overline">
              Parking
            </Typography>
            </Marker>
            <Marker
            latitude={secondaryLat}
            longitude={secondaryLong}
            offsetLeft={0}
            offsetTop={0}
            >
            <RoomTwoTone color="secondary" />
            <Typography variant="overline">
              {locationType}
            </Typography>
            </Marker>
          </ReactMapGL>
          </Grid>
        </CardContent>
        <Divider />
        <Box p={1}>
        <Typography component="p" variant="overline">
         {footer}
        </Typography>
        </Box>
      </Card>
      </Grid>
    </Grid>
  );
}

export default Map;
