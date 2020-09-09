import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  { 
  Card, 
  CardContent, 
  CardHeader,
  CardMedia,
  Divider
} from '@material-ui/core';

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
  aboutText: {
    fontFamily: 'Cookie',
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem'
    },
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
            className={classes.aboutText}
          >
            {highlight}
          </Typography>
        </CardContent>
        <Divider />
      </Card>
    </div>
  );
}
export default About;
