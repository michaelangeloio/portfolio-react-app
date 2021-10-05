import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function prompt(state, promptType) {
  const foodValueMap = ['Pizza ', 'Burger ', 'Tea ', 'Home Cookin ']

  switch (promptType) {
    case 'foodPrompt':
      try {
        if (state['foodValue'] === null) {
          console.log("Game not played, printing default info");
          return (
            <Typography align="center">
              Looks like you have not played the game! To get the most out of this experience,
              please
              <Link href="/landing" color="inherit">
                <Button variant="contained" color="success" style = {{margin: 4}}>play</Button>
              </Link>!</Typography>
          )
        } else {
          const answer = foodValueMap[state['foodValue']]

          return (
            <Typography align="center">
              So, {answer} sounds good right now? Let's see what everyone else wants:</Typography>
          )
        }
      } catch (error) {
        return ("Please play the Game")
      }
    default:
      return 'Error'
  }
}

export default prompt;