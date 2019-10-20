import React from 'react';
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
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    mealOption: '',
    plusOnefirstName: '',
    plusOnelastName: '',
    plusOneemail: '',
    plusOne: false,
    plusOnemealOption: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const progressClass = 'classes.isLoading';

  const handlePlusOne = () => {
    setChecked(prev => !prev);
  };

  const handleModal = () => {
    setOpen(prev => !prev);
    setIsLoading(prev => !prev);
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
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Meal Option</FormLabel>
              <RadioGroup 
                aria-label="meal type"
                name="mealType"
                value={values.mealOption}
                onChange={handleChange('mealOption')}
              >
                <FormControlLabel
                  value="vegetarian"
                  control={<Radio />}
                  label="Vegetarian"
                />
                <FormControlLabel
                  value="meat"
                  control={<Radio />}
                  label="Meat"
                />
                <FormControlLabel
                  value="fish"
                  control={<Radio />}
                  label="Fish"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={<Switch checked={checked} 
              onChange={handlePlusOne} />}
              label="Will you be bringing a date?"
              className={classes.formLabel}
            />
            <Grow in={checked}>
              <div className={classes.growDiv}>
                <TextField
                  fullWidth
                  id="plus-one-first-name"
                  label="+1 First Name"
                  className={classes.textField}
                  value={values.plusOnefirstName}
                  onChange={handleChange('plusOnefirstName')}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  id="plus-one-last-name"
                  label="+1 Last Name"
                  className={classes.textField}
                  value={values.plusOnelastName}
                  onChange={handleChange('plusOnelastName')}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  id="plus-one-email"
                  label="+1 Email"
                  className={classes.textField}
                  value={values.plusOneemail}
                  onChange={handleChange('plusOneemail')}
                  margin="normal"
                  autoComplete="email"
                  required
                />
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">+1 Meal Option</FormLabel>
                  <RadioGroup 
                    aria-label="meal type"
                    name="mealType"
                    value={values.plusOnemealOption}
                    onChange={handleChange('plusOnemealOption')}
                  >
                    <FormControlLabel
                      value="vegetarian"
                      control={<Radio />}
                      label="Vegetarian"
                    />
                    <FormControlLabel
                      value="meat"
                      control={<Radio />}
                      label="Meat"
                    />
                    <FormControlLabel
                      value="fish"
                      control={<Radio />}
                      label="Fish"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grow>
          </form>
          <div>
            <Fab 
              color="secondary"
              aria-label="send"
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
                <CircularProgress className={progressClass} color="secondary" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Modal>
      <Divider />
      <Typography 
        variant="caption" 
        component="p"
        align="justify"
      >
        <FormControlLabel
          control={
            <a target="_top"
                rel="noopener noreferrer"
                href="mailto:Luigi.Campbell@outlook.com">
                <IconButton color="primary">
                    <EmailIcon />
                </IconButton>
            </a>
          }
          label={" If anything comes up, please email: Luigi.Campbell@outlook.com with the subject tag **RSVP** NOTE: The bag of fucks empties out the day of the wedding ~"}
          labelPlacement="end"
        />
      </Typography>
    </Card>
  );
}

export default RSVP;
