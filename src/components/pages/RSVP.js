import React, { useState, useEffect } from 'react';
// import data from '../../assets/js/data';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Grow,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Switch, 
  TextField,
  Typography
} from '@material-ui/core';
import { 
  Email as EmailIcon,
  Navigation as NavigationIcon
} from '@material-ui/icons';
import firebase from '../../firebaseConfig/firebase';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  formLabel: {
    width: '100%'
  },
  growDiv: {
    width: '100%',
    marginRight: theme.spacing(4),
  },
  isLoading: {
    display: 'block',
  },
  paper: {
    position: 'absolute',
    top:'40%',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
}));

const RSVP = () => {
  const classes = useStyles();
  const toTitleCase = s => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substring(1).toLowerCase() ); 
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    events: '',
    id: ''
  });
  const [isClean, setIsClean] = useState(false);
  const [isAttending, setIsAttending] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [guestListMessage, setGuestListMessage] = useState('');
  const [responseMessage,setResponseMessage] = useState('Sending your response...');

  useEffect(() => {
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        firebase
          .firestore()
          .collection('guestlist')
          .onSnapshot(snapshot => {
            const guests = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            if(!isClean) {
              const GUESTMAP = new Map();

              guests.forEach(guest => GUESTMAP.set(guest.id,{ firstName: guest.firstName, lastName: guest.lastName}));
              const url = new URL(window.location);
              const guestKey = url.searchParams.get('guestId');
              if(guestKey) {
                const g = GUESTMAP.get(guestKey);
                // console.log(values);
                const firstName = g ? toTitleCase(g.firstName) : '';
                const lastName = g ? toTitleCase(g.lastName) : '';
                const id = guestKey ? guestKey : ''
                const email = '';
                const events = '';
                
                setValues({ 
                  firstName,
                  lastName,
                  id,
                  email,
                  events
                });
                setIsClean(true);
              }
            }
          });
      } else {
        console.log('Who are you...?');
      }
    });

  }, [values, isClean]);

  const handleAttending = () => {
    setIsAttending(prev => !prev);
  };
  // const populateDatabase = () => {
  //   console.log('pushing data');
  //   data.forEach(guest => firebase.firestore().collection('guestlist').add(guest).catch(err=>console.log(err)) );
  // }
  const handlePost = () => {
    const isInGuestList = values.id !== '' && values.id !== undefined;
    setIsLoading(true);
    setOpen(true);
    let dbMessage = '';
    if(isInGuestList){
      const events = values.events;
      // console.log(events);
      const guest = {
        firstName: values.firstName.toLowerCase(),
        lastName: values.lastName.toLowerCase(),
        email: values.email,
        events: events !== undefined && events !== '' ? events : isAttending ? 'Ceremony' : '',
        isAttending
      };
      const guestRef = firebase
        .firestore()
        .collection('guestlist')
        .doc(values.id);
      firebase.firestore().runTransaction(t => {
        return t.get(guestRef)
          .then(doc => {
            t.update(guestRef, guest);
          })
      }).then(r => {
        console.log('SUCCESS');
        setIsLoading(false);
        setResponseMessage('Success');
        if(isInGuestList && isAttending){
          dbMessage = `Nice, you're in!`;
        } else if(isInGuestList && !isAttending) {
          dbMessage = `Thanks for your response, ${values.firstName}! Keep an eye out for the Live Stream Link :D`;
        }
        setGuestListMessage(dbMessage);
        setTimeout(() => {
          setOpen(false);
        }, 3000); 
      }).catch(e => {
        console.log('Oh no, I booped an ERROR...', e);
        dbMessage = `wtf, Something went wrong...ಠ_ಠ`;
        setResponseMessage('Shit...');
        setIsLoading(false);
        setGuestListMessage(dbMessage);
        setTimeout(() => {
          setOpen(false);
        }, 2500);
      });
        
    } else {
      setTimeout(() => {
        dbMessage = `wtf, Something went wrong...ಠ_ಠ`;
        setResponseMessage('Shit...');
        setIsLoading(false);
        setGuestListMessage(dbMessage);

        setTimeout(() => {
          setOpen(false);
        }, 2500);
      }, 1000);
    }

  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value.trim() });
  };

  return (
    <Card>
      <CardHeader
        aria-label="save the date"
        disableTypography={false}
        title="RSVP"
        subheader="Deadline is January 2nd"
        titleTypographyProps={
          {
            variant:'overline'
          }
        }
      />
      <CardContent>
        <Grid container justify="center">
          <form 
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="first-name"
              label="First Name"
              className={classes.textField}
              value={values.firstName}
              onChange={handleChange('firstName')}
              margin="normal"
              required
              helperText={values.firstName === '' ? 'We need this to find you in the guest list' : ''}
              error={values.firstName === ''}
            />
            <TextField
              fullWidth
              id="last-name"
              label="Last Name"
              className={classes.textField}
              value={values.lastName}
              onChange={handleChange('lastName')}
              margin="normal"
              required
              helperText={values.lastName === '' ? 'We need this to find you in the guest list' : ''}
              error={values.lastName === ''}
            />
            <TextField
              fullWidth
              id="email"
              label="Email"
              className={classes.textField}
              value={values.email}
              onChange={handleChange('email')}
              margin="normal"
              autoComplete="email"
              // required
            />
            <FormControlLabel
              control={<Switch checked={isAttending} 
              onChange={handleAttending} />}
              disabled={values.firstName === '' || values.lastName === ''}
              className={classes.formLabel}
              label={!isAttending ? 'Will you be attending?' : `Get ready to have a great time!`}
            />
            <Grow in={isAttending}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Events List &#8226; Pre Game and Reception Venues TBD</FormLabel>
                <RadioGroup 
                  aria-label="attending ceremony and or reception"
                  name="events"
                  value={values.events}
                  onChange={handleChange('events')}
                >
                  <FormControlLabel
                    value="Ceremony"
                    control={<Radio />}
                    label="Ceremony"
                  />
                  <FormControlLabel
                    value="Ceremony and Reception"
                    control={<Radio />}
                    label="Ceremony and Reception - 1:00 pm &#8226; 3:30 pm"
                  />
                  <FormControlLabel
                    value="Ceremony, Reception &amp; Pre-Game"
                    control={<Radio />}
                    label="Ceremony, Reception &amp; Pre-Game - starts around &#8226; 3pm **Saturday**"
                  />
                </RadioGroup>
              </FormControl>
            </Grow>
          </form>
          <div>
            <Fab 
              color="secondary"
              aria-label="send"
              label="send"
              title="send"
              className={classes.fab}
              onClick={handlePost}
              disabled={values.firstName === '' || values.lastName === ''}
            >
              <NavigationIcon />
            </Fab>
          </div>
        </Grid>
      </CardContent>
        <Modal
          aria-labelledby="sending request"
          aria-describedby="sending request"
          open={open}
        >
          <Grid container justify="center">
            <div className={classes.paper}>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Typography 
                    variant="overline"
                    component="p"
                  >
                    {responseMessage}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                { isLoading ?
                  <CircularProgress 
                    className={classes.isLoading} 
                    color="secondary"
                  />:
                  <Grow in={!isLoading}> 
                    <Typography
                      variant="overline"
                      component="p"
                    >
                      {guestListMessage}
                    </Typography>
                  </Grow> 
                }
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Modal>
      <Divider />
      <Typography 
        variant="caption" 
        component="p"
        align="center"
      >
        <FormControlLabel
          control={
            <a target="_top"
                rel="noopener noreferrer"
                href="mailto:luigi.campbell@outlook.com">
                <IconButton color="secondary">
                    <EmailIcon />
                </IconButton>
            </a>
          }
          label={"Problem? Set the subject tag to **RSVP** NOTE: The bag of fucks is empty the day of the wedding ~"}
          labelPlacement="end"
        />
      </Typography>
    </Card>
  );
}

export default RSVP;
