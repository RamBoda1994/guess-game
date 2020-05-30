import React from 'react';
import {TextField,Button} from '@material-ui/core';

const Form =  ({returnGuessToApp}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        returnGuessToApp(e.target.elements.guess.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <TextField style={{paddingBottom:"20px"}} fullWidth type="number" name="guess" label="Enter you guess..." required/>
            <Button fullWidth variant="contained" color="primary" type="submit">GUESS</Button>
        </form>
    )
}

export default Form;