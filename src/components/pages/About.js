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
          title="Winners"
          className={classes.media}
          image={profilePic}
          alt="Winners"
        />
        <CardContent>
          <img 
            src={profilePic}
            alt="Winners"
            title="Winners"
            className={classes.inlineMedia}
          />
          <Typography
            component="p"
            align="justify"
            variant="overline"
          >
            Irma and Luigi's adventure began on January 15, 2017 in Los Angeles, where they met for the first time on a blind date.
            That first date included thai food, getting drinks at the Black Cat, watching LaLaLand at the Vista, and grabbing coffee
            at Caffe Vita. The conversational topics were endless. The date lasted for over 6 hours, it was a date for the books. From
            on February 12th,2017 they ran the firecracker 5k in Chinatown, where Luigi asked Irma the first of two important questions "you're 
   
            my girlfriend right?" To which Irma replied, "Um you haven't asked me to be your girlfriend yet." then silence, followed by 
            laughter and Luigi proceeded to ask "Irma will you be my girlfriend?" From then on they continued to grow their journey together.
            In mid June 2018 Luigi began to plan a special trip around Europe for the both of them. The trip was truly memorable, there were some 
            missed flights (It's too long of a story to type), uncomfortable bed situations at hotels, but through it all being together was all that mattered and on
            November 25, 2018 in Nice, France on the last day of the Trip, Luigi took Irma on a walk on the French Riviera where he got 
            down on one knee and asked Irma the second of the two most important questions, "Will you marry me?" and the rest is history.
          </Typography>
          <Typography 
            component="p"
            align="justify"
            variant="caption"
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
