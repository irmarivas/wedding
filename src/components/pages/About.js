import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  { 
  // Box,
  Card, 
  CardContent, 
  CardHeader,
  CardMedia,
  Divider
} from '@material-ui/core';
// const profilePic = require('../../assets/images/luigi_assumes_irma_is_his_girlfriend.jpg');
// pull all images from storage and put them in a map? get them by propkey

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
      width: '12%',
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

const  About = ({ 
  highlight,
  cardTitle,
  cardHeaderTitle,
  cardSubHeader,
  cardMediaTitle,
  cardImage
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card title={cardTitle}>
        <CardHeader
          disableTypography={false}
          title={cardHeaderTitle}
          subheader={cardSubHeader}
          titleTypographyProps={
            {
              variant:'overline'
            }
          }
        />
        <Divider />
        <CardMedia 
          title={cardMediaTitle}
          className={classes.media}
          image={cardImage}
          alt={cardMediaTitle}
        />
        <CardContent>
          <img 
            src={cardImage}
            alt={cardMediaTitle}
            title={cardMediaTitle}
            className={classes.inlineMedia}
          />
          <Typography
            component="p"
            align="justify"
            variant="overline"
          >
            {highlight}
          </Typography>
        </CardContent>
        <Divider />
        {/* <Box p={1}>
          <Typography 
            component="p"
            align="center"
            variant="overline"
          >
            Hi there, thanks for stopping by. I'm currently under construction. 
            Luigi Campbell, Software Engineer, Full Stack Dev, Salesforce Dev. Contact: luigi.campbell@outlook.com
          </Typography>
        </Box> */}
      </Card>
    </div>
  );
}
export default About;
