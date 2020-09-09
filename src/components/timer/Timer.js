import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider
} from '@material-ui/core';

const heroPic = require('../../assets/images/irma_luigi_laughing_together.jpg');
const handHolding = require('../../assets/images/much_hand_holding.jpg');

const useStyles = makeStyles(theme => ({
  media: {
    height: 150,
    paddingTop: '100%',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  deskTopMedia: {
    height: 50,
    paddingTop: '10%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  timerText: {
    fontSize: '1rem',
    fontFamily: 'Cookie',
    [theme.breakpoints.up('sm')]: {
      fontSize:'2rem',
    },
  }
}));

const Timer = ({ eventDate }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const [timeLeft, setTimeLeft] = React.useState({
		days: 0,
		hours: 0,
		min: 0,
		sec: 0
	});

  const calculateTimeLeft = eventDate => {
    let delta = (Date.parse(new Date(eventDate)) - Date.parse(new Date())) / 1000;
    if(delta <= 0) {
      return false;
    }

    const timeLeftState = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
    }

    if (delta >= 86400) {
			// 24 * 60 * 60
			timeLeftState.days = Math.floor(delta / 86400);
			delta -= timeLeftState.days * 86400;
		}
		if (delta >= 3600) {
			// 60 * 60
			timeLeftState.hours = Math.floor(delta / 3600);
			delta -= timeLeftState.hours * 3600;
		}
		if (delta >= 60) {
			timeLeftState.minutes = Math.floor(delta / 60);
			delta -= timeLeftState.minutes * 60;
		}
		timeLeftState.seconds = delta;

		return timeLeftState;
  };

  const addLeadingZeros = value => {
		const numericalValue = value || 0;
    let result = String(numericalValue);
		while (result.length < 2) {
			result = `0${result}`;
		}
		return result;
	};

   React.useEffect(() => {
    const intervalId = setInterval(() => {
      const NOW = calculateTimeLeft(eventDate);
      if(NOW) {
        setTimeLeft(NOW);
        setIsLoading(false);
      } else {
        clearInterval(intervalId);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);

   });

   return (
     <Grid container justify="center">
        <Grid item xs={12}>
          <Card title="Irma and Luigi Join Forces - Save the Date">
            <CardHeader
              aria-label="save the date"
              disableTypography={false}
              title="Irma and Luigi Join Forces"
              subheader="Save The Date &#8226; Sunday, January 12, 2020"
              titleTypographyProps={
                {
                  variant:'overline'
                }
              }
            />
            <CardMedia 
              title="Such lulz"
              className={classes.media}
              image={heroPic}
              alt="Irma and Luigi, left to right"
            />
            <CardMedia 
              title="Much Holding Hands"
              className={classes.deskTopMedia}
              image={handHolding}
              alt="Joining Hands"
            />
            <Grid container justify="center">
            {!isLoading ? 
            (
              <CardContent>
                <Typography component="h1" variant="overline" className={classes.timerText}>
                  {addLeadingZeros(timeLeft.days)}{' d  '}
                  {addLeadingZeros(timeLeft.hours)}{' h '}
                  {addLeadingZeros(timeLeft.minutes)}{' m '}
                  {addLeadingZeros(timeLeft.seconds)}{' s'}
                </Typography>
              </CardContent>
            ) :
            (
              <CardContent>
                <CircularProgress color="secondary" />
                <br />
                <br />
              </CardContent>
            )
          }
          </Grid>
            <Divider />
            <Grid container justify="center">
              <Typography component="p" variant="overline">
                Until The Wedding
              </Typography>
            </Grid>
          </Card>
        </Grid>
     </Grid>
   );
}

export default Timer;
