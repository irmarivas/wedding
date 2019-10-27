import React from 'react';
import data from '../../assets/js/data';
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
// import { FirebaseContext } from '../../firebaseConfig'
console.log(data);
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
    marginRight: theme.spacing(2),
  },
}));

const RSVP = () => {
  const classes = useStyles();
  const [isAttending, setIsAttending] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    ceremonyAndBrunch: '',
    // plusOnefirstName: '',
    // plusOnelastName: '',
    // plusOneemail: '',
    // plusOne: false,
    // plusOneceremonyAndBrunch: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [guestListMessage,setGuestListMessage] = React.useState('');


  const handleAttending = () => {
    setIsAttending(prev => !prev);
  };

  const handleModal = () => {
    setOpen(prev => !prev);
    setIsLoading(prev => !prev);
    const isInGuestList = data.has(`${values.firstName.toLowerCase()} ${values.lastName.toLowerCase()}`);
    console.log('are they even allowed to go?',isInGuestList); 
    let dbMessage = '';

    if(isInGuestList && isAttending){
      dbMessage = `Nice, you're in!`;
    } else if(isInGuestList && !isAttending) {
      dbMessage = `Thanks for your response! Keep an eye out for the Live Stream Link :D`;
    } else {
      dbMessage = `wtf, Something went wrong...ಠ_ಠ`;
    }

    setTimeout(() => {
      setIsLoading(false);
      setGuestListMessage(dbMessage);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }, 3000);
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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
              required
            />
            <FormControlLabel
              control={<Switch checked={isAttending} 
              onChange={handleAttending} />}
              label="Will you be attending?"
              className={classes.formLabel}
            />
            <Grow in={isAttending}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Meal Option</FormLabel>
                <RadioGroup 
                  aria-label="attending ceremony and or brunch"
                  name="ceremonyAndBrunch"
                  value={values.ceremonyAndBrunch}
                  onChange={handleChange('ceremonyAndBrunch')}
                >
                  <FormControlLabel
                    value="Ceremony"
                    control={<Radio />}
                    label="Ceremony"
                  />
                  <FormControlLabel
                    value="Ceremony and Brunch"
                    control={<Radio />}
                    label="Ceremony and Brunch"
                  />
                  <FormControlLabel
                    value="Ceremony and Carne Asada"
                    control={<Radio />}
                    label="Ceremony, Brunch &amp; Pre-Game"
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
              onClick={handleModal}
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
                    Sending your response ...
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
                href="mailto:Luigi.Campbell@outlook.com">
                <IconButton color="secondary">
                    <EmailIcon />
                </IconButton>
            </a>
          }
          label={" Problem? Set the subject tag to **RSVP** NOTE: The bag of fucks is empty the day of the wedding ~"}
          labelPlacement="end"
        />
      </Typography>
    </Card>
  );
}

export default RSVP;
