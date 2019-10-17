import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardHeader, CardContent, CardMedia, Divider, CircularProgress } from '@material-ui/core';
import keys from '../../assets/keys/keys';
export default class Map extends React.Component {

  state = {
    viewport: {
      width: 700,
      height: 400,
      latitude: 34.0358307,
      longitude: -118.6778271,
      zoom: 15
    }
  };

  render() {
    return (
      <Grid container justify="center">
        <Card>
          <CardContent>
            <MapGL
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
              mapboxApiAccessToken={keys.mapboxApiAccessToken}
            >
             <Marker
              latitude={34.0358307}
              longitude={-118.6778271}
              offsetLeft={20}
              offsetTop={-10}
             >
              <Typography>
                Location of Event
              </Typography>
             </Marker>
            </MapGL>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
