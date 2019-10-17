import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  { Box,
          Card, 
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
          title="Chinatown's Year of the Cock (tee hee) Race"
          subheader="Sunday, February 12, 2017"
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
            missed flights (It's too long of a story to type), uncomfortable bed situations at hotels, but through it all being together was all that mattered and on November 25, 2018 in Nice, France on the last day of the Trip, Luigi took Irma on a walk on the French Riviera where he got 
            down on one knee and asked Irma the second of the two most important questions, "Will you marry me?" and the rest is history.

            Irma and Luigi's adventure began on January 15, 2017 in Los Angeles, where they met for the first time on a blind date. Irma had answered the first of three important questions with a resounding 'yes', or was it an 'ok...'-mayhaps an eyeroll?
            Luigi made his way through the narrow streets of East Hollywood for the first of many times to Irms' apartment. He remembered looking at her boots and thinking, "Noice". That first date was a trek around the city of angels; it included Thai food, getting drinks and beignets at the Black Cat, watching LaLaLand at the Vista, and grabbing coffee at Caffe Vita. The date lasted all day. Between the two of them, the conversational topics were endless.  It was a date for the coloring books. 
            
            The following weekend was a trip through Claremont after waiting for what seemed like eternity, for Luigi to finish his Grad Paper on Mathematics Education. Countless episodes of Game of Thrones could not satiate Irms' thirst for travel and exploring, so Luigi took her to the streets of downtown, eating, drinking and engaging in merry-making. Twas many fun.

            On February 12th, 2017 they ran the firecracker 5k in Chinatown, where Luigi asked Irma the second of three important questions "you’re my girlfriend, right?" To which Irma replied, "Um... you haven't asked me to be your girlfriend yet." then silence, followed by laughter and Luigi proceeded to ask "Irma will you be my girlfriend?" From then on they continued to grow their journey together.
            Irms was particular about exercising. Luigi took this opportunity to get into shape by running with Irms for 5ks using fixed interval training. They ran in Silver Lake, Echo Park, Southridge, Santa Monica, Runyon Canyon, Lake Arrowhead, Arrow Bike Path, East Hollywood and Barnsdall Park. Luigi and Irms also shared a passion for hiking, eloping for weekends to climb and hike Joshua Tree, Rancho Cucamonga, Cahuenga Peak, Saddle Peak, Solstice Canyon, Tillamook, Santa Barbara and countless other sites.  
           
            Such an active lifestyle encouraged a voracious appetite. Irms and El  would frequent the various arts districts, EHo, WeHo, DTLA, Larchmont, Burbank and Malibu mostly getting ice cream. Incidentally, they prefer McConnell's, Salt and Straw and Jeni's from favorite to favoritest, respectively. They currently reside in KTown creeping at Tipsi by Chef Kang (where the chili is fantastic).
            Irms loves to travel, and Luigi picked up on it right away, having grown up traveling with his family. Luigi surprised Irms with a mutually planned roadtrip to Portland, Oregon. It was an unforgettable slide down Siskiyou Pass culminating at the Tulip Festiva after meeting Zach, an old friend. This was just the beginning of their Travels. In the fall they camped out for a week on Catalina Island, in Little Harbor. They trekked through the mountains for 12 hours to ressupply despite planning ahead of time. They battled coyotes, pitch black stretches of grassland, and steep slopes to get back to their glorious tent on a cliff, overlooking the ocean. 
            
            El had never experienced such exhiliration with another person in the face of the unknown. This pushed him to finally take his girl to his home town and meet his God Father, Ricardo. Luigi enlisted the help of his aunt, Marta Espinosa, to show Irma the world he grew up in. They journeyed through jungles, mountains, busy markets, narrow streets, vibrant villages and old cities. The last place they visited was of course his home town of El Grullo, Jalisco, where Irms finally met El's God Father and Grand Father. Irma's ride or die attitude opened a door in Luigi that he doubted would ever open. 
            
            Luigi immediately began to plan elaborate ways to show her how much she meant to him. He conspired with her friend Ana Tiger. Many failed ideas later, including enlisting her father and brother to kidnap him a film a ransom video, He figured it out-take her to London and on the Eye overlooking the Thames, at the zenith ask her for her hand.
            
            In mid June 2018 Luigi began to plan a special trip around Europe for the both of them. The trip was truly memorable; Dinner at Dishoom's was spectacular, Irms didn't want to go on the Eye, a Brexit protest, some missed flights (It’s too long of a story to type), uncomfortable bed situations at hotels. After missing the first opportunity to propose, El tried to lure Irms to the Castle after their night at the Christmas Market in Edinburgh and he realized that although he had got the perfect spot, he had forgotten the ring in his bag. They ended up going to Italy where he bought her some Ice Cream, took her to all the sights and as he was about to take her out in front of the Vatican again to propose, the Residenza Palazzo had locked them in due to the curfew for the Pope's mass the next day-needless to say fuuuuuuuuck... but through it all being together was all that mattered and on November 25, 2018 in Nice, France on the last day of the trip, Luigi took Irma on a walk on the Rue Des Anglais in the French Riviera where he got down on one knee and asked Irma the third big question, "Will you marry me?" and the rest is history in progress.
          </Typography>
        </CardContent>
        <Divider />
        <Box p={1}>
          <Typography 
            component="p"
            align="justify"
            variant="overline"
          >
            Hi there, thanks for stopping by. I'm currently under construction. 
            Luigi Campbell, Software Engineer, Full Stack Dev, Salesforce Dev. Contact: luigi.campbell@outlook.com
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
export default About;
