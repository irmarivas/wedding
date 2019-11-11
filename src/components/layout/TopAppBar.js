import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../timer/Timer';
import About from '../pages/About';
import RSVP from '../pages/RSVP';
import Map from '../map/Map';
import {
  HomeTwoTone as HomeIcon,
  FavoriteTwoTone as HeartIcon,
  SendTwoTone as RSVPIcon,
} from '@material-ui/icons/';
import { AppBar, Box, Divider, Paper, Tabs, Tab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
const firecracker = require('../../assets/images/luigi_assumes_irma_is_his_girlfriend.jpg');

 const useStyles = makeStyles(theme => ({
    headerText: {
      fontFamily: 'Cookie',
      fontSize: '1.5rem'
    }
  }));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TopAppBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { width, height } = useWindowSize;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Confetti
        // recycle={false}
        gravity={.1}
        wind={.03}
        opacity={.7}
        width={width}
        height={height}
        colors={['#ff007f','red','#ffdee3','#ffd3dc','#fdcbd5','#ffc2d4','#ffb9cb']}
      />
      <AppBar position="static" color="primary">
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="main"
          centered
        >
          <Tab title="When and Where" icon={<HomeIcon />} aria-label="When &amp; Where" {...a11yProps(0)} />
          <Tab title="Who and What" icon={<HeartIcon />} aria-label="Who &amp; What" {...a11yProps(1)} />
          <Tab title="Repondre Sil Vous Plait" icon={<RSVPIcon />} aria-label="R.S.V.P." {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Timer eventDate={new Date('January 12, 2020 11:30:00')}/>
        <Paper>
          <Box p={1} mt={3}>
            <Typography
              component="p"
              className={classes.headerText}
            >
              Irma and Luigi are officially joining forces!
              Welcome to our wedding website, we can’t wait to celebrate our special day with you.
              We’ve created this website as a convenient and interactive way to share all of the important details with you in the lead up to our wedding. 
            </Typography>
            <Divider />
            <Typography
              component="p"
              className={classes.headerText}
            >
              You can also read about our love story and if are so inclined, speak to &#8226;Jessica Shoemaker&#8226; about our Honeymoon Fund deposit box.
              So have fun, take a look around and don’t forget to RSVP!
              Finally, thank you for your ongoing love and support. We are excited to share this day with you and look forward to eating some good food with all our favorite people!
            </Typography>
          </Box>
        </Paper>
        <Map
          zoom={17}
          lat={34.0597614}
          long={-118.3447797}
          secondaryLat={34.0596387}
          secondaryLong={-118.3447817}
          ariaLabel="ceremony location"
          title="&#8226; Ceremony Location &#8226;"
          locationType="Chapel"
          subheader="Please arrive 15 minutes before. Ceremony starts (and doors close) promptly at 11:30 am &#8226; Albertson Wedding Chapel, 834 South La Brea Ave., Los Angeles, CA 90036"
          footer="**PARKING IS FREE ON-SITE AND THERE IS STREET-PARKING, AT YOUR DISCRETION. WE RECOMMEND UBERING."
        />
        <Map
          zoom={15.5}
          lat={34.0729502}
          long={-118.3579377}
          secondaryLat={34.0736567}
          secondaryLong={-118.3596783}
          ariaLabel="reception location"
          title="&#8226; Reception Location &#8226;"
          locationType="RESTAURANT"
          subheader="Guests are welcome to arrive at 1:30 pm &#8226; 189 The Grove Dr Suite Z80, Los Angeles, CA 90036"
          footer="**PARKING IS FREE FOR 2 HOURS AT THE GROVE WITH VALIDATION FROM MAGGIANO'S (FRONT DESK). VALET IS LIKE $12, WE RECOMMEND PARKING AT THE GROVE."
        />
      </TabPanel>
      <TabPanel value={value} index={1}>       
        <About
          cardTitle={`Our first few dates`}
          cardHeaderTitle={`Vista Theater and more`}
          cardSubHeader={`Sunday, January 15, 2017`}
          cardMediaTitle={`Smile for the Camera`}
          highlight={`Irma and Luigi's adventure began on January 15, 2017 in Los Angeles, where they met for the first     time on a blind date. Irma had answered the first of three important questions with a resounding 'yes', or was    it an 'ok...'-mayhaps an eyeroll?\n\n
            Luigi made his way through the narrow streets of East Hollywood for the first of many times to Irms' apartment. He remembered looking at her boots and thinking, "Noice". That first date was a trek around the city of angels; it included Thai food, getting drinks and beignets at the Black Cat, watching LaLaLand at the Vista, and grabbing coffee at Caffe Vita. The date lasted all day. Between the two of them, the conversational topics were endless.  It was a date for the coloring books.       `}
          cardImage={`https://lh3.googleusercontent.com/enISAD58Y-m3hk6wxIru2bHF2WT8OwCrenvUdiMHiWHF_xKz7OShCEz-vV1-f1zy9f_-OmupDvQ_QKyyYuLEzcRJs6wYQOvaL2JGS1PSF3uY6_fGZfFFPTozpEjrNypQX4PIbA4Xkw=w575-h767-no`}
        />
        <Divider />
        <About
          cardTitle={`Luigi asks the second Big Question`}
          cardHeaderTitle={`Chinatown's Year of the Cock (tee hee) Race`}
          cardSubHeader={`Sunday, February 12, 2017`}
          cardMediaTitle={`Winners`}
          highlight={`The following weekend was a trip through Claremont after waiting for what seemed like eternity, for Luigi to finish his Grad Paper on Mathematics Education. Countless episodes of Game of Thrones could not satiate Irms' thirst for travel and exploring, so Luigi took her to the streets of downtown, eating, drinking and engaging in merry-making. Twas many fun.\n\n

          On February 12th, 2017 they ran the firecracker 5k in Chinatown, where Luigi asked Irma the second of three important questions "you’re my girlfriend, right?" To which Irma replied, "Um... you haven't asked me to be your girlfriend yet." then silence, followed by laughter and Luigi proceeded to ask "Irma will you be my girlfriend?" From then on they continued to grow their journey together.`
          }
          cardImage={firecracker}
        />
        <Divider />
        <About
          cardTitle={`Our first camping trip`}
          cardHeaderTitle={`Barnsdall Park, East Hollywood`}
          cardSubHeader={`Saturday, February 3, 2018`}
          cardMediaTitle={`We got lost`}
          highlight={`Despite their shared love for ice cream, Irms was particular about exercising. Luigi took this opportunity to get into shape by running with Irms for 5ks using fixed interval training. They ran in Silver Lake, Echo Park, Southridge, Santa Monica, Runyon Canyon, Lake Arrowhead, Arrow Bike Path, East Hollywood and Barnsdall Park. Luigi and Irms also shared a passion for hiking, eloping for weekends to climb and hike Joshua Tree, Rancho Cucamonga, Cahuenga Peak, Saddle Peak, Solstice Canyon, Tillamook, Santa Barbara and countless other sites.  
           
          Such an active lifestyle encouraged a voracious appetite. Irms and El  would frequent the various arts districts, EHo, WeHo, DTLA, Larchmont, Burbank and Malibu mostly getting ice cream. Incidentally, they prefer McConnell's, Salt and Straw and Jeni's from favorite to favoritest, respectively. They currently reside in KTown creeping at Tipsi by Chef Kang (where the chili is fantastic).`
          }
          cardImage={`https://lh3.googleusercontent.com/FZXEvXv2xtA1cmuwThgkRX3rxwLp-rKOQr_-AKgg5fa8O1iI88rrlGRp5OLlf4gmzTMMJw4BI6Ycxxn4BDXCePl0_A4i0ivSr1hOVLBtYMjlNmU-lAJjdiRWubeYWj1xzTnNslLrRQ=w1279-h959-no`}
        />
        <Divider />
        <About
          cardTitle={`Our first camping trip`}
          cardHeaderTitle={`Little Harbor, Catalina Island`}
          cardSubHeader={`Saturday, November 25, 2017`}
          cardMediaTitle={`We got lost`}
          highlight={`Irms loves to travel, and Luigi picked up on it right away, having grown up traveling with his family. Luigi surprised Irms with a mutually planned roadtrip to Portland, Oregon. It was an unforgettable slide down Siskiyou Pass culminating at the Tulip Festival after meeting Zach, an old friend. This was just the beginning of their Travels. In the fall they camped out for a week on Catalina Island, in Little Harbor. They trekked through the mountains for 12 hours to ressupply despite planning ahead of time. They battled coyotes, pitch black stretches of grassland, and steep slopes to get back to their glorious tent on a cliff, overlooking the ocean.`
          }
          cardImage={`https://lh3.googleusercontent.com/V1fNDv5w5Egphs32dD-kg4CED7qtXH-93ORKsDVVzKqItBsbN7YmIe8cR-rHIhOcBe4uowbw-edrFU2k52b142Fx_SIn3vXDcLhYwSJ36E6RNR5gLPxBfBnBszAWXDkNdAo-OJ8M3g=w1444-h959-no`}
        />
        <Divider />
        <About
          cardTitle={`Jungle Adventure (Ricardo's Birthday)`}
          cardHeaderTitle={`Tlalolulco, Jalisco`}
          cardSubHeader={`Sunday, July 23, 2017`}
          cardMediaTitle={`We got lost`}
          highlight={`El had never experienced such exhiliration with another person in the face of the unknown. This pushed him to finally take his girl to his home town and meet his God Father, Ricardo. Luigi enlisted the help of his aunt, Marta Espinosa, to show Irma the world he grew up in. They journeyed through jungles, mountains, busy markets, narrow streets, vibrant villages and old cities. The last place they visited was of course his home town of El Grullo, Jalisco, where Irms finally met El's God Father and Grand Father. Irma's ride or die attitude opened a door in Luigi that he doubted would ever open.`
          }
          cardImage={`https://lh3.googleusercontent.com/2q0Yq4X63RNW7HMWVZjhzahKWXCpIoa8-KaXe-KYjozFs4HbjTsaEtTil1p3ron9j-26nDRADmVDCmog-g-yDTOK5jztWqtuajJRDMpJDxLjcAgJYw3Yfb6CLMeBli2cTwx65jgHIA=w1154-h767-no`}
        />
        <Divider />
        <About
          cardTitle={`Gettin' gelato en Roma, (not DF)`}
          cardHeaderTitle={`Rome, Italy`}
          cardSubHeader={`Saturday, November 24, 2018`}
          cardMediaTitle={`We got lost`}
          highlight={`Luigi immediately began to plan elaborate ways to show her how much she meant to him. He conspired with her friend Anna Tiger. Many failed ideas later, including enlisting her father and brother to kidnap him and film a ransom video, He figured it out-take her to London and on the Eye overlooking the Thames, at the zenith ask her for her hand.In mid June 2018 Luigi began to plan a special trip around Europe for the both of them. The trip was truly memorable; Dinner at Dishoom's was spectacular, Irms didn't want to go on the Eye, a Brexit protest, some missed flights (It’s too long of a story to type), uncomfortable bed situations at hotels.`
          }
          cardImage={`https://lh3.googleusercontent.com/KMsZhq45cWzeUmqSx9dAl5iTTpjaL3Gs6Px5sulDaxlTclWNUZhf31cnn3JlwzfF4gKSYgyf1UnMHv-ziAJgs4oCRBqT9Aj30sE36whHq6DzGqPShzr1rGG7Hf12mx-D4i2XVj0SIQ=w1279-h959-no`}
        />
        <Divider />
        <About
          cardTitle={`Promenade dans le Rue des Anglais`}
          cardHeaderTitle={`Nice, France`}
          cardSubHeader={`Sunday, November 25, 2018`}
          cardMediaTitle={`The proposal`}
          highlight={` After missing the first opportunity to propose, El tried to lure Irms to the Castle after their night at the Christmas Market in Edinburgh and he realized that although he had got the perfect spot, he had forgotten the ring in his bag. They ended up going to Italy where he bought her some Ice Cream, took her to all the sights and as he was about to take her out in front of the Vatican again to propose, the Residenza Palazzo had locked them in due to the curfew for the Pope's mass the next day-needless to say fuuuuuuuuck... but through it all being together was all that mattered and on November 25, 2018 in Nice, France on the last day of the trip, Luigi took Irma on a walk on the Rue Des Anglais in the French Riviera where he got down on one knee and asked Irma the third big question, "Will you marry me?" and the rest is history in progress.`
          }
          cardImage={`https://lh3.googleusercontent.com/VLrwPJ4ZFCEDiC__QUV0YWuGlng19mfsHkqayCyAHTP-J8VrRcCWonTTIinoQHWUOatLJD9vpLKP87MyzLWUg5nY9Ek7BtLXoSMl0k737l56pmot1TW5GX_EEtl4fKL49HaoojY36g=w721-h959-no`}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RSVP />
      </TabPanel>
    </React.Fragment>
  );
}

export default TopAppBar;
