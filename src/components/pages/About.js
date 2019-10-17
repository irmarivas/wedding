import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  { Card, 
          CardContent, 
          CardHeader,
          CardMedia,
          Divider
          } from '@material-ui/core';
const profilePic = require('../../assets/images/luigi_assumes_irma_is_his_girlfriend.jpg');

const useStyles = makeStyles(theme => ({
  media: {
    height: 150,
    paddingTop: '100%',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  inlineMedia: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      float: 'right',
      width: '30%',
      height: '40%',
      marginLeft: 15,
      marginBottom: 15
    },
  },
  highlitedText:{
    textDecoration: 'underline',
    textDecorationColor: '#F1AB00',
    textDecorationStyle: 'double'
  },
  avatar: {
    backgroundColor: '#F1AB00',
  }
}));

const  About = () => {
  const classes = useStyles();

  return (
    <div>
      <Card title="Luigi asks the second Big Question">
        <CardHeader
          disableTypography={false}
          title="Fire Cracker 5k"
          subheader="Sunday, February 12, 2017 @ Chinatown's Year of the Cock (tee hee) Race"
          titleTypographyProps={
            {
              variant:'overline'
            }
          }
        />
        <Divider />
        <CardMedia 
          title="Lewis Luartz"
          className={classes.media}
          image={profilePic}
          alt="Lewis Luartz - Lecture"
        />
        <CardContent>
          <img 
            src={profilePic}
            alt="Lewis Luartz - Lecture"
            title="Lewis Luartz"
            className={classes.inlineMedia}
          />
          <Typography 
            component="p"
            align="justify"
            variant="overline"
          >
            Hi there, thanks for stopping by. I'm currently under construction. 
            Luigi Campbell, Software Engineer, Full Stack Dev, Salesforce Dev. Contact: luigi.campbell@outlook.com
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default About;
