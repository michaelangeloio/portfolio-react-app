import React from "react";
import { Container } from "react-grid-system";
import { useHistory } from "react-router-dom";


// Components
import Headline from "../common/headline";


// Auxillary Packages

import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FormControl, FormGroup , FormControlLabel, Checkbox} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import ButtonGroup from '@material-ui/core/ButtonGroup'

//Icon Components
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import LocalPizza from '@material-ui/icons/LocalPizza';
import Fastfood from '@material-ui/icons/Fastfood';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverage';
import Kitchen from '@material-ui/icons/Kitchen';

import SportsBaseball from '@material-ui/icons/SportsBaseball';
import SportsBasketball from '@material-ui/icons/SportsBasketball';
import SportsFootball from '@material-ui/icons/SportsFootball';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import SportsGolf from '@material-ui/icons/SportsGolf';
import SportsSoccer from '@material-ui/icons/SportsSoccer';



import SportsBaseballOutlined from '@material-ui/icons/SportsBaseballOutlined';
import SportsBasketballOutlined from '@material-ui/icons/SportsBasketballOutlined';
import SportsFootballOutlined from '@material-ui/icons/SportsFootballOutlined';
import DirectionsRunOutlined from '@material-ui/icons/DirectionsRunOutlined';
import SportsGolfOutlined from '@material-ui/icons/SportsGolfOutlined';
import SportsSoccerOutlined from '@material-ui/icons/SportsSoccerOutlined';




//Styling

const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {main: '#00e676' },
      secondary: {main: '#00e676'}
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2),
    marginTop2: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(7),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  step_label_root: {
      fontSize: ""
  }
 
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
 
    },
  }));

    function Question2()  {


        const history = useHistory();

        const routeChange = () =>{ 
            let path = `/portfolio`; 
            history.push(path);
          }

        //Stepper Properties
        const classes = useStyles();
        const [activeStep, setActiveStep] = React.useState(0);
        const steps = getSteps();
      
        const handleNext = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
      
        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };
      
        const handleReset = () => {
          setActiveStep(0);
        };

        //Bottom Nav1 Properties

        const [whoValue, setWhoValue] = React.useState(0);

        //Bottom Nav2 Properties
        const [foodValue, setFoodValue] = React.useState(0);

        //Checkbox Properties
        const classesCheckbox = useStyles2()
        const [state, setState] = React.useState({
            baseball: false,
            basketball: false,
            football: false,
            track: false,
            gold: false,
            soccer: false
          });
        
          const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
          };

        //Stepper
        function getSteps() {
            return ['Which one are you?', 'What sounds good right now?', 'Favorite Sports?'];
          }
          
          function getStepContent(step) {
            switch (step) {
              case 0:
                return (
                      //Bottom Nav
                <div>
                  <BottomNavigation
                  value={whoValue}
                  onChange={(event, newValue) => {
                    setWhoValue(newValue);
                  }}
                  showLabels
                  className={classes.root}
                >
                  <BottomNavigationAction label="Visitor" icon={<EmojiPeople />} />
                  <BottomNavigationAction label="Friend"  icon={<FavoriteIcon/>} />
       
                </BottomNavigation></div>
                );
              case 1:
                return (                  <div><BottomNavigation
                    value={foodValue}
                    onChange={(event, newValue) => {
                      setFoodValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                  >
                    <BottomNavigationAction label="Pizza"  icon={<LocalPizza  />} />
                    <BottomNavigationAction label="Burger"  icon={<Fastfood  />} />
                    <BottomNavigationAction label="Tea"  icon={<EmojiFoodBeverage />} />
                    <BottomNavigationAction label= "Home Cookin'" icon={<Kitchen />} />

         
                  </BottomNavigation></div>);
              case 2:
                return ( 
                 
                    <div className={classes.root}>
                         <Divider />
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup row className={classes.formGroup}>

                    <FormControlLabel 
                            control={<Checkbox checked={state.checkedG} onChange={handleChange} name="baseball" icon={<SportsBaseballOutlined />} checkedIcon={<SportsBaseball />} />}
                            label="Baseball"
                        />
                    <FormControlLabel 
                            control={<Checkbox checked={state.checkedG} onChange={handleChange} name="basketball" icon={<SportsBasketballOutlined />} checkedIcon={<SportsBasketball />} />}
                            label="Basketball"
                        />
                    <FormControlLabel 
                            control={<Checkbox checked={state.checkedG} onChange={handleChange} name="football" icon={<SportsFootballOutlined />} checkedIcon={<SportsFootball />} />}
                            label="Football"
                        />
                    <FormControlLabel 
                            control={<Checkbox checked={state.checkedG} onChange={handleChange} name="track" icon={<DirectionsRunOutlined />} checkedIcon={<DirectionsRun />} />}
                            label="Track and Field"
                        />
                    <FormControlLabel 
                            control={<Checkbox checked={state.checkedG} onChange={handleChange} name="golf" icon={<SportsGolfOutlined />} checkedIcon={<SportsGolf />} />}
                            label="Golf"
                        />
                     <FormControlLabel 
                            control={<Checkbox checked={state.checkedG} onChange={handleChange} name="soccer" icon={<SportsSoccerOutlined />} checkedIcon={<SportsSoccer />} />}
                            label="Soccer"
                        />                       

                        </FormGroup>
                        </FormControl>
                        
                        </div>
                    
                );
              default:
                return 'Unknown step';
            }
          }
          

    
    return (
        
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="" title="Welcome" divider_1={true} position="center" />
                    <div className="div-center text-center">  
                    <ThemeProvider theme={darkTheme}>
                    <div className={classes.root}>
                    <Stepper  activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel><Typography component="span" fontSize = "large">{label}</Typography></StepLabel>
                            <StepContent >
                            <Typography  component="span" >{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                </div>
                                <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                                </div>
                            </div>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Divider/>
                        <Typography className = {classes.root}>
                            <Button variant="contained" color="primary" onClick={routeChange} className={classes.button}>
                                Show me the money!
                            </Button>
                            </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Back
                        </Button>
                        </Paper>
                    )}
                    </div>
                    </ThemeProvider>

                    </div>

                </Container>
         
            </div>
        </section>
     
    );
}

export default Question2;
