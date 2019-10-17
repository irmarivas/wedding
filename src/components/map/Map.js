import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import { LocalParkingTwoTone, RoomTwoTone } from '@material-ui/icons';
import keys from '../../assets/keys/keys';
export default class Map extends React.Component {

  state = {
    viewport: {
      width: 700,
      height: 400,
      latitude: 34.0597614,
      longitude: -118.3447797,
      zoom: 17
    }
  };

  render() {
    return (
      <Grid container justify="center">
        <Card>
          <CardHeader
            aria-label="parking and location"
            disableTypography={false}
            title="Parking and Location"
            subheader="Albertson Wedding Chapel, 834 S.La Brea Ave., Los Angeles, CA 90036"
            titleTypographyProps={
              {
                variant:'overline'
              }
            }
          />
          <CardContent>
            <ReactMapGL
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
              mapboxApiAccessToken={keys.mapboxApiAccessToken}
              mapStyle="mapbox://styles/mapbox/streets-v8"
            >
             <Marker
              latitude={34.0597614}
              longitude={-118.3447797}
              offsetLeft={0}
              offsetTop={0}
             >
              <LocalParkingTwoTone />
             </Marker>
             <Marker
              latitude={34.0596387}
              longitude={-118.3447817}
              offsetLeft={0}
              offsetTop={0}
             >
              <RoomTwoTone />
              <Typography variant="overline">
                Chapel
              </Typography>
             </Marker>
            </ReactMapGL>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
