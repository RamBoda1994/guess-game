import React from 'react';
import {Grid,Typography,Paper,Divider} from '@material-ui/core';
import Form from './components/Form';
import {generateRandomNumber} from './util';
import Progress from './components/Progress';

class App extends React.Component{

  state = {
    generatedNum : generateRandomNumber(),
    guess : undefined,
    allGuesses : [],
    attemps : 0

  }

  updateAppState = (value) => {
    const absDiff = Math.abs(value-this.generatedNum);

    this.setState( prevState => ({
      guess:value,
      allGuesses : [...prevState.allGuesses,{value}],
      attemps : prevState.attemps + 1
    }))
  }

  render(){

    const {allGuesses,attemps} = this.state;
    const guessList = allGuesses.map((item,index)=>{
      return (
      <li key={index}>
        <span>{item.value}</span>
      </li>
      )
    })

    return(
      <Grid container style={{height:"100hv", marginTop:"120px"}} justify="center" alignItems="center">
        <Grid item xs={3}>
          <Paper style={{padding:'50px'}} elevation={6}>
            <Typography align="center" variant="h3" gutterBottom>HOT or COLD</Typography>
            <Divider style={{margin:"30px 0"}}/>
            <Form returnGuessToApp={(value)=> this.updateAppState(value)}/>
            <Progress attemps={attemps} guessList={guessList}/>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default App;